/**
 * 立面参数化几何生成
 *
 * 约定：主墙面位于 z=0，建筑向左沿 +X、向上沿 +Y 展开，凸窗/线条等凸出
 * 构件的外表面 z<0。面片法线采用照明计算约定：指向受光面外侧（灯所在一侧），
 * 主墙法线 n=(0,0,+1)；照度公式 cosα = u·n（u 为灯->点的入射单位向量）。
 * 所有面片按材质分离：墙(wall)/玻璃(glass)/装饰(trim)，玻璃不计照度统计、只算反射。
 */
import type { FacadeParams, FacadeGeometry, SurfacePatch, Vec3 } from '../types';

const N: Vec3 = [0, 0, 1];

function patch(
  id: string,
  material: SurfacePatch['material'],
  cx: number,
  cy: number,
  cz: number,
  width: number,
  height: number,
  normal: Vec3 = N,
): SurfacePatch {
  return { id, material, center: [cx, cy, cz], width, height, normal };
}

export function buildFacadeGeometry(f: FacadeParams): FacadeGeometry {
  const totalWidth = f.bays * f.bayWidth;
  const totalHeight = f.floors * f.floorHeight;
  const patches: SurfacePatch[] = [];
  let seq = 0;
  const nid = (p: string) => `${p}_${seq++}`;

  const bayWindowSet = new Set<number>();
  for (const bw of f.bayWindows) {
    for (let b = bw.bayStart; b < bw.bayStart + bw.bayCount; b++) bayWindowSet.add(b);
  }

  // ---- 1. 主立面：逐开间逐层，拆为墙带 + 玻璃带 ----
  for (let b = 0; b < f.bays; b++) {
    const x0 = b * f.bayWidth;
    const cx = x0 + f.bayWidth / 2;
    const isBayWindow = bayWindowSet.has(b);

    for (let fl = 0; fl < f.floors; fl++) {
      const y0 = fl * f.floorHeight;
      const cy = y0 + f.floorHeight / 2;

      if (isBayWindow) {
        // 凸窗覆盖的开间：主墙面整体视为墙体（凸窗构件另行生成）
        patches.push(patch(nid('wall'), 'wall', cx, cy, 0, f.bayWidth, f.floorHeight));
        continue;
      }

      const glassH = f.floorHeight * f.windowRatio;
      const wallH = f.floorHeight - glassH;
      const sillH = wallH * 0.55; // 下部窗台墙高度，其余为上墙
      const glassY = y0 + sillH + glassH / 2;
      const lowerWallH = sillH;
      const upperWallH = wallH - sillH;

      if (lowerWallH > 1e-6) {
        patches.push(patch(nid('wall'), 'wall', cx, y0 + lowerWallH / 2, 0, f.bayWidth, lowerWallH));
      }
      patches.push(patch(nid('glass'), 'glass', cx, glassY, -0.01, f.bayWidth * 0.94, glassH * 0.9));
      if (upperWallH > 1e-6) {
        patches.push(
          patch(nid('wall'), 'wall', cx, y0 + lowerWallH + glassH + upperWallH / 2, 0, f.bayWidth, upperWallH),
        );
      }
    }
  }

  // ---- 2. 凸窗：正面玻璃 + 两侧墙侧板 + 顶底板 ----
  for (const bw of f.bayWindows) {
    const x0 = bw.bayStart * f.bayWidth;
    const w = bw.bayCount * f.bayWidth;
    const zFront = -bw.protrude;
    const glassH = totalHeight * bw.windowRatio * 0.9;
    const yGlass = totalHeight * 0.55;
    // 正面玻璃
    patches.push(patch(nid('bw_glass'), 'glass', x0 + w / 2, yGlass, zFront - 0.01, w * 0.96, glassH));
    // 正面上下墙带
    const topH = totalHeight - (yGlass + glassH / 2);
    if (topH > 1e-6) patches.push(patch(nid('bw_wall'), 'wall', x0 + w / 2, yGlass + glassH / 2 + topH / 2, zFront, w, topH));
    const botH = yGlass - glassH / 2;
    if (botH > 1e-6) patches.push(patch(nid('bw_wall'), 'wall', x0 + w / 2, botH / 2, zFront, w, botH));
    // 两侧板（法线指向 ±X，朝向灯所在的外侧空间）
    patches.push(patch(nid('bw_side'), 'wall', x0, totalHeight / 2, zFront / 2, bw.protrude, totalHeight, [-1, 0, 0]));
    patches.push(patch(nid('bw_side'), 'wall', x0 + w, totalHeight / 2, zFront / 2, bw.protrude, totalHeight, [1, 0, 0]));
  }

  // ---- 3. 装饰线条（trim） ----
  for (const line of f.lines) {
    if (line.orientation === 'horizontal') {
      // 横向腰线：沿全长，凸出墙面
      patches.push(
        patch(
          nid('line_h'),
          'trim',
          totalWidth / 2,
          line.offset,
          -line.protrude / 2,
          totalWidth,
          line.width,
          N,
        ),
      );
      // 凸出顶面/底面
      patches.push(
        patch(nid('line_h_cap'), 'trim', totalWidth / 2, line.offset + line.width / 2, -line.protrude / 2, totalWidth, line.protrude, [0, 1, 0]),
      );
    } else {
      // 竖向线条
      patches.push(
        patch(
          nid('line_v'),
          'trim',
          line.offset,
          totalHeight / 2,
          -line.protrude / 2,
          line.width,
          totalHeight,
          N,
        ),
      );
    }
  }

  return { totalWidth, totalHeight, wallZ: 0, patches };
}

/** 立面总面积 m²（含玻璃，按主墙面外包尺寸） */
export function facadeArea(geo: FacadeGeometry): number {
  return geo.totalWidth * geo.totalHeight;
}

import * as THREE from 'three';
import type { FacadeGeometry, SurfacePatch } from '../types';
import { falseColor } from '../core/colorRamp';
import type { PatchResult } from '../core/calc';

/** 材质调色板（确定值，无随机） */
export const MATERIAL_COLORS = {
  wall: 0x9aa3ad,
  glass: 0x16283c,
  trim: 0xc8ccd2,
  ground: 0x0c0f14,
};

function boxGeometry(w: number, h: number, d: number): THREE.BoxGeometry {
  return new THREE.BoxGeometry(w, h, d);
}

/** 面片中心/尺寸 -> Box mesh，贴在对应平面位置 */
function patchBox(p: SurfacePatch, depth: number, mat: THREE.Material): THREE.Mesh {
  const geo = boxGeometry(p.width, p.height, depth);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(p.center[0], p.center[1], p.center[2] + depth / 2);
  if (p.normal[0] !== 0) {
    // 侧面板：盒体宽度沿 Z，旋转 90°
    mesh.rotation.y = p.normal[0] > 0 ? -Math.PI / 2 : Math.PI / 2;
    mesh.position.set(p.center[0], p.center[1], p.center[2]);
  }
  mesh.userData.patchId = p.id;
  return mesh;
}

/** 构建立面 mesh（日景/建模用，纯色材质区分墙玻璃线条） */
export function buildFacadeMeshes(geo: FacadeGeometry): THREE.Group {
  const group = new THREE.Group();
  const wallMat = new THREE.MeshStandardMaterial({ color: MATERIAL_COLORS.wall, roughness: 0.85, metalness: 0.05 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: MATERIAL_COLORS.glass,
    roughness: 0.15,
    metalness: 0.4,
    transparent: true,
    opacity: 0.92,
  });
  const trimMat = new THREE.MeshStandardMaterial({ color: MATERIAL_COLORS.trim, roughness: 0.5, metalness: 0.3 });
  const mats = { wall: wallMat, glass: glassMat, trim: trimMat };

  for (const p of geo.patches) {
    const depth = p.material === 'glass' ? 0.04 : 0.12;
    group.add(patchBox(p, depth, mats[p.material]));
  }
  return group;
}

/** 把一个面片的采样照度绘制到 CanvasTexture，按面片网格逐格填伪彩 */
function patchFalseColorTexture(pr: PatchResult, reflectMode: boolean): THREE.CanvasTexture {
  const { cols, rows } = pr;
  const canvas = document.createElement('canvas');
  canvas.width = cols;
  canvas.height = rows;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(cols, rows);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      const value = reflectMode && pr.patch.material === 'glass' ? pr.reflected[idx] : pr.lux[idx];
      const [rr, gg, bb] = falseColor(value);
      // canvas 行自上而下，世界 y 自下而上，翻转行
      const o = ((rows - 1 - r) * cols + c) * 4;
      img.data[o] = rr;
      img.data[o + 1] = gg;
      img.data[o + 2] = bb;
      img.data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 伪彩立面：每个面片一张照度贴图 */
export function buildFalseColorMeshes(
  geo: FacadeGeometry,
  result: Map<string, PatchResult>,
  reflectMode: boolean,
): THREE.Group {
  const group = new THREE.Group();
  for (const p of geo.patches) {
    const pr = result.get(p.id);
    let mat: THREE.Material;
    if (p.material === 'glass' && !reflectMode) {
      mat = new THREE.MeshStandardMaterial({
        color: MATERIAL_COLORS.glass,
        roughness: 0.2,
        metalness: 0.4,
        transparent: true,
        opacity: 0.85,
      });
    } else if (pr) {
      const tex = patchFalseColorTexture(pr, reflectMode);
      mat = new THREE.MeshBasicMaterial({ map: tex });
    } else {
      mat = new THREE.MeshStandardMaterial({ color: MATERIAL_COLORS.wall });
    }
    group.add(patchBox(p, 0.1, mat));
  }
  return group;
}

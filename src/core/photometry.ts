/**
 * 配光与照度引擎（解析公式，无任何数值积分近似）
 *
 * 坐标系：米制；Y 向上，立面主墙位于 z=0、外法线指向 -Z，灯具在墙前 z<0 一侧。
 *
 * 核心公式（与照明设计手册一致）：
 *   点在表面上的照度  E = Σ I(θ) · cosα / r²        （lx = lm/m²）
 *   θ  : 入射方向与灯具光轴夹角
 *   α  : 入射角，入射方向与表面外法线夹角
 *   r  : 发光点到计算点距离 (m)
 *
 * 配光模型：
 *   投光灯  I(θ) = I0 · cos^n θ,  n 由光束角(50%光强全角 β)反解：
 *           0.5 = cos^n(β/2)  =>  n = ln(0.5) / ln(cos(β/2))
 *           半球通量积分 Φ = 2π·I0/(n+1)，故轴向光强 I0 = (n+1)·Φ/(2π)
 *   点光源  各向同性 I = Φ / (4π)
 *   洗墙灯  离散为 N 个朗伯发光点，单点 I0 = 2Φ_i/π，I(θ)=I0·cosθ
 */
import type { Lamp, Vec3, CalcSettings } from '../types';
import { deg2rad, dot, scale, sub } from './math';

export interface Emitter {
  position: Vec3;
  axis: Vec3;
  /** 轴向（或各向同性）光强 cd */
  i0: number;
  /** cos 幂次；null 表示各向同性 */
  exponent: number | null;
}

/** 由光束角(度,50%光强全角)反解 cos 幂次 n */
export function beamExponent(beamAngleDeg: number): number {
  const half = deg2rad(beamAngleDeg / 2);
  const cosHalf = Math.cos(half);
  if (cosHalf <= 0 || cosHalf >= 1) {
    // 退化保护：极小光束角给出强聚光，180°给出 n=0
    return beamAngleDeg < 1 ? 2000 : 0;
  }
  return Math.log(0.5) / Math.log(cosHalf);
}

/** 灯具总光通量 lm（计入维护系数） */
export function effectiveFlux(lamp: Lamp, settings: CalcSettings): number {
  return lamp.powerW * settings.luminousEfficacy * settings.maintenanceFactor;
}

/**
 * 灯具光轴方向（单位向量）。
 * 灯位于墙前 z<0 一侧、墙面在 z=0，故零位（yaw=0,pitch=0）光轴指向 +Z；
 * yaw 绕 Y 轴偏转，pitch 为仰角（向上为正）。
 */
export function lampAxis(lamp: Lamp): Vec3 {
  const y = deg2rad(lamp.yaw);
  const p = deg2rad(lamp.pitch);
  const cp = Math.cos(p);
  return [Math.sin(y) * cp, Math.sin(p), Math.cos(y) * cp];
}

/** 灯具局部 X 轴（洗墙灯发光段的延伸方向），零位时与世界 X 同向 */
export function lampLocalX(lamp: Lamp): Vec3 {
  const y = deg2rad(lamp.yaw);
  return [Math.cos(y), 0, Math.sin(y)];
}

/**
 * 把灯具展开为一个或多个朗伯/聚光发光点。
 * 投光灯/点光源为单点；洗墙灯沿发光段均匀离散 N 点。
 */
export function lampEmitters(lamp: Lamp, settings: CalcSettings): Emitter[] {
  const phi = effectiveFlux(lamp, settings);
  const axis = lampAxis(lamp);

  if (lamp.kind === 'point') {
    return [{ position: lamp.position, axis, i0: phi / (4 * Math.PI), exponent: null }];
  }

  if (lamp.kind === 'flood') {
    const n = beamExponent(lamp.beamAngle);
    const i0 = ((n + 1) * phi) / (2 * Math.PI);
    return [{ position: lamp.position, axis, i0, exponent: n }];
  }

  // wash：N 个朗伯发光点，每点通量 Φ_i = Φ/N；
  // 朗伯余弦分布 I(θ)=I0·cosθ 在半球上积分 Φ_i = π·I0，故 I0 = Φ_i/π。
  const n = Math.max(1, Math.round(lamp.segments));
  const localX = lampLocalX(lamp);
  const step = lamp.length / n;
  const i0 = phi / (Math.PI * n);
  const emitters: Emitter[] = [];
  for (let i = 0; i < n; i++) {
    const offset = -lamp.length / 2 + step * (i + 0.5);
    emitters.push({
      position: [
        lamp.position[0] + localX[0] * offset,
        lamp.position[1] + localX[1] * offset,
        lamp.position[2] + localX[2] * offset,
      ],
      axis,
      i0,
      exponent: 1,
    });
  }
  return emitters;
}

/** 单个发光点对表面上某点的直射照度 lx；表面背面或光锥外返回 0 */
export function emitterIlluminance(em: Emitter, point: Vec3, normal: Vec3): number {
  const d = sub(point, em.position);
  const r2 = dot(d, d);
  if (r2 < 1e-12) return 0;
  const r = Math.sqrt(r2);
  const u = scale(d, 1 / r); // 入射方向（灯 -> 点，单位向量）
  // 入射角余弦：面片法线指向灯所在一侧，灯在受光面前方时 u·n > 0。
  const cosAlpha = dot(u, normal);
  if (cosAlpha <= 0) return 0; // 表面背面
  let intensity: number;
  if (em.exponent === null) {
    intensity = em.i0;
  } else {
    // 光轴与入射方向均由灯指向外，同向为 θ=0
    const cosTheta = dot(u, em.axis);
    if (cosTheta <= 0) return 0; // 光锥之外
    intensity = em.i0 * Math.pow(cosTheta, em.exponent);
  }
  return (intensity * cosAlpha) / r2;
}

/** 单灯在表面某点的直射照度 lx */
export function lampIlluminance(
  lamp: Lamp,
  point: Vec3,
  normal: Vec3,
  settings: CalcSettings,
): number {
  let sum = 0;
  for (const em of lampEmitters(lamp, settings)) {
    sum += emitterIlluminance(em, point, normal);
  }
  return sum;
}

/** 多灯叠加照度（线性叠加原理） */
export function totalIlluminance(
  lamps: Lamp[],
  point: Vec3,
  normal: Vec3,
  settings: CalcSettings,
): number {
  let sum = 0;
  for (const lamp of lamps) {
    if (!lamp.enabled) continue;
    sum += lampIlluminance(lamp, point, normal, settings);
  }
  return sum;
}

/** 灯具在当前场景状态下是否点亮（场景模式过滤） */
export function isLampOn(lamp: Lamp, scene: { groupStates: Record<string, boolean>; lampOverrides: Record<string, boolean> } | null): boolean {
  if (!lamp.enabled) return false;
  if (!scene) return true;
  if (lamp.id in scene.lampOverrides) return scene.lampOverrides[lamp.id];
  // 组内任一所属组被关 => 关；无组灯具默认开
  for (const gid of lamp.groupIds) {
    if (scene.groupStates[gid] === false) return false;
  }
  return true;
}

/**
 * 立面照度采样与统计
 *
 * 每个面片按固定网格间距细分采样（结果只依赖参数、与刷新无关），
 * 墙/装饰材质计入照度统计；玻璃只算反射照度 E·ρ，不计入照度指标。
 */
import type { FacadeGeometry, SurfacePatch, Lamp, CalcSettings } from '../types';
import { totalIlluminance } from './photometry';
import type { Vec3 } from '../types';

export interface PatchResult {
  patch: SurfacePatch;
  cols: number;
  rows: number;
  cellW: number;
  cellH: number;
  /** 行优先(row=y,col=x)的直射照度 lx */
  lux: Float64Array;
  /** 玻璃反射照度 lx（非玻璃为 0） */
  reflected: Float64Array;
  avg: number;
  max: number;
  min: number;
}

export interface IlluminanceResult {
  patchResults: PatchResult[];
  /** 墙+装饰面 面积加权平均照度 lx */
  wallAvg: number;
  wallMax: number;
  wallMin: number;
  /** 玻璃平均反射照度 lx（展示用） */
  glassReflectedAvg: number;
  /** 采样点总数 */
  sampleCount: number;
}

function sampleCount(dim: number, spacing: number): number {
  return Math.max(2, Math.round(dim / spacing));
}

/** 面片局部坐标 -> 世界坐标。面片在自身 X-Y 平面内，沿 normal 方向为厚向 */
function samplePoint(patch: SurfacePatch, lx: number, ly: number): Vec3 {
  // local x 沿世界 X，local y 沿世界 Y；侧面板（normal 为 ±X）时局部 x 沿 -normal×Y?
  const n = patch.normal;
  if (n[0] !== 0) {
    // 侧立面：局部宽度沿 Z 方向
    return [patch.center[0], patch.center[1] + ly, patch.center[2] + lx];
  }
  return [patch.center[0] + lx, patch.center[1] + ly, patch.center[2]];
}

export function computePatch(
  patch: SurfacePatch,
  lamps: Lamp[],
  settings: CalcSettings,
): PatchResult {
  const cols = sampleCount(patch.width, settings.gridSpacing);
  const rows = sampleCount(patch.height, settings.gridSpacing);
  const cellW = patch.width / cols;
  const cellH = patch.height / rows;
  const lux = new Float64Array(cols * rows);
  const reflected = new Float64Array(cols * rows);
  let sum = 0;
  let max = 0;
  let min = Infinity;
  let hasSample = false;

  for (let r = 0; r < rows; r++) {
    const ly = -patch.height / 2 + cellH * (r + 0.5);
    for (let c = 0; c < cols; c++) {
      const lx = -patch.width / 2 + cellW * (c + 0.5);
      const p = samplePoint(patch, lx, ly);
      const e = totalIlluminance(lamps, p, patch.normal, settings);
      const idx = r * cols + c;
      lux[idx] = e;
      if (patch.material === 'glass') reflected[idx] = e * settings.glassReflectance;
      sum += e;
      hasSample = true;
      if (e > max) max = e;
      if (e < min) min = e;
    }
  }
  return {
    patch,
    cols,
    rows,
    cellW,
    cellH,
    lux,
    reflected,
    avg: sum / (cols * rows),
    max,
    min: hasSample ? min : 0,
  };
}

export function computeFacade(
  geo: FacadeGeometry,
  lamps: Lamp[],
  settings: CalcSettings,
): IlluminanceResult {
  const patchResults = geo.patches.map((p) => computePatch(p, lamps, settings));

  let weightedSum = 0;
  let areaSum = 0;
  let wallMax = 0;
  let wallMin = Infinity;
  let reflSum = 0;
  let reflArea = 0;
  let sampleCount = 0;

  for (const pr of patchResults) {
    const area = pr.patch.width * pr.patch.height;
    sampleCount += pr.cols * pr.rows;
    if (pr.patch.material === 'glass') {
      reflSum += pr.avg * area;
      reflArea += area;
      continue;
    }
    weightedSum += pr.avg * area;
    areaSum += area;
    if (pr.max > wallMax) wallMax = pr.max;
    if (pr.min < wallMin) wallMin = pr.min;
  }

  return {
    patchResults,
    wallAvg: areaSum > 0 ? weightedSum / areaSum : 0,
    wallMax,
    wallMin: wallMin === Infinity ? 0 : wallMin,
    glassReflectedAvg: reflArea > 0 ? reflSum / reflArea : 0,
    sampleCount,
  };
}

export interface PowerStats {
  totalW: number;
  areaM2: number;
  lpd: number; // W/m²
  limit: number;
  overLimit: boolean;
  activeCount: number;
}

export function powerStats(activeLamps: Lamp[], areaM2: number, settings: CalcSettings): PowerStats {
  const totalW = activeLamps.reduce((s, l) => s + l.powerW, 0);
  const lpd = areaM2 > 0 ? totalW / areaM2 : 0;
  return {
    totalW,
    areaM2,
    lpd,
    limit: settings.lpdLimit,
    overLimit: lpd > settings.lpdLimit,
    activeCount: activeLamps.length,
  };
}

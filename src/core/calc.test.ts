import { describe, it, expect } from 'vitest';
import { defaultFacade } from '../types';
import { buildFacadeGeometry, facadeArea } from './geometry';
import { computeFacade, powerStats } from './calc';
import type { Lamp, CalcSettings } from '../types';

const settings: CalcSettings = {
  luminousEfficacy: 100,
  maintenanceFactor: 1, // 测试中取 1 便于手算
  glassReflectance: 0.12,
  lpdLimit: 25,
  gridSpacing: 0.5,
  ambientLux: 2,
};

describe('立面几何', () => {
  it('外包尺寸与面积', () => {
    const geo = buildFacadeGeometry(defaultFacade());
    expect(geo.totalWidth).toBeCloseTo(5 * 4.2, 12);
    expect(geo.totalHeight).toBeCloseTo(6 * 3.6, 12);
    expect(facadeArea(geo)).toBeCloseTo(5 * 4.2 * 6 * 3.6, 12);
  });

  it('每个开间/层至少生成一个玻璃面片和两个墙带', () => {
    const geo = buildFacadeGeometry(defaultFacade());
    const glass = geo.patches.filter((p) => p.material === 'glass');
    expect(glass.length).toBe(5 * 6);
  });

  it('凸窗覆盖开间不再生成主墙玻璃，改为凸窗正面玻璃', () => {
    const f = defaultFacade();
    f.bayWindows = [{ id: 'bw1', bayStart: 1, bayCount: 2, protrude: 0.6, windowRatio: 0.5 }];
    const geo = buildFacadeGeometry(f);
    const glass = geo.patches.filter((p) => p.material === 'glass');
    // 剩余 3 个开间 x 6 层 + 1 块凸窗正面玻璃
    expect(glass.length).toBe(3 * 6 + 1);
    expect(glass.some((p) => p.center[2] < -0.5)).toBe(true);
  });

  it('面片法线都是单位向量', () => {
    const geo = buildFacadeGeometry(defaultFacade());
    for (const p of geo.patches) {
      const l = Math.hypot(...p.normal);
      expect(Math.abs(l - 1)).toBeLessThan(1e-12);
    }
  });
});

describe('立面照度计算', () => {
  it('无灯时照度全 0，玻璃反射也为 0', () => {
    const geo = buildFacadeGeometry(defaultFacade());
    const r = computeFacade(geo, [], settings);
    expect(r.wallAvg).toBe(0);
    expect(r.glassReflectedAvg).toBe(0);
  });

  it('正对墙面的投光灯：墙面平均照度量级与手算一致', () => {
    const f = defaultFacade();
    const geo = buildFacadeGeometry(f);
    const lamp: Lamp = {
      id: 'L1', name: 'L1', kind: 'flood',
      position: [geo.totalWidth / 2, 1, -12], yaw: 0, pitch: 20,
      powerW: 300, beamAngle: 40, length: 1, segments: 8, colorTemp: 4000,
      groupIds: [], enabled: true,
    };
    const r = computeFacade(geo, [lamp], settings);
    expect(r.wallAvg).toBeGreaterThan(20);
    expect(r.wallMax).toBeGreaterThan(r.wallAvg);
    expect(r.sampleCount).toBeGreaterThan(100);
  });

  it('玻璃反射照度 = 玻璃照度 × 反射率', () => {
    const geo = buildFacadeGeometry(defaultFacade());
    const lamp: Lamp = {
      id: 'L1', name: 'L1', kind: 'point',
      position: [geo.totalWidth / 2, geo.totalHeight / 2, -8], yaw: 0, pitch: 0,
      powerW: 100, beamAngle: 30, length: 1, segments: 8, colorTemp: 4000,
      groupIds: [], enabled: true,
    };
    const s = { ...settings, glassReflectance: 0.15 };
    const r = computeFacade(geo, [lamp], s);
    const glass = r.patchResults.find((p) => p.patch.material === 'glass')!;
    const reflAvg = glass.reflected.reduce((a, b) => a + b, 0) / glass.reflected.length;
    expect(Math.abs(reflAvg - glass.avg * 0.15) / glass.avg).toBeLessThan(1e-12);
    expect(r.glassReflectedAvg).toBeGreaterThan(0);
  });
});

describe('功率密度', () => {
  it('LPD 计算与超限判定', () => {
    const lamps: Lamp[] = [
      { id: 'a', name: 'a', kind: 'flood', position: [0, 0, 0], yaw: 0, pitch: 0, powerW: 1000, beamAngle: 30, length: 1, segments: 8, colorTemp: 4000, groupIds: [], enabled: true },
      { id: 'b', name: 'b', kind: 'point', position: [0, 0, 0], yaw: 0, pitch: 0, powerW: 500, beamAngle: 30, length: 1, segments: 8, colorTemp: 4000, groupIds: [], enabled: true },
      { id: 'c', name: 'c', kind: 'wash', position: [0, 0, 0], yaw: 0, pitch: 0, powerW: 200, beamAngle: 30, length: 2, segments: 8, colorTemp: 4000, groupIds: [], enabled: false },
    ];
    const stats = powerStats(lamps.filter((l) => l.enabled), 100, settings);
    expect(stats.totalW).toBe(1500);
    expect(stats.lpd).toBe(15);
    expect(stats.overLimit).toBe(false);
    const over = powerStats(lamps.filter((l) => l.enabled), 50, settings);
    expect(over.lpd).toBe(30);
    expect(over.overLimit).toBe(true);
  });
});

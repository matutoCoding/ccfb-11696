import { describe, it, expect } from 'vitest';
import type { Lamp, CalcSettings } from '../types';
import {
  beamExponent,
  effectiveFlux,
  lampAxis,
  lampEmitters,
  lampIlluminance,
  totalIlluminance,
  emitterIlluminance,
  isLampOn,
} from './photometry';
import { rad2deg } from './math';

const settings: CalcSettings = {
  luminousEfficacy: 100,
  maintenanceFactor: 0.8,
  glassReflectance: 0.12,
  lpdLimit: 25,
  gridSpacing: 0.5,
  ambientLux: 2,
};

// 主墙面法线：受光面朝向灯（灯在 z<0 一侧），法线 +Z
const WALL_N: [number, number, number] = [0, 0, 1];

function lamp(partial: Partial<Lamp>): Lamp {
  return {
    id: 't1',
    name: 'test',
    kind: 'flood',
    position: [0, 0, -10],
    yaw: 0,
    pitch: 0,
    powerW: 100,
    beamAngle: 30,
    length: 1,
    segments: 8,
    colorTemp: 4000,
    groupIds: [],
    enabled: true,
    ...partial,
  };
}

const relErr = (got: number, want: number) => Math.abs(got - want) / Math.abs(want);

describe('光束角 -> cos 幂次反解', () => {
  it('半角处光强恰好为峰值的 50%', () => {
    for (const beta of [8, 15, 30, 60, 90, 120]) {
      const n = beamExponent(beta);
      const half = (beta / 2) * (Math.PI / 180);
      const ratio = Math.pow(Math.cos(half), n);
      expect(relErr(ratio, 0.5)).toBeLessThan(1e-12);
    }
  });
});

describe('投光灯照度：引擎 vs 独立手算', () => {
  it('光轴正交点（垂直入射）', () => {
    const l = lamp({ position: [0, 0, -10], beamAngle: 30, powerW: 100 });
    // 独立手算
    const phi = 100 * 100 * 0.8; // 8000 lm
    const n = Math.log(0.5) / Math.log(Math.cos((15 * Math.PI) / 180));
    const i0 = ((n + 1) * phi) / (2 * Math.PI);
    const want = i0 / 100; // r=10, θ=0, cosα=1
    const got = lampIlluminance(l, [0, 0, 0], WALL_N, settings);
    expect(relErr(got, want)).toBeLessThan(1e-12);
    // 30° 光束角 n≈19.99，I0=(n+1)Φ/2π≈26730 cd，10m 垂直入射 E≈267.30 lx
    expect(got).toBeCloseTo(267.3, 1);
  });

  it('斜入射点：距离衰减 + cosθ 配光 + cosα 入射角三因子齐全', () => {
    const l = lamp({ position: [0, 0, -8], beamAngle: 45, powerW: 150 });
    const point: [number, number, number] = [3, 4, 0];
    const phi = 150 * 100 * 0.8;
    const n = Math.log(0.5) / Math.log(Math.cos((22.5 * Math.PI) / 180));
    const i0 = ((n + 1) * phi) / (2 * Math.PI);
    const r = Math.hypot(3, 4, 8);
    const u = [3 / r, 4 / r, 8 / r]; // 灯->点
    const axis = lampAxis(l); // (0,0,+1)
    const cosTheta = u[0] * axis[0] + u[1] * axis[1] + u[2] * axis[2];
    const cosAlpha = u[2]; // 法线 +Z
    const want = (i0 * Math.pow(cosTheta, n) * cosAlpha) / (r * r);
    const got = lampIlluminance(l, point, WALL_N, settings);
    expect(relErr(got, want)).toBeLessThan(1e-12);
  });

  it('俯仰角偏转后照在光轴与墙面交点', () => {
    const l = lamp({ position: [0, 0, -6], pitch: 30, beamAngle: 24, powerW: 200 });
    const axis = lampAxis(l);
    // 光轴参数方程 (0,0,-6)+t·axis 到达 z=0
    const t = 6 / axis[2];
    const hit: [number, number, number] = [axis[0] * t, axis[1] * t, 0];
    const phi = 200 * 100 * 0.8;
    const n = Math.log(0.5) / Math.log(Math.cos((12 * Math.PI) / 180));
    const i0 = ((n + 1) * phi) / (2 * Math.PI);
    const r = t;
    const cosAlpha = axis[2]; // 入射方向即光轴，与 +Z 法线夹角
    const want = (i0 * cosAlpha) / (r * r);
    const got = lampIlluminance(l, hit, WALL_N, settings);
    expect(relErr(got, want)).toBeLessThan(1e-12);
    expect(rad2deg(Math.acos(cosAlpha))).toBeCloseTo(30, 10);
  });

  it('光锥外近似为 0（远角只剩浮点尾值），表面背面严格为 0', () => {
    const l = lamp({ position: [0, 0, -5], beamAngle: 10 });
    expect(lampIlluminance(l, [20, 0, 0], WALL_N, settings)).toBeCloseTo(0, 20);
    expect(lampIlluminance(l, [0, 0, 0], [0, 0, -1], settings)).toBe(0);
  });
});

describe('点光源：各向同性', () => {
  it('E = Φ/(4π) · cosα / r²', () => {
    const l = lamp({ kind: 'point', powerW: 50, position: [2, 1, -4] });
    const point: [number, number, number] = [3, 2, 0];
    const phi = effectiveFlux(l, settings);
    const r2 = 18;
    const r = Math.sqrt(r2);
    const cosAlpha = 4 / r;
    const want = ((phi / (4 * Math.PI)) * cosAlpha) / r2;
    const got = lampIlluminance(l, point, WALL_N, settings);
    expect(relErr(got, want)).toBeLessThan(1e-12);
  });
});

describe('洗墙灯：离散朗伯线光源', () => {
  it('发光点通量守恒：Σ(π·I0_i) = Φ，单点 I0=Φ_i/π', () => {
    const l = lamp({ kind: 'wash', powerW: 60, length: 2, segments: 10 });
    const ems = lampEmitters(l, settings);
    expect(ems).toHaveLength(10);
    const phi = effectiveFlux(l, settings);
    const sum = ems.reduce((s, e) => s + Math.PI * e.i0, 0);
    expect(relErr(sum, phi)).toBeLessThan(1e-12);
  });

  it('N=1 时与单朗伯点手算一致；细网格离散收敛 N=40→80 变化 <0.1%', () => {
    const l1 = lamp({ kind: 'wash', powerW: 80, length: 1, segments: 1, position: [0, 3, -2] });
    const point: [number, number, number] = [0, 6, 0];
    const phi = effectiveFlux(l1, settings);
    const r2 = 13;
    const r = Math.sqrt(r2);
    const i0 = phi / Math.PI;
    const u = [0, 3 / r, 2 / r];
    const axis = lampAxis(l1);
    const cosTheta = u[0] * axis[0] + u[1] * axis[1] + u[2] * axis[2];
    const cosAlpha = 2 / r;
    const want = (i0 * cosTheta * cosAlpha) / r2;
    const got1 = lampIlluminance(l1, point, WALL_N, settings);
    expect(relErr(got1, want)).toBeLessThan(1e-12);

    // 离散点加倍逼近连续线光源；工程默认 N=8 已足够，这里验证极限收敛
    const g40 = lampIlluminance({ ...l1, segments: 40 }, point, WALL_N, settings);
    const g80 = lampIlluminance({ ...l1, segments: 80 }, point, WALL_N, settings);
    expect(relErr(g80, g40)).toBeLessThan(0.001);
  });
});

describe('多灯叠加与场景过滤', () => {
  it('总照度=各灯线性叠加', () => {
    const a = lamp({ id: 'a', position: [0, 0, -5], powerW: 100 });
    const b = lamp({ id: 'b', position: [3, 0, -5], powerW: 120, beamAngle: 60 });
    const p: [number, number, number] = [1, 1, 0];
    const want =
      lampIlluminance(a, p, WALL_N, settings) + lampIlluminance(b, p, WALL_N, settings);
    expect(relErr(totalIlluminance([a, b], p, WALL_N, settings), want)).toBeLessThan(1e-12);
  });

  it('关灯与场景模式过滤', () => {
    const a = lamp({ id: 'a', groupIds: ['g1'] });
    expect(isLampOn(a, null)).toBe(true);
    expect(isLampOn({ ...a, enabled: false }, null)).toBe(false);
    expect(isLampOn(a, { groupStates: { g1: false }, lampOverrides: {} })).toBe(false);
    expect(isLampOn(a, { groupStates: { g1: true }, lampOverrides: {} })).toBe(true);
    expect(isLampOn(a, { groupStates: {}, lampOverrides: { a: false } })).toBe(false);
  });
});

describe('发光点原语不变量', () => {
  it('聚光配光在全空间的积分通量等于输入通量（均匀球面分层采样，误差<0.2%）', () => {
    const l = lamp({ beamAngle: 36, powerW: 100 });
    const em = lampEmitters(l, settings)[0];
    const phi = effectiveFlux(l, settings);
    // 以光轴为极轴：Φ = 2π ∫₀¹ I(μ) dμ，μ=cosθ；配光只在前向半球 μ∈[0,1]。
    const nMu = 400;
    const dMu = 1 / nMu;
    let integral = 0;
    for (let i = 0; i < nMu; i++) {
      const mu = (i + 0.5) * dMu;
      integral += em.i0 * Math.pow(mu, em.exponent ?? 0);
    }
    const integrated = 2 * Math.PI * integral * dMu;
    expect(relErr(integrated, phi)).toBeLessThan(0.002);
  });

  it('距离平方反比：r 加倍照度变 1/4', () => {
    // 光轴 +Z：测点在灯前方 z 正半轴；受光面片法线与入射方向同向 (+Z)
    const em = lampEmitters(lamp({ position: [0, 0, 0] }), settings)[0];
    const faceN: [number, number, number] = [0, 0, 1];
    const e1 = emitterIlluminance(em, [0, 0, 2], faceN);
    const e2 = emitterIlluminance(em, [0, 0, 4], faceN);
    expect(e1).toBeGreaterThan(0);
    expect(relErr(e2, e1 / 4)).toBeLessThan(1e-12);
  });
});

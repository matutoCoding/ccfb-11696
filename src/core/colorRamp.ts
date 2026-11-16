import { clamp, lerp } from './math';

/** 照度伪彩 ramp：蓝(低)->青->绿->黄->红(高)，单位 lux */
const RAMP: Array<[number, [number, number, number]]> = [
  [0, [12, 24, 96]],
  [5, [24, 88, 188]],
  [20, [28, 178, 200]],
  [50, [48, 196, 96]],
  [100, [188, 214, 52]],
  [200, [244, 176, 32]],
  [400, [232, 84, 24]],
  [800, [200, 20, 20]],
];

/** lux -> 伪彩 RGB（0~255），对数分段线性 */
export function falseColor(lux: number): [number, number, number] {
  const x = Math.log10(Math.max(lux, 0.5) + 1);
  const stops = RAMP.map(([l]) => Math.log10(l + 1));
  for (let i = 0; i < RAMP.length - 1; i++) {
    if (x <= stops[i + 1]) {
      const t = clamp((x - stops[i]) / (stops[i + 1] - stops[i]), 0, 1);
      const c0 = RAMP[i][1];
      const c1 = RAMP[i + 1][1];
      return [
        Math.round(lerp(c0[0], c1[0], t)),
        Math.round(lerp(c0[1], c1[1], t)),
        Math.round(lerp(c0[2], c1[2], t)),
      ];
    }
  }
  const last = RAMP[RAMP.length - 1][1];
  return [last[0], last[1], last[2]];
}

/** 伪彩图例刻度（lux） */
export const RAMP_LEGEND = RAMP.map(([l]) => l);

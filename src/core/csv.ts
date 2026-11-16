/** CSV 导出（带 BOM，Excel 直接打开中文不乱码） */
import type { Project, Lamp } from '../types';
import { LAMP_KIND_NAME } from '../types';
import type { IlluminanceResult } from './calc';

function csvCell(v: string | number): string {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function row(cells: Array<string | number>): string {
  return cells.map(csvCell).join(',');
}

export function lampScheduleCSV(project: Project, activeOnly = false): string {
  const lines: string[] = [];
  lines.push(row(['灯具清单', project.name]));
  lines.push(row(['编号', '名称', '类型', '功率(W)', '光束角(°)', '灯段长(m)', '色温(K)', '位置X(m)', '位置Y(m)', '位置Z(m)', '偏航(°)', '俯仰(°)', '分组', '状态']));
  const groupName = new Map(project.groups.map((g) => [g.id, g.name]));
  for (const l of project.lamps) {
    if (activeOnly && !l.enabled) continue;
    lines.push(
      row([
        l.id,
        l.name,
        LAMP_KIND_NAME[l.kind],
        l.powerW,
        l.beamAngle,
        l.kind === 'wash' ? l.length : '',
        l.colorTemp,
        l.position[0].toFixed(2),
        l.position[1].toFixed(2),
        l.position[2].toFixed(2),
        l.yaw,
        l.pitch,
        l.groupIds.map((g) => groupName.get(g) ?? g).join('|'),
        l.enabled ? '开' : '关',
      ]),
    );
  }
  return '﻿' + lines.join('\r\n');
}

export function illuminanceReportCSV(result: IlluminanceResult, projectName: string): string {
  const lines: string[] = [];
  lines.push(row(['照度报表', projectName]));
  lines.push(row(['墙面平均照度(lx)', result.wallAvg.toFixed(2)]));
  lines.push(row(['墙面最大照度(lx)', result.wallMax.toFixed(2)]));
  lines.push(row(['墙面最小照度(lx)', result.wallMin.toFixed(2)]));
  lines.push(row(['玻璃平均反射照度(lx,不计照度指标)', result.glassReflectedAvg.toFixed(2)]));
  lines.push(row(['采样点总数', result.sampleCount]));
  lines.push('');
  lines.push(row(['面片编号', '材质', '宽(m)', '高(m)', '平均(lx)', '最大(lx)', '最小(lx)']));
  const matName = { wall: '墙体', glass: '玻璃', trim: '装饰线条' } as const;
  for (const pr of result.patchResults) {
    lines.push(
      row([
        pr.patch.id,
        matName[pr.patch.material],
        pr.patch.width.toFixed(2),
        pr.patch.height.toFixed(2),
        pr.avg.toFixed(2),
        pr.max.toFixed(2),
        pr.min.toFixed(2),
      ]),
    );
  }
  return '﻿' + lines.join('\r\n');
}

export function downloadCSV(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function totalPowerLine(lamps: Lamp[]): number {
  return lamps.reduce((s, l) => s + (l.enabled ? l.powerW : 0), 0);
}

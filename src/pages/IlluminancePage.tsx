import { useMemo, useState } from 'react';
import { useCurrentProject } from '../store';
import { buildFacadeGeometry } from '../core/geometry';
import { computeFacade, powerStats, type IlluminanceResult } from '../core/calc';
import { buildFalseColorMeshes } from '../three/facadeMesh';
import { useThreeViewport, addGround, tagDynamic, clearDynamic } from '../three/useThreeViewport';
import { addAmbient } from '../core/scene';
import { activeLamps } from '../core/scene';
import { lampIlluminance, beamExponent, effectiveFlux, lampAxis } from '../core/photometry';
import { RAMP_LEGEND, falseColor } from '../core/colorRamp';
import { illuminanceReportCSV, lampScheduleCSV, downloadCSV } from '../core/csv';
import { NoProject } from '../ui/NoProject';

/** 独立手算：与引擎代码完全平行的一份公式实现，用于页面实时误差对照 */
function handCalcFlood(
  powerW: number, efficacy: number, mf: number, beamAngle: number,
  r: number, cosTheta: number, cosAlpha: number,
) {
  const phi = powerW * efficacy * mf;
  const n = Math.log(0.5) / Math.log(Math.cos((beamAngle * Math.PI) / 360));
  const i0 = ((n + 1) * phi) / (2 * Math.PI);
  return (i0 * Math.pow(cosTheta, n) * cosAlpha) / (r * r);
}

export function IlluminancePage() {
  const project = useCurrentProject();
  const [reflectMode, setReflectMode] = useState(false);
  const [showCsvMenu, setShowCsvMenu] = useState(false);

  const geo = useMemo(() => (project ? buildFacadeGeometry(project.facade) : null), [project?.facade]);
  const lamps = useMemo(() => (project ? activeLamps(project) : []), [project]);
  const result: IlluminanceResult | null = useMemo(
    () => (project && geo ? computeFacade(geo, lamps, project.settings) : null),
    [geo, lamps, project?.settings],
  );
  const stats = useMemo(
    () => (project && geo ? powerStats(lamps, geo.totalWidth * geo.totalHeight, project.settings) : null),
    [geo, lamps, project?.settings],
  );

  const resultMap = useMemo(() => {
    const m = new Map();
    result?.patchResults.forEach((pr) => m.set(pr.patch.id, pr));
    return m;
  }, [result]);

  const deps = [project?.facade, result, reflectMode];
  const hostRef = useThreeViewport({
    background: 0x10161e,
    deps,
    onInit: (ctx) => { addAmbient(ctx); addGround(ctx, geo?.totalWidth ?? 30); },
    onRebuild: (ctx) => {
      if (!geo || !result) return;
      clearDynamic(ctx);
      ctx.scene.add(tagDynamic(buildFalseColorMeshes(geo, resultMap, reflectMode)));
    },
  });

  // 手算对照：取第一台投光灯在立面中心的照度
  const check = useMemo(() => {
    if (!project || !geo) return null;
    const flood = lamps.find((l) => l.kind === 'flood');
    if (!flood) return null;
    const p = [geo.totalWidth / 2, geo.totalHeight / 2, 0] as const;
    const normal = [0, 0, 1] as const;
    const axis = lampAxis(flood);
    const dx = p[0] - flood.position[0];
    const dy = p[1] - flood.position[1];
    const dz = p[2] - flood.position[2];
    const r = Math.hypot(dx, dy, dz);
    const u = [dx / r, dy / r, dz / r];
    const cosTheta = u[0] * axis[0] + u[1] * axis[1] + u[2] * axis[2];
    const cosAlpha = u[0] * normal[0] + u[1] * normal[1] + u[2] * normal[2];
    const hand = handCalcFlood(
      flood.powerW, project.settings.luminousEfficacy, project.settings.maintenanceFactor,
      flood.beamAngle, r, Math.max(cosTheta, 0), Math.max(cosAlpha, 0),
    );
    const engine = lampIlluminance(flood, [p[0], p[1], p[2]], [normal[0], normal[1], normal[2]], project.settings);
    const errPct = hand > 1e-9 ? (Math.abs(engine - hand) / hand) * 100 : 0;
    return { name: flood.name, r, cosTheta, cosAlpha, hand, engine, errPct, n: beamExponent(flood.beamAngle), flux: effectiveFlux(flood, project.settings) };
  }, [project, geo, lamps]);

  if (!project || !geo || !result || !stats) return <NoProject />;

  return (
    <>
      <aside className="sidebar">
        <div className="card">
          <h3>显示模式</h3>
          <div className="row">
            <button className={!reflectMode ? 'primary' : ''} onClick={() => setReflectMode(false)}>照度伪彩</button>
            <button className={reflectMode ? 'primary' : ''} onClick={() => setReflectMode(true)}>玻璃反射</button>
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8, lineHeight: 1.7 }}>
            {reflectMode
              ? '玻璃面片显示 E·ρ 反射照度；墙体仍显示直射照度。玻璃反射不计入照度指标。'
              : '玻璃面片保持深色不参与伪彩，只统计墙体与装饰面照度。'}
          </div>
        </div>

        <div className="card">
          <h3>照度统计（当前场景 {lamps.length} 盏亮灯）</h3>
          <div className="stat"><span className="k">墙面平均照度</span><span className="v">{result.wallAvg.toFixed(1)} lx</span></div>
          <div className="stat"><span className="k">墙面最大照度</span><span className="v">{result.wallMax.toFixed(1)} lx</span></div>
          <div className="stat"><span className="k">墙面最小照度</span><span className="v">{result.wallMin.toFixed(1)} lx</span></div>
          <div className="stat"><span className="k">照度均匀度(min/avg)</span>
            <span className="v">{result.wallAvg > 0 ? (result.wallMin / result.wallAvg).toFixed(2) : '—'}</span></div>
          <div className="stat"><span className="k">玻璃平均反射照度</span><span className="v">{result.glassReflectedAvg.toFixed(1)} lx</span></div>
          <div className="stat"><span className="k">采样网格点</span><span className="v">{result.sampleCount}</span></div>
          {result.wallMax > 1000 && (
            <div className="warn-box">
              ⚠ 最大照度 {result.wallMax.toFixed(0)} lx 为近场尖峰：该采样点距灯具过近，平方反比定律下数值急剧增大。
              工程评价请以平均照度/均匀度为准，或把灯具适当移离墙面、加密网格间距复核。
            </div>
          )}
        </div>

        <div className="card">
          <h3>功率与功率密度</h3>
          <div className="stat"><span className="k">总功率</span><span className="v">{stats.totalW.toFixed(0)} W</span></div>
          <div className="stat"><span className="k">立面面积</span><span className="v">{stats.areaM2.toFixed(1)} m²</span></div>
          <div className="stat"><span className="k">单位面积功率密度 LPD</span>
            <span className={stats.overLimit ? 'num-bad' : 'num-good'}>{stats.lpd.toFixed(2)} W/m²</span></div>
          <div className="stat"><span className="k">限值</span><span className="v">{stats.limit} W/m²</span></div>
          {stats.overLimit
            ? <div className="warn-box">⚠ 功率密度 {stats.lpd.toFixed(2)} W/m² 超过限值 {stats.limit}，请减少灯具或降低功率。</div>
            : <div className="ok-box">✓ 功率密度满足限值要求</div>}
        </div>

        <div className="card">
          <h3>手算对照（误差 &lt;1% 承诺）</h3>
          {!check && <div style={{ color: 'var(--muted)' }}>当前场景没有投光灯，添加一台后自动对照。</div>}
          {check && (
            <>
              <div className="stat"><span className="k">灯具</span><span className="v">{check.name}</span></div>
              <div className="stat"><span className="k">计算距离 r</span><span className="v">{check.r.toFixed(3)} m</span></div>
              <div className="stat"><span className="k">cosθ（配光角）</span><span className="v">{check.cosTheta.toFixed(4)}</span></div>
              <div className="stat"><span className="k">cosα（入射角）</span><span className="v">{check.cosAlpha.toFixed(4)}</span></div>
              <div className="stat"><span className="k">配光指数 n</span><span className="v">{check.n.toFixed(3)}</span></div>
              <div className="stat"><span className="k">有效通量 Φ</span><span className="v">{check.flux.toFixed(0)} lm</span></div>
              <div className="stat"><span className="k">手算 E</span><span className="v">{check.hand.toFixed(3)} lx</span></div>
              <div className="stat"><span className="k">引擎 E</span><span className="v">{check.engine.toFixed(3)} lx</span></div>
              <div className={check.errPct < 1 ? 'ok-box' : 'warn-box'}>
                相对误差 {check.errPct.toExponential(2)}%（要求 &lt; 1%）
              </div>
            </>
          )}
        </div>

        <div className="card">
          <h3>导出报表</h3>
          <div className="row">
            <button onClick={() => setShowCsvMenu((v) => !v)}>导出 CSV ▾</button>
          </div>
          {showCsvMenu && (
            <div style={{ marginTop: 8, display: 'grid', gap: 6 }}>
              <button className="small" onClick={() => downloadCSV(`${project.name}_灯具清单.csv`, lampScheduleCSV(project))}>灯具清单（全部）</button>
              <button className="small" onClick={() => downloadCSV(`${project.name}_灯具清单_当前场景.csv`, lampScheduleCSV(project, true))}>灯具清单（当前场景）</button>
              <button className="small" onClick={() => downloadCSV(`${project.name}_照度报表.csv`, illuminanceReportCSV(result, project.name))}>照度报表</button>
            </div>
          )}
        </div>
      </aside>
      <div className="stage" ref={hostRef}>
        <div className="hud">
          <b>伪彩图例 (lx)</b>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
            {RAMP_LEGEND.map((l) => (
              <div key={l} className="legend" style={{ flexDirection: 'column', gap: 2 }}>
                <span style={{ width: 26, height: 12, background: `rgb(${falseColor(l).join(',')})`, borderRadius: 2 }} />
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

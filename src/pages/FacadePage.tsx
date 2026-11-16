import { useMemo } from 'react';
import { useStore, useCurrentProject } from '../store';
import { buildFacadeGeometry } from '../core/geometry';
import { buildFacadeMeshes, MATERIAL_COLORS } from '../three/facadeMesh';
import { useThreeViewport, addGround, tagDynamic, clearDynamic, disposeObject } from '../three/useThreeViewport';
import { addAmbient } from '../core/scene';
import { NoProject } from '../ui/NoProject';
import type { FacadeLine, BayWindow } from '../types';
import { uid } from '../types';

function NumberField({ label, value, step, min, max, onChange }: {
  label: string; value: number; step?: number; min?: number; max?: number; onChange: (v: number) => void;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input type="number" step={step ?? 0.1} min={min} max={max} value={value}
        onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}

export function FacadePage() {
  const project = useCurrentProject();
  const updateFacade = useStore((s) => s.updateFacade);

  const geo = useMemo(() => (project ? buildFacadeGeometry(project.facade) : null), [project?.facade]);
  const deps = [project?.facade];

  const hostRef = useThreeViewport({
    background: 0x10161e,
    deps,
    onInit: (ctx) => {
      addAmbient(ctx);
      addGround(ctx, project ? buildFacadeGeometry(project.facade).totalWidth : 30);
    },
    onRebuild: (ctx) => {
      if (!geo) return;
      clearDynamic(ctx);
      const group = tagDynamic(buildFacadeMeshes(geo));
      ctx.scene.add(group);
    },
  });

  if (!project || !geo) return <NoProject />;
  const f = project.facade;

  const addLine = (orientation: FacadeLine['orientation']) => {
    const line: FacadeLine = {
      id: uid('line'),
      orientation,
      offset: orientation === 'horizontal' ? geo.totalHeight / 2 : geo.totalWidth / 2,
      protrude: 0.25,
      width: 0.2,
    };
    updateFacade({ lines: [...f.lines, line] });
  };
  const updateLine = (id: string, patch: Partial<FacadeLine>) =>
    updateFacade({ lines: f.lines.map((l) => (l.id === id ? { ...l, ...patch } : l)) });
  const addBayWindow = () => {
    const bw: BayWindow = { id: uid('bw'), bayStart: 0, bayCount: 1, protrude: 0.6, windowRatio: 0.5 };
    updateFacade({ bayWindows: [...f.bayWindows, bw] });
  };

  return (
    <>
      <aside className="sidebar">
        <div className="card">
          <h3>立面参数</h3>
          <div className="grid2">
            <NumberField label="层数" value={f.floors} step={1} min={1} max={60} onChange={(v) => updateFacade({ floors: Math.round(v) })} />
            <NumberField label="层高 (m)" value={f.floorHeight} min={2.5} max={8} onChange={(v) => updateFacade({ floorHeight: v })} />
            <NumberField label="开间数" value={f.bays} step={1} min={1} max={30} onChange={(v) => updateFacade({ bays: Math.round(v) })} />
            <NumberField label="开间宽 (m)" value={f.bayWidth} min={2} max={10} onChange={(v) => updateFacade({ bayWidth: v })} />
            <NumberField label="窗墙比" value={f.windowRatio} step={0.05} min={0.05} max={0.9} onChange={(v) => updateFacade({ windowRatio: v })} />
            <NumberField label="墙体厚 (m)" value={f.thickness} step={0.05} min={0.1} max={1} onChange={(v) => updateFacade({ thickness: v })} />
          </div>
          <div className="stat"><span className="k">总宽 × 总高</span><span className="v">{geo.totalWidth.toFixed(2)} × {geo.totalHeight.toFixed(2)} m</span></div>
          <div className="stat"><span className="k">立面面积</span><span className="v">{(geo.totalWidth * geo.totalHeight).toFixed(1)} m²</span></div>
        </div>

        <div className="card">
          <h3>装饰线条（{f.lines.length}）</h3>
          <div className="row" style={{ marginBottom: 8 }}>
            <button className="small" onClick={() => addLine('horizontal')}>+ 横向腰线</button>
            <button className="small" onClick={() => addLine('vertical')}>+ 竖向线条</button>
          </div>
          {f.lines.map((l) => (
            <div key={l.id} className="card" style={{ background: 'var(--bg)' }}>
              <div className="row">
                <span className="tag">{l.orientation === 'horizontal' ? '横向' : '竖向'}</span>
                <button className="small danger" onClick={() => updateFacade({ lines: f.lines.filter((x) => x.id !== l.id) })}>删除</button>
              </div>
              <div className="grid2" style={{ marginTop: 6 }}>
                <NumberField label={l.orientation === 'horizontal' ? '高度位置 (m)' : '水平位置 (m)'} value={l.offset}
                  min={0} max={l.orientation === 'horizontal' ? geo.totalHeight : geo.totalWidth}
                  onChange={(v) => updateLine(l.id, { offset: v })} />
                <NumberField label="凸出 (m)" value={l.protrude} step={0.05} min={0.05} max={1} onChange={(v) => updateLine(l.id, { protrude: v })} />
                <NumberField label="截面宽 (m)" value={l.width} step={0.05} min={0.05} max={1} onChange={(v) => updateLine(l.id, { width: v })} />
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3>凸窗 / 飘窗（{f.bayWindows.length}）</h3>
          <button className="small" style={{ marginBottom: 8 }} onClick={addBayWindow}>+ 新增凸窗</button>
          {f.bayWindows.map((bw) => (
            <div key={bw.id} className="card" style={{ background: 'var(--bg)' }}>
              <div className="row">
                <span className="tag">开间 {bw.bayStart + 1}~{bw.bayStart + bw.bayCount}</span>
                <button className="small danger" onClick={() => updateFacade({ bayWindows: f.bayWindows.filter((x) => x.id !== bw.id) })}>删除</button>
              </div>
              <div className="grid2" style={{ marginTop: 6 }}>
                <NumberField label="起始开间" value={bw.bayStart + 1} step={1} min={1} max={f.bays}
                  onChange={(v) => updateFacade({ bayWindows: f.bayWindows.map((x) => x.id === bw.id ? { ...x, bayStart: Math.round(v) - 1 } : x) })} />
                <NumberField label="占用开间数" value={bw.bayCount} step={1} min={1} max={f.bays}
                  onChange={(v) => updateFacade({ bayWindows: f.bayWindows.map((x) => x.id === bw.id ? { ...x, bayCount: Math.round(v) } : x) })} />
                <NumberField label="凸出 (m)" value={bw.protrude} step={0.1} min={0.2} max={1.5}
                  onChange={(v) => updateFacade({ bayWindows: f.bayWindows.map((x) => x.id === bw.id ? { ...x, protrude: v } : x) })} />
                <NumberField label="凸窗窗墙比" value={bw.windowRatio} step={0.05} min={0.1} max={0.95}
                  onChange={(v) => updateFacade({ bayWindows: f.bayWindows.map((x) => x.id === bw.id ? { ...x, windowRatio: v } : x) })} />
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3>材质图例</h3>
          {([['wall', '墙体（计入照度）'], ['glass', '玻璃（仅算反射）'], ['trim', '装饰线条']] as const).map(([k, label]) => (
            <div key={k} className="checkline">
              <span className="dot" style={{ background: '#' + MATERIAL_COLORS[k].toString(16).padStart(6, '0') }} />
              {label}
            </div>
          ))}
        </div>
      </aside>
      <div className="stage" ref={hostRef} />
    </>
  );
}

void disposeObject;

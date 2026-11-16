import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { useStore, useCurrentProject } from '../store';
import { buildFacadeGeometry } from '../core/geometry';
import { buildFacadeMeshes } from '../three/facadeMesh';
import { buildLampIcon } from '../three/lampMesh';
import { useThreeViewport, addGround, tagDynamic, clearDynamic, type ViewportContext } from '../three/useThreeViewport';
import { addAmbient } from '../core/scene';
import { NoProject } from '../ui/NoProject';
import { LAMP_KIND_NAME, type Lamp, type LampKind } from '../types';

const DEFAULTS: Record<LampKind, Partial<Lamp>> = {
  flood: { powerW: 150, beamAngle: 30, length: 1, segments: 8, colorTemp: 4000, pitch: 25 },
  wash: { powerW: 60, beamAngle: 30, length: 2, segments: 8, colorTemp: 5000, pitch: 0 },
  point: { powerW: 20, beamAngle: 30, length: 1, segments: 8, colorTemp: 3000, pitch: 0 },
};

export function LampsPage() {
  const project = useCurrentProject();
  const addLamp = useStore((s) => s.addLamp);
  const updateLamp = useStore((s) => s.updateLamp);
  const removeLamp = useStore((s) => s.removeLamp);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mode, setMode] = useState<'translate' | 'rotate'>('translate');
  const tcRef = useRef<TransformControls | null>(null);
  const suppressRef = useRef(false);

  const geo = useMemo(() => (project ? buildFacadeGeometry(project.facade) : null), [project?.facade]);
  const deps = [project?.facade, project?.lamps, selectedId];

  const hostRef = useThreeViewport({
    background: 0x10161e,
    deps,
    onInit: (ctx) => {
      addAmbient(ctx);
      addGround(ctx, geo?.totalWidth ?? 30);
      const tc = new TransformControls(ctx.camera, ctx.renderer.domElement);
      tc.addEventListener('dragging-changed', (e) => {
        ctx.controls.enabled = !(e as unknown as { value: boolean }).value;
      });
      tc.addEventListener('objectChange', () => {
        if (suppressRef.current || !tc.object) return;
        const lamp = project?.lamps.find((l) => l.id === tc.object!.userData.lampId);
        if (!lamp) return;
        const o = tc.object!;
        updateLamp(lamp.id, {
          position: [+o.position.x.toFixed(3), +o.position.y.toFixed(3), +o.position.z.toFixed(3)],
          yaw: lamp.yaw,
          pitch: lamp.pitch,
        });
      });
      // three r169：TransformControls 不再是 Object3D，需通过 helper 加入场景
      const helper = (tc as unknown as { getHelper?: () => THREE.Object3D }).getHelper
        ? (tc as unknown as { getHelper: () => THREE.Object3D }).getHelper()
        : (tc as unknown as THREE.Object3D);
      ctx.scene.add(helper);
      tcRef.current = tc;
      setupPicking(ctx, (id) => setSelectedId(id));
    },
    onRebuild: (ctx) => {
      if (!project || !geo) return;
      const tc = tcRef.current;
      suppressRef.current = true;
      tc?.detach();
      clearDynamic(ctx);
      ctx.scene.add(tagDynamic(buildFacadeMeshes(geo)));
      const lampRoot = tagDynamic(new THREE.Group());
      for (const lamp of project.lamps) {
        const icon = buildLampIcon(lamp, lamp.id === selectedId);
        lampRoot.add(icon);
      }
      ctx.scene.add(lampRoot);
      if (selectedId) {
        const target = lampRoot.children.find((o) => o.userData.lampId === selectedId);
        if (target) {
          tc?.attach(target);
          if (tc) tc.setMode(mode);
        }
      }
      suppressRef.current = false;
    },
  });

  if (!project || !geo) return <NoProject />;
  const selected = project.lamps.find((l) => l.id === selectedId) ?? null;

  const add = (kind: LampKind) => {
    const lamp: Omit<Lamp, 'id'> = {
      name: `${LAMP_KIND_NAME[kind]}-${project.lamps.length + 1}`,
      kind,
      position: [geo.totalWidth / 2, kind === 'wash' ? geo.totalHeight - 0.5 : 0.5, -2],
      yaw: 0,
      ...DEFAULTS[kind],
      groupIds: [],
      enabled: true,
    } as Omit<Lamp, 'id'>;
    addLamp(lamp);
    // 新灯 id 在 store 生成，选中最后一个
    setTimeout(() => {
      const all = useStore.getState().projects.find((p) => p.id === project.id)?.lamps;
      const last = all?.[all.length - 1];
      if (last) setSelectedId(last.id);
    }, 0);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="card">
          <h3>添加灯具</h3>
          <div className="row">
            <button onClick={() => add('flood')}>投光灯</button>
            <button onClick={() => add('wash')}>洗墙灯</button>
            <button onClick={() => add('point')}>点光源</button>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <button className={mode === 'translate' ? 'primary' : ''} onClick={() => { setMode('translate'); tcRef.current?.setMode('translate'); }}>移动</button>
            <button className={mode === 'rotate' ? 'primary' : ''} onClick={() => { setMode('rotate'); tcRef.current?.setMode('rotate'); }}>旋转</button>
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>
            点击灯具选中，拖彩色轴移动/旋转；位置与角度会同步到下方数值框。
          </div>
        </div>

        {selected && (
          <div className="card">
            <h3>灯具参数 — {selected.name}</h3>
            <div className="field">
              <label>名称</label>
              <input value={selected.name} onChange={(e) => updateLamp(selected.id, { name: e.target.value })} />
            </div>
            <div className="grid2">
              <Num label="位置 X (m)" value={selected.position[0]} onChange={(v) => updateLamp(selected.id, { position: [v, selected.position[1], selected.position[2]] })} />
              <Num label="位置 Y (m)" value={selected.position[1]} onChange={(v) => updateLamp(selected.id, { position: [selected.position[0], v, selected.position[2]] })} />
              <Num label="位置 Z (m)" value={selected.position[2]} onChange={(v) => updateLamp(selected.id, { position: [selected.position[0], selected.position[1], v] })} />
              <Num label="偏航角 (°)" value={selected.yaw} step={1} onChange={(v) => updateLamp(selected.id, { yaw: v })} />
              <Num label="俯仰角 (°)" value={selected.pitch} step={1} onChange={(v) => updateLamp(selected.id, { pitch: v })} />
              <Num label="功率 (W)" value={selected.powerW} step={5} min={1} onChange={(v) => updateLamp(selected.id, { powerW: v })} />
              {selected.kind !== 'point' && (
                <Num label="光束角 (°)" value={selected.beamAngle} step={1} min={3} max={170} onChange={(v) => updateLamp(selected.id, { beamAngle: v })} />
              )}
              <Num label="色温 (K)" value={selected.colorTemp} step={100} min={1800} max={10000} onChange={(v) => updateLamp(selected.id, { colorTemp: v })} />
              {selected.kind === 'wash' && (
                <>
                  <Num label="灯段长 (m)" value={selected.length} step={0.1} min={0.2} onChange={(v) => updateLamp(selected.id, { length: v })} />
                  <Num label="离散点数" value={selected.segments} step={1} min={1} max={40} onChange={(v) => updateLamp(selected.id, { segments: Math.round(v) })} />
                </>
              )}
            </div>
            <div className="field" style={{ marginTop: 6 }}>
              <label>分组（多选）</label>
              {project.groups.map((g) => (
                <label key={g.id} className="checkline">
                  <input
                    type="checkbox"
                    checked={selected.groupIds.includes(g.id)}
                    onChange={(e) => {
                      const set = new Set(selected.groupIds);
                      e.target.checked ? set.add(g.id) : set.delete(g.id);
                      updateLamp(selected.id, { groupIds: [...set] });
                    }}
                  />
                  <span className="dot" style={{ background: g.color }} /> {g.name}
                </label>
              ))}
            </div>
            <div className="row">
              <button onClick={() => updateLamp(selected.id, { enabled: !selected.enabled })}>
                {selected.enabled ? '关灯' : '开灯'}
              </button>
              <button className="danger" onClick={() => { removeLamp(selected.id); setSelectedId(null); }}>删除灯具</button>
            </div>
          </div>
        )}

        <div className="card">
          <h3>灯具列表（{project.lamps.length}）</h3>
          {project.lamps.map((l) => (
            <div key={l.id} className={`list-item ${l.id === selectedId ? 'selected' : ''}`} onClick={() => setSelectedId(l.id)}>
              <div style={{ flex: 1 }}>
                <div>{l.name} {!l.enabled && <span className="tag">关</span>}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{LAMP_KIND_NAME[l.kind]} · {l.powerW}W · ({l.position.map((x) => x.toFixed(1)).join(', ')})</div>
              </div>
            </div>
          ))}
        </div>
      </aside>
      <div className="stage" ref={hostRef} />
    </>
  );
}

function Num({ label, value, onChange, step = 0.1, min, max }: {
  label: string; value: number; onChange: (v: number) => void; step?: number; min?: number; max?: number;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input type="number" step={step} min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}

/** 射线拾取：点击灯具图标选中 */
function setupPicking(ctx: ViewportContext, onPick: (id: string | null) => void) {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let downAt = 0;
  const el = ctx.renderer.domElement;
  el.addEventListener('pointerdown', () => { downAt = performance.now(); });
  el.addEventListener('pointerup', (e) => {
    if (performance.now() - downAt > 200) return; // 拖拽不触发拾取
    const rect = el.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, ctx.camera);
    const hits = raycaster.intersectObjects(ctx.scene.children, true);
    const lampHit = hits.find((h) => {
      let o: THREE.Object3D | null = h.object;
      while (o) {
        if (o.userData.lampId) return true;
        o = o.parent;
      }
      return false;
    });
    if (lampHit) {
      let o: THREE.Object3D | null = lampHit.object;
      while (o && !o.userData.lampId) o = o.parent;
      onPick(o?.userData.lampId ?? null);
    } else {
      onPick(null);
    }
  });
}

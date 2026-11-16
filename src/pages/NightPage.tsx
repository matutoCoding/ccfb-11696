import { useMemo } from 'react';
import * as THREE from 'three';
import { useStore, useCurrentProject } from '../store';
import { buildFacadeGeometry } from '../core/geometry';
import { buildFacadeMeshes } from '../three/facadeMesh';
import { buildNightLight } from '../three/lampMesh';
import { useThreeViewport, addGround, tagDynamic, clearDynamic } from '../three/useThreeViewport';
import { addSurroundings, activeLamps } from '../core/scene';
import { effectiveFlux } from '../core/photometry';
import { NoProject } from '../ui/NoProject';

export function NightPage() {
  const project = useCurrentProject();
  const setActiveScene = useStore((s) => s.setActiveScene);
  const updateScene = useStore((s) => s.updateScene);
  const addScene = useStore((s) => s.addScene);
  const removeScene = useStore((s) => s.removeScene);

  const geo = useMemo(() => (project ? buildFacadeGeometry(project.facade) : null), [project?.facade]);
  const lamps = useMemo(() => (project ? activeLamps(project) : []), [project]);
  const activeScene = project?.scenes.find((s) => s.id === project.activeSceneId) ?? null;
  const deps = [project?.facade, project?.lamps, project?.activeSceneId, project?.scenes, project?.settings];

  const hostRef = useThreeViewport({
    background: 0x05080d,
    deps,
    onInit: (ctx) => {
      // 暗场：极弱环境光 + 月亮方向光，参数固定
      ctx.scene.add(new THREE.HemisphereLight(0x1a2438, 0x05070a, 0.12));
      const moon = new THREE.DirectionalLight(0x6e86b8, 0.15);
      moon.position.set(-15, 25, -20);
      ctx.scene.add(moon);
      addGround(ctx, geo?.totalWidth ?? 30);
    },
    onRebuild: (ctx) => {
      if (!project || !geo) return;
      clearDynamic(ctx);
      // 暗场建筑材质（夜间墙面更暗，灯光效果才出得来）
      const facade = buildFacadeMeshes(geo);
      facade.traverse((o) => {
        const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
        if (m && 'color' in m) m.color.multiplyScalar(0.45);
      });
      ctx.scene.add(tagDynamic(facade));
      // 确定性周边剪影
      const env = tagDynamic(new THREE.Group());
      addSurroundings({ scene: env as unknown as THREE.Scene }, project.id + project.name, geo.totalWidth, geo.totalHeight);
      ctx.scene.add(env);
      // 真实灯光：与照度引擎同源 I0
      const lights = tagDynamic(new THREE.Group());
      for (const lamp of lamps) lights.add(buildNightLight(lamp, project.settings));
      ctx.scene.add(lights);
    },
  });

  if (!project || !geo) return <NoProject />;

  const totalFlux = lamps.reduce((s, l) => s + effectiveFlux(l, project.settings), 0);

  const toggleGroup = (gid: string) => {
    if (!activeScene) return;
    const cur = activeScene.groupStates[gid] ?? true;
    updateScene(activeScene.id, { groupStates: { ...activeScene.groupStates, [gid]: !cur } });
  };
  const toggleLamp = (lid: string) => {
    if (!activeScene) return;
    const cur = activeScene.lampOverrides[lid] ?? true;
    updateScene(activeScene.id, { lampOverrides: { ...activeScene.lampOverrides, [lid]: !cur } });
  };

  return (
    <>
      <aside className="sidebar">
        <div className="card">
          <h3>场景模式</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            <span className={`scene-chip ${project.activeSceneId === null ? 'active' : ''}`} onClick={() => setActiveScene(null)}>全部开启</span>
            {project.scenes.map((s) => (
              <span key={s.id} className={`scene-chip ${s.id === project.activeSceneId ? 'active' : ''}`} onClick={() => setActiveScene(s.id)}>
                {s.name}
              </span>
            ))}
          </div>
          <div className="row">
            <button className="small" onClick={() => addScene(`新模式 ${project.scenes.length + 1}`)}>+ 新建模式</button>
            {activeScene && <button className="small danger" onClick={() => removeScene(activeScene.id)}>删除当前模式</button>}
          </div>
          {!activeScene && <div style={{ color: 'var(--muted)', marginTop: 8, fontSize: 12 }}>「全部开启」状态不可编辑，选择或新建一个模式后可分组开关灯。</div>}
        </div>

        {activeScene && (
          <>
            <div className="card">
              <h3>分组开关</h3>
              {project.groups.map((g) => {
                const on = activeScene.groupStates[g.id] ?? true;
                return (
                  <label key={g.id} className="checkline" style={{ cursor: 'pointer' }}>
                    <input type="checkbox" checked={on} onChange={() => toggleGroup(g.id)} />
                    <span className="dot" style={{ background: g.color }} /> {g.name}
                  </label>
                );
              })}
            </div>
            <div className="card">
              <h3>单灯覆盖（优先于分组）</h3>
              {project.lamps.map((l) => {
                const on = activeScene.lampOverrides[l.id] ?? l.enabled;
                return (
                  <label key={l.id} className="checkline" style={{ cursor: 'pointer' }}>
                    <input type="checkbox" checked={on} onChange={() => toggleLamp(l.id)} />
                    {l.name}
                  </label>
                );
              })}
            </div>
          </>
        )}

        <div className="card">
          <h3>当前场景</h3>
          <div className="stat"><span className="k">点亮灯具</span><span className="v">{lamps.length} / {project.lamps.length}</span></div>
          <div className="stat"><span className="k">总有效光通量</span><span className="v">{totalFlux.toFixed(0)} lm</span></div>
          <div className="stat"><span className="k">环境暗场照度</span><span className="v">{project.settings.ambientLux} lx</span></div>
        </div>
      </aside>
      <div className="stage" ref={hostRef}>
        <div className="hud">
          夜景预览 · <b>{activeScene ? activeScene.name : '全部开启'}</b><br />
          光斑边缘按光束角 50% 光强定义 + penumbra 柔化，衰减遵循平方反比
        </div>
      </div>
    </>
  );
}

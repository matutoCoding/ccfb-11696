import { useStore, useCurrentProject } from '../store';
import { NoProject } from '../ui/NoProject';
import { downloadCSV } from '../core/csv';

export function SettingsPage() {
  const project = useCurrentProject();
  const updateSettings = useStore((s) => s.updateSettings);
  const addGroup = useStore((s) => s.addGroup);
  const updateGroup = useStore((s) => s.updateGroup);
  const removeGroup = useStore((s) => s.removeGroup);
  const exportProject = useStore((s) => s.exportProject);
  const importProject = useStore((s) => s.importProject);

  if (!project) return <NoProject />;
  const s = project.settings;

  const num = (label: string, key: keyof typeof s, step: number, min: number, max: number, hint?: string) => (
    <div className="field">
      <label>{label}{hint && `（${hint}）`}</label>
      <input type="number" step={step} min={min} max={max} value={s[key]}
        onChange={(e) => updateSettings({ [key]: Number(e.target.value) })} />
    </div>
  );

  return (
    <div style={{ flex: 1, padding: 20, overflowY: 'auto', maxWidth: 1080, margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className="card">
          <h3>照度计算参数</h3>
          {num('光源发光效率', 'luminousEfficacy', 5, 30, 250, 'lm/W，LED 常规 80~130')}
          {num('维护系数 MF', 'maintenanceFactor', 0.05, 0.3, 1, '污染/光衰综合折减')}
          {num('玻璃可见光反射率', 'glassReflectance', 0.01, 0.02, 0.5, '仅用于反射伪彩')}
          {num('采样网格间距', 'gridSpacing', 0.1, 0.1, 2, 'm，越小越精细')}
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>
            照度 E = I(θ)·cosα/r²；有效通量 Φ = 功率 × 发光效率 × 维护系数。
          </div>
        </div>

        <div className="card">
          <h3>功率与夜景</h3>
          {num('LPD 限值', 'lpdLimit', 1, 1, 200, 'W/m²，超限红色告警')}
          {num('环境暗场照度', 'ambientLux', 0.5, 0, 20, 'lx，夜景环境光')}
        </div>

        <div className="card">
          <h3>灯具分组（{project.groups.length}）</h3>
          {project.groups.map((g) => (
            <div key={g.id} className="row" style={{ marginBottom: 8 }}>
              <input type="color" value={g.color} style={{ width: 42, padding: 2, flex: 'none' }}
                onChange={(e) => updateGroup(g.id, { color: e.target.value })} />
              <input value={g.name} onChange={(e) => updateGroup(g.id, { name: e.target.value })} />
              <button className="small danger" style={{ flex: 'none' }} onClick={() => removeGroup(g.id)}>删除</button>
            </div>
          ))}
          <button className="small" onClick={() => addGroup({ name: `新分组 ${project.groups.length + 1}`, color: '#88cc66' })}>+ 新增分组</button>
        </div>

        <div className="card">
          <h3>项目数据</h3>
          <div className="stat"><span className="k">项目 ID</span><span className="v" style={{ fontSize: 11 }}>{project.id}</span></div>
          <div className="stat"><span className="k">创建时间</span><span className="v">{new Date(project.createdAt).toLocaleString()}</span></div>
          <div className="stat"><span className="k">最近更新</span><span className="v">{new Date(project.updatedAt).toLocaleString()}</span></div>
          <div className="row" style={{ marginTop: 10 }}>
            <button onClick={() => downloadCSV(`${project.name}.json`, exportProject(project.id))}>导出项目 JSON</button>
            <label className="small" style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '6px 12px', cursor: 'pointer', textAlign: 'center' }}>
              导入项目 JSON
              <input type="file" accept=".json,application/json" style={{ display: 'none' }} onChange={async (e) => {
                const f = e.target.files?.[0];
                if (f) {
                  try { importProject(await f.text()); alert('导入成功，请到项目列表查看'); }
                  catch (err) { alert(err instanceof Error ? err.message : '导入失败'); }
                }
                e.target.value = '';
              }} />
            </label>
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 10 }}>
            所有数据保存在浏览器 localStorage（键 facade-lighting-studio-v1），清理浏览器数据会丢失，请及时导出备份。
          </div>
        </div>
      </div>
    </div>
  );
}

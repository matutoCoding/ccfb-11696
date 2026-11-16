import { useRef, useState } from 'react';
import { useStore } from '../store';
import { downloadCSV } from '../core/csv';

export function ProjectsPage() {
  const projects = useStore((s) => s.projects);
  const create = useStore((s) => s.createProject);
  const del = useStore((s) => s.deleteProject);
  const dup = useStore((s) => s.duplicateProject);
  const select = useStore((s) => s.selectProject);
  const rename = useStore((s) => s.renameProject);
  const exportProject = useStore((s) => s.exportProject);
  const importProject = useStore((s) => s.importProject);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const onCreate = () => {
    const n = name.trim() || `写字楼项目 ${projects.length + 1}`;
    const id = create(n);
    setName('');
    select(id);
  };

  const onImport = async (file: File) => {
    setError('');
    try {
      const text = await file.text();
      importProject(text);
    } catch (e) {
      setError(e instanceof Error ? e.message : '导入失败');
    }
  };

  return (
    <div style={{ flex: 1, padding: 24, overflowY: 'auto', maxWidth: 980, margin: '0 auto', width: '100%' }}>
      <div className="card">
        <h3>新建项目</h3>
        <div className="row">
          <input placeholder="输入项目名称，如：XX大厦夜景亮化" value={name} onChange={(e) => setName(e.target.value)} />
          <button className="primary" style={{ flex: 'none' }} onClick={onCreate}>创建项目</button>
          <button style={{ flex: 'none' }} onClick={() => fileRef.current?.click()}>导入 JSON</button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            style={{ display: 'none' }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onImport(f);
              e.target.value = '';
            }}
          />
        </div>
        {error && <div className="warn-box">{error}</div>}
      </div>

      <div className="card">
        <h3>项目列表（{projects.length}）— 数据保存在本机浏览器 localStorage</h3>
        {projects.length === 0 && <div className="empty"><div className="big">🏙</div>还没有项目，先创建一个</div>}
        {projects.map((p) => (
          <div key={p.id} className="list-item" onClick={() => select(p.id)}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                {p.facade.floors}层 × {p.facade.bays}开间 · 灯具 {p.lamps.length} 套 · 更新于 {new Date(p.updatedAt).toLocaleString()}
              </div>
            </div>
            <button className="small" onClick={(e) => { e.stopPropagation(); const n = prompt('新名称', p.name); if (n) rename(p.id, n); }}>重命名</button>
            <button className="small" onClick={(e) => { e.stopPropagation(); select(p.id); }}>打开</button>
            <button className="small" onClick={(e) => { e.stopPropagation(); dup(p.id); }}>复制</button>
            <button className="small" onClick={(e) => {
              e.stopPropagation();
              downloadCSV(`${p.name}.json`, exportProject(p.id));
            }}>导出</button>
            <button className="small danger" onClick={(e) => {
              e.stopPropagation();
              if (confirm(`确定删除项目「${p.name}」？此操作不可恢复。`)) del(p.id);
            }}>删除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

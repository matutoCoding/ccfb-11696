import { useStore } from '../store';

export function NoProject() {
  const setPage = useStore((s) => s.setPage);
  return (
    <div className="empty" style={{ flex: 1 }}>
      <div className="big">📂</div>
      <div>请先在项目列表中打开或创建一个项目</div>
      <button className="primary" style={{ marginTop: 16 }} onClick={() => setPage('projects')}>去项目列表</button>
    </div>
  );
}

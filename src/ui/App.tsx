import { useStore, type PageKey } from '../store';
import { ProjectsPage } from '../pages/ProjectsPage';
import { FacadePage } from '../pages/FacadePage';
import { LampsPage } from '../pages/LampsPage';
import { IlluminancePage } from '../pages/IlluminancePage';
import { NightPage } from '../pages/NightPage';
import { SettingsPage } from '../pages/SettingsPage';

const NAV: Array<{ key: PageKey; label: string }> = [
  { key: 'projects', label: '项目列表' },
  { key: 'facade', label: '立面建模' },
  { key: 'lamps', label: '灯具布置' },
  { key: 'illuminance', label: '照度计算' },
  { key: 'night', label: '夜景预览' },
  { key: 'settings', label: '设置' },
];

export function App() {
  const page = useStore((s) => s.page);
  const setPage = useStore((s) => s.setPage);
  const project = useStore((s) => s.projects.find((p) => p.id === s.currentId) ?? null);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">立面投光设计台</div>
        <nav className="nav">
          {NAV.map((n) => (
            <button
              key={n.key}
              className={page === n.key ? 'active' : ''}
              onClick={() => setPage(n.key)}
            >
              {n.label}
            </button>
          ))}
        </nav>
        {project && <div className="proj-name">{project.name}</div>}
      </header>
      <div className="main">
        {page === 'projects' && <ProjectsPage />}
        {page === 'facade' && <FacadePage />}
        {page === 'lamps' && <LampsPage />}
        {page === 'illuminance' && <IlluminancePage />}
        {page === 'night' && <NightPage />}
        {page === 'settings' && <SettingsPage />}
      </div>
    </div>
  );
}

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Project, Lamp, LampGroup, SceneMode, FacadeParams, CalcSettings } from './types';
import { DEFAULT_SETTINGS, defaultFacade, uid } from './types';

function newProject(name: string): Project {
  const now = Date.now();
  return {
    id: uid('prj'),
    name,
    createdAt: now,
    updatedAt: now,
    facade: defaultFacade(),
    lamps: [],
    groups: [
      { id: uid('grp'), name: '楼顶组', color: '#ffb040' },
      { id: uid('grp'), name: '立面组', color: '#40c8ff' },
    ],
    scenes: [
      { id: uid('scn'), name: '平日模式', groupStates: {}, lampOverrides: {} },
      { id: uid('scn'), name: '节能模式', groupStates: {}, lampOverrides: {} },
      { id: uid('scn'), name: '节日模式', groupStates: {}, lampOverrides: {} },
    ],
    settings: { ...DEFAULT_SETTINGS },
    activeSceneId: null,
  };
}

function touch(p: Project): Project {
  return { ...p, updatedAt: Date.now() };
}

interface StoreState {
  projects: Project[];
  currentId: string | null;
  page: PageKey;
  setPage: (p: PageKey) => void;
  selectProject: (id: string) => void;
  createProject: (name: string) => string;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => string;
  renameProject: (id: string, name: string) => void;
  updateProject: (id: string, fn: (p: Project) => Project) => void;
  exportProject: (id: string) => string;
  importProject: (json: string) => string;
  // 灯具
  addLamp: (lamp: Omit<Lamp, 'id'>) => void;
  updateLamp: (id: string, patch: Partial<Lamp>) => void;
  removeLamp: (id: string) => void;
  // 分组 / 场景
  addGroup: (g: Omit<LampGroup, 'id'>) => void;
  updateGroup: (id: string, patch: Partial<LampGroup>) => void;
  removeGroup: (id: string) => void;
  addScene: (name: string) => void;
  updateScene: (id: string, patch: Partial<SceneMode>) => void;
  removeScene: (id: string) => void;
  setActiveScene: (id: string | null) => void;
  // 立面 / 设置
  updateFacade: (patch: Partial<FacadeParams>) => void;
  updateSettings: (patch: Partial<CalcSettings>) => void;
}

export type PageKey = 'projects' | 'facade' | 'lamps' | 'illuminance' | 'night' | 'settings';

export const useStore = create<StoreState>()(
  persist(
    (set, get) => {
      const mutate = (fn: (p: Project) => Project) => {
        const { currentId, projects } = get();
        if (!currentId) return;
        set({
          projects: projects.map((p) => (p.id === currentId ? touch(fn(p)) : p)),
        });
      };

      return {
        projects: [],
        currentId: null,
        page: 'projects',

        setPage: (page) => set({ page }),
        selectProject: (id) => set({ currentId: id, page: 'facade' }),

        createProject: (name) => {
          const p = newProject(name);
          set((s) => ({ projects: [...s.projects, p] }));
          return p.id;
        },

        deleteProject: (id) =>
          set((s) => ({
            projects: s.projects.filter((p) => p.id !== id),
            currentId: s.currentId === id ? null : s.currentId,
          })),

        duplicateProject: (id) => {
          const src = get().projects.find((p) => p.id === id);
          if (!src) return '';
          const copy: Project = structuredClone(src);
          copy.id = uid('prj');
          copy.name = `${src.name} 副本`;
          copy.createdAt = Date.now();
          copy.updatedAt = copy.createdAt;
          set((s) => ({ projects: [...s.projects, copy] }));
          return copy.id;
        },

        renameProject: (id, name) =>
          set((s) => ({
            projects: s.projects.map((p) => (p.id === id ? touch({ ...p, name }) : p)),
          })),

        updateProject: (id, fn) =>
          set((s) => ({
            projects: s.projects.map((p) => (p.id === id ? touch(fn(p)) : p)),
          })),

        exportProject: (id) => {
          const p = get().projects.find((x) => x.id === id);
          return JSON.stringify({ format: 'facade-lighting-studio', version: 1, project: p }, null, 2);
        },

        importProject: (json) => {
          const data = JSON.parse(json);
          const p: Project = data.project ?? data;
          if (!p || !Array.isArray(p.lamps) || !p.facade) {
            throw new Error('文件格式不正确：缺少 project/facade/lamps 字段');
          }
          const fresh = structuredClone(p) as Project;
          fresh.id = uid('prj');
          fresh.name = `${p.name ?? '导入项目'}`;
          fresh.updatedAt = Date.now();
          set((s) => ({ projects: [...s.projects, fresh] }));
          return fresh.id;
        },

        addLamp: (lamp) =>
          mutate((p) => ({ ...p, lamps: [...p.lamps, { ...lamp, id: uid('lamp') }] })),

        updateLamp: (id, patch) =>
          mutate((p) => ({
            ...p,
            lamps: p.lamps.map((l) => (l.id === id ? { ...l, ...patch } : l)),
          })),

        removeLamp: (id) => mutate((p) => ({ ...p, lamps: p.lamps.filter((l) => l.id !== id) })),

        addGroup: (g) => mutate((p) => ({ ...p, groups: [...p.groups, { ...g, id: uid('grp') }] })),
        updateGroup: (id, patch) =>
          mutate((p) => ({
            ...p,
            groups: p.groups.map((g) => (g.id === id ? { ...g, ...patch } : g)),
          })),
        removeGroup: (id) =>
          mutate((p) => ({
            ...p,
            groups: p.groups.filter((g) => g.id !== id),
            lamps: p.lamps.map((l) => ({ ...l, groupIds: l.groupIds.filter((x) => x !== id) })),
          })),

        addScene: (name) =>
          mutate((p) => ({
            ...p,
            scenes: [...p.scenes, { id: uid('scn'), name, groupStates: {}, lampOverrides: {} }],
          })),
        updateScene: (id, patch) =>
          mutate((p) => ({
            ...p,
            scenes: p.scenes.map((s) => (s.id === id ? { ...s, ...patch } : s)),
          })),
        removeScene: (id) =>
          mutate((p) => ({
            ...p,
            scenes: p.scenes.filter((s) => s.id !== id),
            activeSceneId: p.activeSceneId === id ? null : p.activeSceneId,
          })),
        setActiveScene: (id) => mutate((p) => ({ ...p, activeSceneId: id })),

        updateFacade: (patch) => mutate((p) => ({ ...p, facade: { ...p.facade, ...patch } })),
        updateSettings: (patch) =>
          mutate((p) => ({ ...p, settings: { ...p.settings, ...patch } })),
      };
    },
    { name: 'facade-lighting-studio-v1' },
  ),
);

/** 当前项目（选择器钩子） */
export function useCurrentProject(): Project | null {
  return useStore((s) => s.projects.find((p) => p.id === s.currentId) ?? null);
}

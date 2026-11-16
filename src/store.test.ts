import { describe, it, expect } from 'vitest';
import { useStore } from './store';
import { defaultFacade } from './types';

describe('项目导出导入往返', () => {
  it('导出再导入后数据完全一致（仅 id/时间戳变化）', () => {
    const store = useStore.getState();
    const id = store.createProject('往返测试');
    store.updateProject(id, (p) => ({
      ...p,
      facade: { ...defaultFacade(), floors: 12, bays: 8 },
    }));
    const json = store.exportProject(id);
    const newId = store.importProject(json);
    const src = useStore.getState().projects.find((p) => p.id === id)!;
    const copy = useStore.getState().projects.find((p) => p.id === newId)!;
    expect(copy.facade.floors).toBe(12);
    expect(copy.facade.bays).toBe(8);
    expect(copy.lamps).toEqual(src.lamps);
    expect(copy.groups).toEqual(src.groups);
    expect(copy.scenes).toEqual(src.scenes);
    expect(copy.settings).toEqual(src.settings);
    expect(newId).not.toBe(id);
  });

  it('复制项目生成独立副本，修改互不影响', () => {
    const store = useStore.getState();
    const id = store.createProject('复制测试');
    const copyId = store.duplicateProject(id);
    store.updateProject(copyId, (p) => ({ ...p, name: '改了名' }));
    const src = useStore.getState().projects.find((p) => p.id === id)!;
    expect(src.name).toBe('复制测试');
  });

  it('坏 JSON 抛出可读错误', () => {
    expect(() => useStore.getState().importProject('{bad')).toThrow();
    expect(() => useStore.getState().importProject(JSON.stringify({ hello: 1 }))).toThrow(/格式/);
  });
});

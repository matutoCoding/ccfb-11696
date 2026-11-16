import * as THREE from 'three';
import type { Project, Lamp } from '../types';
import { isLampOn } from './photometry';

/** 按当前场景模式过滤出点亮的灯具 */
export function activeLamps(project: Project): Lamp[] {
  const scene = project.activeSceneId
    ? project.scenes.find((s) => s.id === project.activeSceneId) ?? null
    : null;
  return project.lamps.filter((l) => isLampOn(l, scene));
}

/** 加入固定参数的半球环境光（暗场仅保留微弱环境光，参数写死保证一致） */
export function addAmbient(ctx: { scene: THREE.Scene }, intensity = 0.18) {
  const hemi = new THREE.HemisphereLight(0x3a4a66, 0x0a0d12, intensity);
  ctx.scene.add(hemi);
  const dir = new THREE.DirectionalLight(0x8aa0c0, 0.12);
  dir.position.set(10, 20, -10);
  ctx.scene.add(dir);
}

/** 暗场周边：几栋确定位置/高度的简化建筑剪影，全部由项目 id 种子决定 */
export function addSurroundings(ctx: { scene: THREE.Scene }, seedText: string, width: number, height: number) {
  let h = 0x811c9dc5;
  for (let i = 0; i < seedText.length; i++) {
    h ^= seedText.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  const rand = () => {
    h |= 0;
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const mat = new THREE.MeshStandardMaterial({ color: 0x10161f, roughness: 0.9 });
  for (let i = 0; i < 7; i++) {
    const w = 4 + rand() * 5;
    const bh = height * (0.35 + rand() * 0.7);
    const side = i % 2 === 0 ? -1 : 1;
    const x = width / 2 + side * (8 + rand() * 22);
    const z = 4 - rand() * 26;
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, bh, w), mat);
    b.position.set(x, bh / 2 - 0.05, z);
    ctx.scene.add(b);
  }
}

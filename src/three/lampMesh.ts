import * as THREE from 'three';
import type { Lamp, CalcSettings } from '../types';
import { lampAxis, lampEmitters } from '../core/photometry';
import { colorTempToRGB } from '../core/math';

/** 灯具 -> three.js 朝向（光轴用 cone/spot 表示，cone 模型默认朝 +Z） */
export function lampQuaternion(lamp: Lamp): THREE.Quaternion {
  const axis = lampAxis(lamp);
  const dir = new THREE.Vector3(axis[0], axis[1], axis[2]);
  return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
}

const KIND_COLOR: Record<Lamp['kind'], number> = {
  flood: 0xffc04d,
  wash: 0x4dd2ff,
  point: 0xff5d8a,
};

/** 灯具编辑用小图标组：底座 + 光锥（洗墙灯为长条） */
export function buildLampIcon(lamp: Lamp, selected: boolean): THREE.Group {
  const g = new THREE.Group();
  const color = selected ? 0x00ff9c : KIND_COLOR[lamp.kind];
  const baseMat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6, roughness: 0.4 });

  if (lamp.kind === 'wash') {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(lamp.length, 0.08, 0.12), baseMat));
  } else {
    const head = new THREE.Mesh(
      new THREE.ConeGeometry(lamp.kind === 'point' ? 0.09 : 0.14, lamp.kind === 'point' ? 0.16 : 0.26, 16),
      baseMat,
    );
    head.quaternion.copy(lampQuaternion(lamp));
    head.translateZ(0.13);
    g.add(head);
    g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.1, 12), baseMat));
  }

  if (lamp.kind === 'flood') {
    const len = 2;
    const r = Math.tan((Math.max(0.1, lamp.beamAngle) * Math.PI) / 360) * len;
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(r, len, 24, 1, true),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: selected ? 0.14 : 0.07, side: THREE.DoubleSide, depthWrite: false }),
    );
    cone.quaternion.copy(lampQuaternion(lamp));
    cone.translateZ(len / 2);
    g.add(cone);
  }

  g.position.set(lamp.position[0], lamp.position[1], lamp.position[2]);
  g.userData.lampId = lamp.id;
  return g;
}

/**
 * 夜景预览真实灯光。光强直接取自照度引擎的 emitter I0（cd），
 * 保证"所见即所算"：渲染亮度与伪彩照度使用同一套配光参数。
 */
export function buildNightLight(lamp: Lamp, settings: CalcSettings): THREE.Object3D {
  const rgb = colorTempToRGB(lamp.colorTemp);
  const color = new THREE.Color(rgb[0], rgb[1], rgb[2]);
  const emitters = lampEmitters(lamp, settings);
  const i0 = emitters.reduce((s, e) => s + e.i0, 0);
  const axis = lampAxis(lamp);

  if (lamp.kind === 'point') {
    const pl = new THREE.PointLight(color, i0, 60, 2);
    pl.position.set(...lamp.position);
    return pl;
  }

  const group = new THREE.Group();
  const place = (pos: THREE.Vector3, intensity: number) => {
    const target = new THREE.Object3D();
    target.position.copy(pos).add(new THREE.Vector3(axis[0], axis[1], axis[2]).multiplyScalar(10));
    const spot = new THREE.SpotLight(
      color,
      intensity,
      80,
      (lamp.beamAngle * Math.PI) / 360, // 半角，与配光 50% 定义一致
      0.45, // penumbra：50% 光强边界之外的自然柔化
      2,
    );
    spot.position.copy(pos);
    spot.target = target;
    group.add(spot, target);
  };

  if (lamp.kind === 'wash') {
    // 线光源按离散发光点逐点放置，与照度引擎完全同源
    for (const em of emitters) place(new THREE.Vector3(...em.position), em.i0);
  } else {
    place(new THREE.Vector3(...lamp.position), i0);
  }
  return group;
}

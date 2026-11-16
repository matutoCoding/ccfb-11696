import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface ViewportContext {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
}

interface Options {
  onInit?: (ctx: ViewportContext) => void;
  onRebuild?: (ctx: ViewportContext) => void;
  onFrame?: (ctx: ViewportContext, dt: number) => void;
  deps?: unknown[];
  background?: number;
}

/**
 * 固定渲染管线的 three.js Viewport。
 * 确定性约束：renderer/camera/controls 参数全部写死、色调映射固定，
 * 场景数据全部来自参数化模型，不允许随机数，保证刷新后像素一致。
 * 兼容 React StrictMode 的 effect 双挂载。
 */
export function useThreeViewport(options: Options) {
  const hostRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<ViewportContext | null>(null);
  const frameRef = useRef(options.onFrame);
  frameRef.current = options.onFrame;
  const rebuildRef = useRef(options.onRebuild);
  rebuildRef.current = options.onRebuild;
  const initRef = useRef(options.onInit);
  initRef.current = options.onInit;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    // StrictMode 双挂载保护：已有 canvas 不再重复初始化
    if (host.querySelector('canvas')) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(1.5);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    host.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 500);
    camera.position.set(14, 10, -22);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(options.background ?? 0x0e1218);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.12;
    controls.target.set(10, 8, 0);

    const ctx: ViewportContext = { scene, camera, renderer, controls };
    ctxRef.current = ctx;
    initRef.current?.(ctx);
    rebuildRef.current?.(ctx);

    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const clock = new THREE.Clock();
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const dt = clock.getDelta();
      frameRef.current?.(ctx, dt);
      controls.update();
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      ctx.scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        mesh.geometry?.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat?.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === host) host.removeChild(renderer.domElement);
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    rebuildRef.current?.(ctx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, options.deps ?? []);

  return hostRef;
}

/** 清掉带 dynamic 标记的可重建对象 */
export function clearDynamic(ctx: ViewportContext) {
  const removed: THREE.Object3D[] = [];
  ctx.scene.traverse((o) => {
    if (o.userData.dynamic) removed.push(o);
  });
  for (const o of removed) {
    o.parent?.remove(o);
    disposeObject(o);
  }
}

export function tagDynamic<T extends THREE.Object3D>(obj: T): T {
  obj.userData.dynamic = true;
  return obj;
}

export function disposeObject(obj: THREE.Object3D) {
  obj.traverse((o) => {
    const mesh = o as THREE.Mesh;
    mesh.geometry?.dispose();
    const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
    else mat?.dispose();
  });
}

/** 固定参数的地面网格（暗场环境） */
export function addGround(ctx: ViewportContext, width: number) {
  const grid = new THREE.GridHelper(Math.max(width * 2, 40), 24, 0x2a3442, 0x1c2430);
  grid.position.set(width / 2, -0.02, 8);
  ctx.scene.add(grid);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 80),
    new THREE.MeshStandardMaterial({ color: 0x0c0f14, roughness: 0.95 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(width / 2, -0.05, 6);
  ctx.scene.add(ground);
}

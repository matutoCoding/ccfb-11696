// 领域模型 —— 所有持久化数据的唯一来源，全部为可序列化的纯数据

export type Vec3 = [number, number, number];

export type LampKind = 'flood' | 'wash' | 'point';
export type SurfaceMaterial = 'wall' | 'glass' | 'trim';

/** 灯具类型中文名 */
export const LAMP_KIND_NAME: Record<LampKind, string> = {
  flood: '投光灯',
  wash: '洗墙灯',
  point: '点光源',
};

export interface Lamp {
  id: string;
  name: string;
  kind: LampKind;
  /** 灯具位置（世界坐标 m），对洗墙灯为发光线段起点 */
  position: Vec3;
  /** 偏航角（度）：绕 Y 轴，0 时光轴/发光方向指向 -Z（即朝向立面） */
  yaw: number;
  /** 俯仰角（度）：绕局部 X 轴向下为正，0 时水平 */
  pitch: number;
  /** 额定功率 W（洗墙灯为整段灯具总功率） */
  powerW: number;
  /** 光束角（度，全角，按峰值光强 50% 定义），投光灯用 */
  beamAngle: number;
  /** 洗墙灯发光段长度 m */
  length: number;
  /** 洗墙灯离散发光点数 */
  segments: number;
  /** 投光灯/点光源的色温 K，用于渲染色调 */
  colorTemp: number;
  /** 所属分组 id 列表 */
  groupIds: string[];
  enabled: boolean;
}

export interface LampGroup {
  id: string;
  name: string;
  color: string;
}

/** 场景模式：分组开关矩阵 + 单灯覆盖 */
export interface SceneMode {
  id: string;
  name: string;
  /** groupId -> 是否开启；未列出的组按开处理 */
  groupStates: Record<string, boolean>;
  /** lampId -> 强制开关；优先于分组状态 */
  lampOverrides: Record<string, boolean>;
}

/** 立面装饰线条 */
export interface FacadeLine {
  id: string;
  /** horizontal=横向腰线（沿 X），vertical=竖向线条（沿 Y） */
  orientation: 'horizontal' | 'vertical';
  /** horizontal: 高度位置 m；vertical: 水平位置 m（相对立面左端） */
  offset: number;
  /** 凸出墙面 m */
  protrude: number;
  /** 截面宽度 m */
  width: number;
}

/** 凸窗（飘窗）：覆盖若干开间、从地到顶的外凸体 */
export interface BayWindow {
  id: string;
  /** 起始开间索引 */
  bayStart: number;
  /** 占用开间数 */
  bayCount: number;
  /** 凸出墙面 m */
  protrude: number;
  /** 窗墙比（凸窗正面玻璃占比） */
  windowRatio: number;
}

export interface FacadeParams {
  /** 层数 */
  floors: number;
  /** 每层层高 m */
  floorHeight: number;
  /** 开间数 */
  bays: number;
  /** 每开间宽度 m */
  bayWidth: number;
  /** 窗墙比 0~1（每开间立面上玻璃面积占比） */
  windowRatio: number;
  /** 墙体厚度 m */
  thickness: number;
  lines: FacadeLine[];
  bayWindows: BayWindow[];
}

export interface CalcSettings {
  /** 光源发光效率 lm/W */
  luminousEfficacy: number;
  /** 维护系数（利用系数链），乘到光通量上 */
  maintenanceFactor: number;
  /** 玻璃可见光反射率（仅用于反射伪彩，不计照度） */
  glassReflectance: number;
  /** 单位面积功率密度限值 W/m² */
  lpdLimit: number;
  /** 照度采样网格间距 m */
  gridSpacing: number;
  /** 环境暗场照度 lx（夜景预览用） */
  ambientLux: number;
}

export interface Project {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  facade: FacadeParams;
  lamps: Lamp[];
  groups: LampGroup[];
  scenes: SceneMode[];
  settings: CalcSettings;
  /** 当前激活的场景模式 id，null=全部开启 */
  activeSceneId: string | null;
}

/** 几何面片：照度引擎与 3D 渲染共用同一套参数化产物 */
export interface SurfacePatch {
  id: string;
  material: SurfaceMaterial;
  /** 面片中心 */
  center: Vec3;
  /** 面片宽（X 向）m */
  width: number;
  /** 面片高（Y 向）m */
  height: number;
  /** 外法线（单位向量，恒为单位长度） */
  normal: Vec3;
}

export interface FacadeGeometry {
  /** 立面总宽 m */
  totalWidth: number;
  /** 立面总高 m */
  totalHeight: number;
  /** 主墙面所在平面 z（其余凸件为更负的 z） */
  wallZ: number;
  patches: SurfacePatch[];
}

export const DEFAULT_SETTINGS: CalcSettings = {
  luminousEfficacy: 100,
  maintenanceFactor: 0.8,
  glassReflectance: 0.12,
  lpdLimit: 25,
  gridSpacing: 0.5,
  ambientLux: 2,
};

export function defaultFacade(): FacadeParams {
  return {
    floors: 6,
    floorHeight: 3.6,
    bays: 5,
    bayWidth: 4.2,
    windowRatio: 0.35,
    thickness: 0.3,
    lines: [],
    bayWindows: [],
  };
}

let counter = 0;
export function uid(prefix = 'id'): string {
  counter += 1;
  return `${prefix}_${Date.now().toString(36)}_${counter.toString(36)}`;
}

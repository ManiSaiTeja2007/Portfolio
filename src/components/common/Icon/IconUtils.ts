// src/components/common/Icon/IconUtils.ts
import {
  SiRos,
  SiOpencv,
  SiArduino,
  SiRaspberrypi,
  SiEspressif,
  SiStmicroelectronics,
  SiCplusplus,
  SiC,
  SiPython,
  SiGo,
  SiRust,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiLinux,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpring,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiSupabase,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGitlab,
  SiBitbucket,
  SiFigma,
  SiNpm,
  SiYarn,
  SiWebpack,
  SiVite,
  SiGraphql,
  SiApollographql,
  SiRedux,
  SiSocketdotio,
  SiThreedotjs,
  SiD3,
  SiChartdotjs,
  SiJupyter,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiJest,
  SiCypress,
  SiMocha,
  SiKotlin,
  SiFastapi,
  SiJulia,
  SiGradle,
  SiPrometheus,
  SiMarkdown,
  SiFramer,
  SiGooglegemini,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { Code2, Cpu } from 'lucide-react';
import {
  GazeboIcon,
  EmbeddedCIcon,
  STM32Icon,
  KinematicsIcon,
  SLAMIcon,
  PlaywrightIcon,
  type IconComponent,
} from './CustomIcons';

export type { IconComponent };

export const normalizeTechName = (techName: string): string => {
  return techName
    .toLowerCase()
    .replace(/\+\+/g, 'plusplus')
    .replace(/#/g, 'sharp')
    .replace(/[^a-z0-9]/g, '')
    .trim();
};

export const ICON_COMPONENT_MAP: Record<string, IconComponent> = {
  // Robotics & Autonomous Control
  ros: SiRos,
  ros2: SiRos,
  rosros2: SiRos,
  opencv: SiOpencv,
  gazebo: GazeboIcon,
  gazebosim: GazeboIcon,
  kinematics: KinematicsIcon,
  kinematicscontrol: KinematicsIcon,
  slam: SLAMIcon,
  slamnavigation: SLAMIcon,

  // Hardware & Embedded Systems
  arduino: SiArduino,
  raspberrypi: SiRaspberrypi,
  raspberry: SiRaspberrypi,
  rpi: SiRaspberrypi,
  esp32: SiEspressif,
  espressif: SiEspressif,
  stm32: STM32Icon,
  stmicroelectronics: SiStmicroelectronics,
  freertos: EmbeddedCIcon,
  freertosembeddedc: EmbeddedCIcon,
  embeddedc: EmbeddedCIcon,

  // Programming Languages
  cpp: SiCplusplus,
  cplusplus: SiCplusplus,
  c: SiC,
  python: SiPython,
  python312: SiPython,
  py: SiPython,
  go: SiGo,
  golang: SiGo,
  rust: SiRust,
  java: FaJava,
  kotlin: SiKotlin,
  julia: SiJulia,

  // AI & Machine Learning
  pytorch: SiPytorch,
  torch: SiPytorch,
  tensorflow: SiTensorflow,
  tf: SiTensorflow,
  scikitlearn: SiScikitlearn,
  sklearn: SiScikitlearn,
  pandas: SiPandas,
  numpy: SiNumpy,
  gemini: SiGooglegemini,
  googlegemini: SiGooglegemini,
  geminiai: SiGooglegemini,
  googlegemini25flash: SiGooglegemini,
  tinyml: Cpu,

  // Cloud & Systems DevOps
  linux: SiLinux,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab,
  bitbucket: SiBitbucket,
  kubernetes: SiKubernetes,
  k8s: SiKubernetes,
  terraform: SiTerraform,
  ansible: SiAnsible,
  jenkins: SiJenkins,
  aws: FaAws,
  amazonwebservices: FaAws,
  googlecloud: SiGooglecloud,
  gcp: SiGooglecloud,
  prometheus: SiPrometheus,

  // Databases & Storage
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  redis: SiRedis,
  mongodb: SiMongodb,
  mongo: SiMongodb,
  mysql: SiMysql,
  sqlite: SiSqlite,
  firebase: SiFirebase,
  supabase: SiSupabase,

  // Frontend & UI
  react: SiReact,
  reactjs: SiReact,
  react19: SiReact,
  typescript: SiTypescript,
  ts: SiTypescript,
  tailwindcss: SiTailwindcss,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  js: SiJavascript,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss,
  css3: SiCss,
  nextjs: SiNextdotjs,
  vuejs: SiVuedotjs,
  angular: SiAngular,
  svelte: SiSvelte,
  framermotion: SiFramer,
  framer: SiFramer,

  // Backend & APIs
  nodejs: SiNodedotjs,
  express: SiExpress,
  expressjs: SiExpress,
  django: SiDjango,
  flask: SiFlask,
  fastapi: SiFastapi,
  spring: SiSpring,
  graphql: SiGraphql,
  apollo: SiApollographql,
  redux: SiRedux,
  socketio: SiSocketdotio,

  // Visual & Math
  threejs: SiThreedotjs,
  d3: SiD3,
  d3js: SiD3,
  chartjs: SiChartdotjs,
  jupyter: SiJupyter,

  // Mobile
  reactnative: SiReact,
  flutter: SiFlutter,
  android: SiAndroid,
  androidsdk: SiAndroid,
  ios: SiApple,

  // Testing & Build
  jest: SiJest,
  cypress: SiCypress,
  playwright: PlaywrightIcon,
  mocha: SiMocha,
  gradle: SiGradle,
  markdown: SiMarkdown,

  // Developer Tools
  vscode: VscVscode,
  visualstudiocode: VscVscode,
  postman: SiPostman,
  figma: SiFigma,
  npm: SiNpm,
  yarn: SiYarn,
  webpack: SiWebpack,
  vite: SiVite,
};

export const getTechIconComponent = (techName: string): IconComponent => {
  const normalized = normalizeTechName(techName);

  // Exact normalized match
  if (ICON_COMPONENT_MAP[normalized]) {
    return ICON_COMPONENT_MAP[normalized];
  }

  // Key containment match
  for (const [key, comp] of Object.entries(ICON_COMPONENT_MAP)) {
    if (normalized.length >= 3 && (normalized.includes(key) || (key.length >= 3 && key.includes(normalized)))) {
      return comp;
    }
  }

  return Code2;
};

export const hasIcon = (techName: string): boolean => {
  const normalized = normalizeTechName(techName);
  if (ICON_COMPONENT_MAP[normalized]) return true;
  for (const key of Object.keys(ICON_COMPONENT_MAP)) {
    if (normalized.length >= 3 && (normalized.includes(key) || (key.length >= 3 && key.includes(normalized)))) {
      return true;
    }
  }
  return false;
};

export const getCachedIcon = (techName: string): string => {
  return techName;
};

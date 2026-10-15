// src/utils/portfolioData.ts
import type { 
  Service, 
  Skill, 
  ValueProposition, 
  PortfolioProject,
  Availability 
} from '@/types/portfolio';

export const services: Service[] = [
  {
    id: 'robotics-autonomous',
    title: 'Robotics & Autonomous Systems',
    description: 'Kinematics, trajectory generation, path planning, and ROS robotic simulations.',
    icon: '🤖',
    technologies: ['ROS', 'Gazebo', 'Kinematics', 'Path Planning', 'PID Control'],
  },
  {
    id: 'embedded-firmware',
    title: 'Embedded Systems & Microcontrollers',
    description: 'Real-time firmware, peripheral drivers (I2C/SPI/UART), and sensor interfacing on silicon.',
    icon: '⚡',
    technologies: ['STM32', 'ESP32', 'Arduino', 'FreeRTOS', 'C/C++'],
  },
  {
    id: 'edge-ai-vision',
    title: 'Edge AI & Computer Vision',
    description: 'Real-time image classification, OCR zoning pipelines, and visual perception on edge devices.',
    icon: '👁️',
    technologies: ['OpenCV', 'Google ML Kit', 'Python', 'Kotlin', 'CameraX'],
  },
  {
    id: 'systems-telemetry',
    title: 'Systems & Real-Time Telemetry',
    description: 'High-performance networking, mathematical simulations, and low-latency data pipelines.',
    icon: '🛰️',
    technologies: ['Go', 'Python', 'SGP4', 'Prometheus', 'Linux'],
  },
];

export const skills: Skill[] = [
  // Robotics & Hardware
  { id: 'ros', name: 'ROS', level: 4, category: 'hardware' },
  { id: 'embedded-c', name: 'Embedded C/C++', level: 4, category: 'hardware' },
  { id: 'esp32', name: 'ESP32', level: 4, category: 'hardware' },
  { id: 'stm32', name: 'STM32', level: 3, category: 'hardware' },
  { id: 'arduino', name: 'Arduino', level: 4, category: 'hardware' },
  { id: 'raspberrypi', name: 'Raspberry Pi', level: 4, category: 'hardware' },

  // Languages
  { id: 'cpp', name: 'C++', level: 4, category: 'language' },
  { id: 'c', name: 'C', level: 4, category: 'language' },
  { id: 'python', name: 'Python', level: 5, category: 'language' },
  { id: 'go', name: 'Go', level: 4, category: 'language' },
  { id: 'typescript', name: 'TypeScript', level: 4, category: 'language' },

  // Vision & AI
  { id: 'opencv', name: 'OpenCV', level: 4, category: 'ai' },
  { id: 'tensorflow', name: 'TensorFlow / PyTorch', level: 3, category: 'ai' },
  { id: 'mlkit', name: 'Google ML Kit', level: 4, category: 'ai' },

  // Tools & Platforms
  { id: 'linux', name: 'Linux', level: 4, category: 'tool' },
  { id: 'git', name: 'Git', level: 4, category: 'tool' },
  { id: 'docker', name: 'Docker', level: 3, category: 'tool' },
  { id: 'gazebo', name: 'Gazebo', level: 3, category: 'tool' },
];

export const valuePropositions: ValueProposition[] = [
  {
    id: 'physical-precision',
    title: 'Physical & Mathematical Precision',
    description: 'Rigorous control algorithms, kinematics modeling, and hardware-conscious execution.',
    icon: '🎯',
  },
  {
    id: 'systems-thinking',
    title: 'Systems-Level Thinking',
    description: 'Architecting cohesive pipelines from hardware sensors to real-time control logic.',
    icon: '🧩',
  },
  {
    id: 'continuous-experimentation',
    title: 'Continuous Experimentation',
    description: 'Rapidly prototyping robotic control, testing in simulation, and validating on physical hardware.',
    icon: '📚',
  },
  {
    id: 'collaboration',
    title: 'Collaboration & Leadership',
    description: 'Cross-functional communication uniting hardware, firmware, and software engineering.',
    icon: '🤝',
  },
];

export const projects: PortfolioProject[] = [
  {
    id: 'space-debris-tracker',
    title: 'Space Debris Orbit Tracker & Propagator',
    description: 'Orbital physics propagation and collision risk modeling in Python & Julia.',
    status: 'completed',
    technologies: ['Python', 'Julia', 'SGP4', 'Physics Modeling'],
    timeline: '2026',
    link: '/projects/python/space-debris-tracker',
  },
  {
    id: 'aeroproxy',
    title: 'AeroProxy L7 Systems Gateway',
    description: 'High-throughput L7 proxy with EWMA predictive routing in Go.',
    status: 'completed',
    technologies: ['Go', 'Gossip Protocol', 'Prometheus', 'Networking'],
    timeline: '2026',
    link: '/projects/go/aeroproxy',
  },
  {
    id: 'nutriguard',
    title: 'NutriGuard Edge AI Vision Platform',
    description: 'On-device OCR zoning and semantic classifier operating under 350ms.',
    status: 'completed',
    technologies: ['Kotlin', 'Google ML Kit', 'Computer Vision'],
    timeline: '2026',
    link: '/projects/android/nutriguard',
  },
];

export const availability: Availability = {
  status: 'actively-seeking',
  type: ['Robotics Internship', 'Embedded Systems Internship', 'Systems Engineering', 'Research Fellowship'],
  timeline: 'Summer 2027',
  location: 'On-site / Hybrid / Remote',
};

// Helper functions
export const getServices = () => services;
export const getSkills = () => skills;
export const getValuePropositions = () => valuePropositions;
export const getProjects = () => projects;
export const getAvailability = () => availability;

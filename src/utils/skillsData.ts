// src/utils/skillsData.ts
import type { Skill } from '@/types/skill';

export const skillsData: Skill[] = [
  // Robotics & Control Systems
  { id: 'ros', name: 'ROS / ROS2', iconUrl: 'simple-icons:ros', category: 'robotics' },
  { id: 'opencv', name: 'OpenCV', iconUrl: 'simple-icons:opencv', category: 'robotics' },
  { id: 'gazebo', name: 'Gazebo Sim', iconUrl: 'simple-icons:robotframework', category: 'robotics' },
  { id: 'kinematics', name: 'Kinematics & Control', iconUrl: 'simple-icons:blueprint', category: 'robotics' },
  { id: 'slam', name: 'SLAM & Navigation', iconUrl: 'simple-icons:radar', category: 'robotics' },

  // Hardware & Embedded Systems
  { id: 'arduino', name: 'Arduino', iconUrl: 'simple-icons:arduino', category: 'hardware_iot' },
  { id: 'raspberrypi', name: 'Raspberry Pi', iconUrl: 'simple-icons:raspberrypi', category: 'hardware_iot' },
  { id: 'esp32', name: 'ESP32', iconUrl: 'mdi:chip', category: 'hardware_iot' },
  { id: 'stm32', name: 'STM32', iconUrl: 'simple-icons:stmicroelectronics', category: 'hardware_iot' },
  { id: 'freertos', name: 'FreeRTOS / Embedded C', iconUrl: 'mdi:cpu-64-bit', category: 'hardware_iot' },

  // Programming Languages
  { id: 'cpp', name: 'C++', iconUrl: 'simple-icons:cplusplus', category: 'languages' },
  { id: 'c', name: 'C', iconUrl: 'simple-icons:c', category: 'languages' },
  { id: 'python', name: 'Python', iconUrl: 'simple-icons:python', category: 'languages' },
  { id: 'go', name: 'Go', iconUrl: 'simple-icons:go', category: 'languages' },
  { id: 'rust', name: 'Rust', iconUrl: 'simple-icons:rust', category: 'languages' },
  { id: 'java', name: 'Java', iconUrl: 'simple-icons:java', category: 'languages' },

  // AI & Machine Learning
  { id: 'pytorch', name: 'PyTorch', iconUrl: 'simple-icons:pytorch', category: 'ai_ml' },
  { id: 'tensorflow', name: 'TensorFlow', iconUrl: 'simple-icons:tensorflow', category: 'ai_ml' },
  { id: 'scikitlearn', name: 'Scikit-learn', iconUrl: 'simple-icons:scikitlearn', category: 'ai_ml' },
  { id: 'pandas', name: 'Pandas', iconUrl: 'simple-icons:pandas', category: 'ai_ml' },
  { id: 'numpy', name: 'NumPy', iconUrl: 'simple-icons:numpy', category: 'ai_ml' },

  // Cloud & Systems DevOps
  { id: 'linux', name: 'Linux', iconUrl: 'simple-icons:linux', category: 'cloud_devops' },
  { id: 'docker', name: 'Docker', iconUrl: 'simple-icons:docker', category: 'cloud_devops' },
  { id: 'git', name: 'Git', iconUrl: 'simple-icons:git', category: 'cloud_devops' },
  { id: 'github', name: 'GitHub', iconUrl: 'simple-icons:github', category: 'cloud_devops' },

  // Databases & Storage
  { id: 'postgresql', name: 'PostgreSQL', iconUrl: 'simple-icons:postgresql', category: 'database' },
  { id: 'redis', name: 'Redis', iconUrl: 'simple-icons:redis', category: 'database' },
  { id: 'mongodb', name: 'MongoDB', iconUrl: 'simple-icons:mongodb', category: 'database' },

  // Frontend & UI (Telemetry Dashboards)
  { id: 'react', name: 'React', iconUrl: 'simple-icons:react', category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', iconUrl: 'simple-icons:typescript', category: 'frontend' },
  { id: 'tailwindcss', name: 'Tailwind CSS', iconUrl: 'simple-icons:tailwindcss', category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', iconUrl: 'simple-icons:javascript', category: 'frontend' },

  // Developer Tools
  { id: 'vscode', name: 'VS Code', iconUrl: 'simple-icons:visualstudiocode', category: 'tools' },
  { id: 'postman', name: 'Postman', iconUrl: 'simple-icons:postman', category: 'tools' },
];

// Helper functions
export const getSkillsByCategory = () => {
  const categories: Record<string, Skill[]> = {};

  skillsData.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });

  return categories;
};

export const getAllSkills = () => skillsData;

export const getSkillsByNames = (skillNames: string[]): Skill[] => {
  return skillsData.filter(skill => 
    skillNames.some(name => 
      skill.name.toLowerCase().includes(name.toLowerCase()) || 
      name.toLowerCase().includes(skill.name.toLowerCase())
    )
  );
};

// Fallback icon resolver
export const getIconForSkill = (skillName: string): string => {
  const skill = skillsData.find(s => 
    s.name.toLowerCase() === skillName.toLowerCase() ||
    skillName.toLowerCase().includes(s.name.toLowerCase())
  );

  return skill?.iconUrl || 'simple-icons:code';
};

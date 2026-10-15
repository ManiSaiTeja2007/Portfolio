// src/utils/experienceData.ts

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  iconName: 'GraduationCap' | 'Trophy' | 'Briefcase' | 'Users';
  type: 'learning' | 'competitive' | 'opensource' | 'academic';
}

export const experiencesData: ExperienceItem[] = [
  {
    title: 'Self-Directed Learning & Research',
    organization: 'Robotics Labs & Personal Projects',
    period: '2022 - Present',
    description: [
      'Developing robotics simulations, kinematic models, and autonomous algorithms in ROS',
      'Prototyping embedded firmware on STM32, ESP32, and Arduino microcontrollers',
      'Applying computer vision (OpenCV) and sensor fusion to physical perception',
      'Participating in competitive engineering challenges and open-source projects',
    ],
    iconName: 'GraduationCap',
    type: 'learning',
  },
  {
    title: 'Competitive Programming',
    organization: 'LeetCode, CodeChef',
    period: '2023 - Present',
    description: [
      'Regularly solving complex algorithmic and DSA problems',
      'Participating in timed coding contests and hackathons',
      'Mastering mathematical optimization techniques in C++ and Python',
      'Refining problem-solving speed and algorithmic precision',
    ],
    iconName: 'Trophy',
    type: 'competitive',
  },
  {
    title: 'Open Source Contributions',
    organization: 'GitHub',
    period: '2023 - Present',
    description: [
      'Developing and maintaining open-source systems and robotics repositories',
      'Publishing documentation, architectures, and reproducible codebases',
      'Contributing low-latency tools and telemetry models',
      'Collaborating with developers and researchers globally',
    ],
    iconName: 'Briefcase',
    type: 'opensource',
  },
  {
    title: 'College Projects & Activities',
    organization: 'IIIT Sri City',
    period: '2024 - Present',
    description: [
      'Working on core academic projects in Robotics, Embedded Systems, and Signal Processing',
      'Participating in college robotics and electronics clubs',
      'Collaborating with peers on hardware-software co-design and telemetry',
      'Attending specialized workshops on control theory and microprocessors',
    ],
    iconName: 'Users',
    type: 'academic',
  }
];

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
    title: 'Self-Directed Learning',
    organization: 'Personal Projects & Online Courses',
    period: '2022 - Present',
    description: [
      'Building full-stack web applications with modern technologies',
      'Exploring IoT systems and embedded programming',
      'Learning AI/ML concepts and applications',
      'Participating in coding challenges and hackathons',
    ],
    iconName: 'GraduationCap',
    type: 'learning',
  },
  {
    title: 'Competitive Programming',
    organization: 'LeetCode, CodeChef',
    period: '2023 - Present',
    description: [
      'Regularly solving DSA problems',
      'Participating in coding contests',
      'Improving problem-solving skills',
      'Learning optimization techniques',
    ],
    iconName: 'Trophy',
    type: 'competitive',
  },
  {
    title: 'Open Source Contributions',
    organization: 'GitHub',
    period: '2023 - Present',
    description: [
      'Contributing to open-source projects',
      'Maintaining personal project repositories',
      'Documenting code and writing READMEs',
      'Collaborating with developers globally',
    ],
    iconName: 'Briefcase',
    type: 'opensource',
  },
  {
    title: 'College Projects & Activities',
    organization: 'IIIT Sri City',
    period: '2026 - Present',
    description: [
      'Working on academic projects in Electronics and Computer Science',
      'Participating in college technical clubs and events',
      'Collaborating with peers on coding projects',
      'Attending workshops and tech seminars',
    ],
    iconName: 'Users',
    type: 'academic',
  }
];

// src/utils/principlesData.ts

export interface PrincipleItem {
  icon: string;
  title: string;
  description: string;
}

export const principlesData: PrincipleItem[] = [
  {
    icon: '🔍',
    title: 'Understand First',
    description: 'Spend time understanding the problem domain, constraints, and requirements before writing any code.'
  },
  {
    icon: '⚡',
    title: 'Optimize Intelligently',
    description: 'Write efficient code that considers both algorithmic complexity and hardware constraints.'
  },
  {
    icon: '🌱',
    title: 'Build to Evolve',
    description: 'Create solutions that can adapt and grow, not just solve today\'s requirements.'
  },
  {
    icon: '🎯',
    title: 'Focus on Impact',
    description: 'Prioritize work that creates real value and solves meaningful problems.'
  },
  {
    icon: '🤝',
    title: 'Collaborate Openly',
    description: 'Share knowledge, learn from others, and contribute to the developer community.'
  },
  {
    icon: '📚',
    title: 'Learn Continuously',
    description: 'Stay curious and keep updating skills with emerging technologies and best practices.'
  }
];

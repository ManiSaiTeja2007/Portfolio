// src/components/common/Cards/TechStackDisplay.tsx
import { memo } from 'react';
import { IconDisplay } from '../Icon/IconDisplay';

interface TechStackDisplayProps {
  technologies: string[];
  maxDisplay?: number;
  showIcons?: boolean;
}

export const TechStackDisplay = memo(({ 
  technologies, 
  maxDisplay = 4,
  showIcons = true,
}: TechStackDisplayProps) => {

  // Clean up technology names for better icon matching
  const cleanTechnologies = technologies.map(tech => {
    // Remove version numbers - FIXED: Removed unnecessary escapes
    const clean = tech.replace(/[0-9.+]+/g, '').trim();

    // Common replacements
    const replacements: Record<string, string> = {
      'Arduino C++': 'Arduino',
      'AWS Lambda': 'AWS',
      'AWS SageMaker': 'AWS',
      'TensorFlow.js': 'TensorFlow',
      'React 18': 'React',
      'Angular 16': 'Angular',
      'Node.js': 'Node.js',
      'Express.js': 'Express',
      'MongoDB': 'MongoDB',
      'PostgreSQL': 'PostgreSQL',
      'Docker': 'Docker',
      'Kubernetes': 'Kubernetes',
      'Git': 'Git',
      'GitHub': 'GitHub',
      'TypeScript': 'TypeScript',
      'JavaScript': 'JavaScript',
      'Python': 'Python',
      'Java': 'Java',
      'C++': 'C++',
      'HTML5': 'HTML5',
      'CSS3': 'CSS3',
      'Tailwind CSS': 'Tailwind CSS',
    };

    return replacements[tech] || replacements[clean] || clean || tech;
  }).filter(Boolean);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Tech Stack
        </span>
        {technologies.length > maxDisplay && (
          <span className="text-xs text-slate-500">
            {technologies.length} technologies
          </span>
        )}
      </div>

      {showIcons ? (
        <IconDisplay
          technologies={cleanTechnologies}
          maxDisplay={maxDisplay}
          showLabels={true}
          size="sm"
        />
      ) : (
        <div className="flex flex-wrap gap-2">
          {cleanTechnologies.slice(0, maxDisplay).map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="px-3 py-1.5 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-mono"
            >
              {tech}
            </span>
          ))}
          {technologies.length > maxDisplay && (
            <span className="px-3 py-1.5 text-slate-500 text-xs">
              +{technologies.length - maxDisplay} more
            </span>
          )}
        </div>
      )}
    </div>
  );
});

TechStackDisplay.displayName = 'TechStackDisplay';

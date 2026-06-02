// src/components/common/Cards/ProjectHeader.tsx
import { memo } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import PrimaryButton from '../Buttons/PrimaryButton';

interface ProjectHeaderProps {
  title: string;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectHeader = memo(({ 
  title, 
  category, 
  githubUrl, 
  liveUrl 
}: ProjectHeaderProps) => {
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-default mb-2 line-clamp-1">
          {title}
        </h3>
        <span className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
          {category.toUpperCase()}
        </span>
      </div>

      <div className="flex space-x-2">
        {githubUrl && (
          <PrimaryButton
            size="icon"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, '_blank');
            }}
            aria-label="View GitHub repository"
          >
            <FaGithub size={18} />
          </PrimaryButton>
        )}
        {liveUrl && (
          <PrimaryButton
            size="icon"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              window.open(liveUrl, '_blank');
            }}
            aria-label="View live demo"
          >
            <ExternalLink size={18} />
          </PrimaryButton>
        )}
      </div>
    </div>
  );
});

ProjectHeader.displayName = 'ProjectHeader';

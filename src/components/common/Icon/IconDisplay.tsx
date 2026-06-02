// src/components/common/Icon/IconDisplay.tsx
import { TechIcon } from './Icon';
import { hasIcon } from './IconUtils'; // Import from IconUtils
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

interface IconDisplayProps {
  technologies: string[];
  maxDisplay?: number;
  showLabels?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onIconError?: (techName: string) => void;
}

export const IconDisplay = ({
  technologies,
  maxDisplay = 6,
  showLabels = true,
  size = 'md',
  className = '',
  onIconError
}: IconDisplayProps) => {
  const [failedIcons, setFailedIcons] = useState<Set<string>>(new Set());
  const [loadingIcons, setLoadingIcons] = useState<Set<string>>(new Set());

  const normalizedTechs = technologies.slice(0, maxDisplay);
  const hasMore = technologies.length > maxDisplay;

  const handleIconError = (techName: string) => {
    setFailedIcons(prev => new Set([...prev, techName]));
    onIconError?.(techName);
  };

  const handleIconLoad = (techName: string) => {
    setLoadingIcons(prev => {
      const next = new Set(prev);
      next.delete(techName);
      return next;
    });
  };

  const handleIconStartLoad = (techName: string) => {
    setLoadingIcons(prev => new Set([...prev, techName]));
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {normalizedTechs.map((tech, index) => {
        const hasValidIcon = hasIcon(tech);
        const isLoading = loadingIcons.has(tech);
        const hasFailed = failedIcons.has(tech);

        return (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/80 rounded-lg transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
            title={tech}
          >
            {isLoading ? (
              <div className="w-6 h-6 flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin text-slate-500" />
              </div>
            ) : hasFailed || !hasValidIcon ? (
              <div className="w-6 h-6 flex items-center justify-center text-slate-500">
                <span className="text-sm font-bold">?</span>
              </div>
            ) : (
              <div 
                onLoad={() => handleIconLoad(tech)}
                onError={() => handleIconError(tech)}
                onLoadStart={() => handleIconStartLoad(tech)}
              >
                <TechIcon 
                  name={tech}
                  size={size}
                  color="primary"
                  fallbackIcon="simple-icons:code"
                />
              </div>
            )}

            {showLabels && (
              <span className="text-xs text-slate-700 dark:text-slate-300 whitespace-nowrap">
                {tech.length > 12 ? `${tech.substring(0, 10)}...` : tech}
              </span>
            )}
          </div>
        );
      })}

      {hasMore && (
        <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/80 rounded-lg">
          <span className="text-xs text-slate-500">
            +{technologies.length - maxDisplay} more
          </span>
        </div>
      )}
    </div>
  );
};

// Display with fallback for missing icons
export const SafeIconDisplay = ({ technologies, ...props }: IconDisplayProps) => {
  const [missingIcons, setMissingIcons] = useState<string[]>([]);

  const handleIconError = (techName: string) => {
    setMissingIcons(prev => [...prev, techName]);
  };

  // Filter out technologies that are likely to have missing icons
  const filteredTechs = technologies.filter(tech => {
    const commonMissing = [
      'TensorFlow.js', 'MLflow', 'MQTT', 'SFML', 'ImGui', 
      'Geolocation API', 'IndexedDB', 'Service Workers'
    ];

    return !commonMissing.some(missing => 
      tech.toLowerCase().includes(missing.toLowerCase())
    );
  });

  return (
    <div>
      <IconDisplay 
        technologies={filteredTechs} 
        onIconError={handleIconError}
        {...props}
      />

      {missingIcons.length > 0 && (
        <div className="mt-2 text-xs text-slate-500">
          Note: Some icons may not display properly for: {missingIcons.join(', ')}
        </div>
      )}
    </div>
  );
};

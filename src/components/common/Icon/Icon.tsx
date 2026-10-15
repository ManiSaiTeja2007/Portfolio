// src/components/common/Icon/Icon.tsx
import { memo } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { getTechIconComponent } from './IconUtils';

const iconVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default: '',
        rounded: 'rounded-lg',
        square: 'rounded-none',
        circle: 'rounded-full',
      },
      size: {
        xs: 'w-4 h-4',
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
        xl: 'w-12 h-12',
      },
      color: {
        default: 'text-slate-700 dark:text-slate-300',
        primary: 'text-primary-600 dark:text-primary-400',
        secondary: 'text-secondary-600 dark:text-secondary-400',
        current: 'text-current',
        white: 'text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      color: 'default',
    },
  }
);

interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'current' | 'white';
  variant?: 'default' | 'rounded' | 'square' | 'circle';
  fallbackIcon?: string;
}

export const TechIcon = memo(({ 
  name, 
  size = 'md', 
  className = '', 
  color = 'default',
  variant = 'default',
}: IconProps) => {
  const IconComponent = getTechIconComponent(name);

  const iconSize = typeof size === 'number' ? size : 
    size === 'xs' ? 16 :
    size === 'sm' ? 20 :
    size === 'md' ? 24 :
    size === 'lg' ? 32 : 40;

  const sizeClass = typeof size === 'string' ? size : undefined;

  return (
    <div 
      className={cn(iconVariants({ variant, size: sizeClass, color, className }))}
      title={name}
    >
      <IconComponent 
        size={iconSize}
        className="shrink-0"
      />
    </div>
  );
});

TechIcon.displayName = 'TechIcon';

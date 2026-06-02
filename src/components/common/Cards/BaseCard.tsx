// src/components/common/Cards/BaseCard.tsx
import { forwardRef, type HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'bg-card rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md transition-all duration-300 overflow-hidden',
  {
    variants: {
      elevation: {
        none: 'shadow-none',
        low: 'shadow-sm',
        medium: 'shadow-md dark:hover:shadow-glow-primary/10 hover:border-primary-brand/35 dark:hover:border-primary-brand/35',
        high: 'shadow-lg dark:hover:shadow-glow-primary/20 hover:border-primary-brand/50 dark:hover:border-primary-brand/50',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hoverable: {
        true: 'hover:shadow-xl cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      elevation: 'medium',
      padding: 'md',
      hoverable: false,
    },
  }
);

interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 'none' | 'low' | 'medium' | 'high';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  animateOnHover?: boolean;
  children: React.ReactNode;
}

const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  ({ 
    className, 
    elevation, 
    padding, 
    hoverable, 
    animateOnHover = true,
    children, 
    ...props 
  }, ref) => {
    const cardContent = (
      <div
        ref={ref}
        className={cn(
          cardVariants({ elevation, padding, hoverable, className }),
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brand focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
        )}
        {...props}
      >
        {children}
      </div>
    );

    return animateOnHover && hoverable ? (
      <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
        {cardContent}
      </motion.div>
    ) : (
      cardContent
    );
  }
);

BaseCard.displayName = 'BaseCard';

export { BaseCard };

// src/components/common/Header/ThemeToggle.tsx
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-primary-brand dark:hover:text-blue-400 hover:border-primary-brand/35 dark:hover:border-primary-brand/35 transition-all duration-300 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-primary-brand/50"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {theme === 'light' ? (
            <Moon size={18} className="text-current" />
          ) : (
            <Sun size={18} className="text-current" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

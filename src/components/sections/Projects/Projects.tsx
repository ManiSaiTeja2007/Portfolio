// src/components/sections/Projects/Projects.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../../common/Cards/ProjectCard';
import { featuredProjects, getAllProjects, getTieredProjects } from '@/utils/projectsData';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, Layers, Cpu, Globe, BarChart2, ChevronUp } from 'lucide-react';

type ProjectTier = 'all' | 'complex' | 'ui' | 'hardware' | 'algorithms';

const TIER_CONFIG: { id: ProjectTier; label: string; icon: React.ReactNode; color: string }[] = [
  { id: 'all',        label: 'All Projects',     icon: <Layers size={14} />,    color: 'text-slate-600' },
  { id: 'complex',    label: 'Complex Systems',  icon: <Cpu size={14} />,       color: 'text-blue-500' },
  { id: 'ui',         label: 'Web & UI',         icon: <Globe size={14} />,     color: 'text-cyan-500' },
  { id: 'hardware',   label: 'Mobile & Edge AI', icon: <Cpu size={14} />,       color: 'text-emerald-500' },
  { id: 'algorithms', label: 'Data & Analytics', icon: <BarChart2 size={14} />, color: 'text-purple-500' },
];

export const Projects = () => {
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [activeTier, setActiveTier] = useState<ProjectTier>('all');

  const projectTiers = getTieredProjects();

  const getDisplayProjects = () => {
    if (activeTier !== 'all') return projectTiers[activeTier] || [];
    return showAllFeatured ? featuredProjects : featuredProjects.slice(0, 4);
  };

  const displayedProjects = getDisplayProjects();
  const totalCount = getAllProjects().length;

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full mb-5"
          >
            <Sparkles size={15} />
            <span className="text-sm font-medium">Strategic Project Portfolio</span>
          </motion.div>

          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
            Building Solutions That Matter
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Each project showcases a unique technical challenge — organized to demonstrate depth across systems, UI, edge AI, and data analytics.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {TIER_CONFIG.map((tier) => {
            const count = tier.id === 'all' ? featuredProjects.length : (projectTiers[tier.id]?.length || 0);
            const isActive = activeTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => {
                  setActiveTier(tier.id);
                  if (tier.id !== 'all') setShowAllFeatured(false);
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg shadow-primary-500/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                <span className={isActive ? 'text-white/80' : tier.color}>{tier.icon}</span>
                {tier.label}
                <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${isActive ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier + String(showAllFeatured)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mb-10"
          >
            {displayedProjects.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  No projects in this category yet
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  More coming soon — check back or view all projects
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {displayedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    <ProjectCard
                      project={project}
                      showDescription={true}
                      className="h-full"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {activeTier === 'all' && featuredProjects.length > 4 && (
            <button
              onClick={() => setShowAllFeatured(!showAllFeatured)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/20 transition-all duration-300"
            >
              {showAllFeatured ? (
                <><ChevronUp size={18} /> Show Less</>
              ) : (
                <><ChevronDown size={18} /> Show More</>
              )}
            </button>
          )}

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-500/30 text-primary-600 dark:text-primary-400 rounded-xl hover:border-primary-500 hover:bg-primary-500/5 transition-all duration-300 font-semibold"
          >
            View Full Portfolio
            <span className="text-xs px-2 py-0.5 bg-primary-500/10 rounded-lg font-mono">
              {totalCount}+ projects
            </span>
          </Link>
        </motion.div>

        {/* Status footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono"
        >
          <span>Projects demonstrating technical breadth and systems thinking</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Available for project discussions
          </span>
        </motion.div>

      </div>
    </section>
  );
};

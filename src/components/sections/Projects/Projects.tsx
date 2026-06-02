// src/components/sections/Projects/Projects.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../../common/Cards/ProjectCard';
import { featuredProjects, getAllProjects, getTieredProjects } from '@/utils/projectsData';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Sparkles } from 'lucide-react';

type ProjectTier = 'all' | 'complex' | 'ui' | 'hardware' | 'algorithms';

export const Projects = () => {
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [activeTier, setActiveTier] = useState<ProjectTier>('all');

  // Tier projects based on centralized filters
  const projectTiers = getTieredProjects();

  const displayedProjects = showAllFeatured 
    ? featuredProjects 
    : featuredProjects.slice(0, 4);

  const getTierProjects = () => {
    if (activeTier === 'all') return displayedProjects;
    return projectTiers[activeTier] || [];
  };

  return (
    <section id="projects" className="section-container bg-slate-50 dark:bg-slate-900/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header with Progress Indicator */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-brand/10 text-primary-brand rounded-full mb-6"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Strategic Project Portfolio</span>
          </motion.div>

          <h2 className="section-title">
            Building Solutions That Matter
          </h2>

          <p className="section-description max-w-3xl">
            Each project represents a unique challenge and learning opportunity. 
            They're organized to showcase different aspects of my technical and problem-solving abilities.
          </p>
        </div>

        {/* Project Tier Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Filter className="text-slate-500" size={20} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
              Filter by Focus Area:
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'all' as ProjectTier, label: 'All Projects', count: featuredProjects.length },
              { id: 'complex' as ProjectTier, label: 'Complex Systems', count: projectTiers.complex.length },
              { id: 'ui' as ProjectTier, label: 'Web Tooling & UI', count: projectTiers.ui.length },
              { id: 'hardware' as ProjectTier, label: 'Mobile & Edge AI', count: projectTiers.hardware.length },
              { id: 'algorithms' as ProjectTier, label: 'Data & Analytics', count: projectTiers.algorithms.length },
            ].map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeTier === tier.id
                    ? 'bg-primary-brand text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {tier.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeTier === tier.id
                    ? 'bg-white/20'
                    : 'bg-slate-200 dark:bg-slate-700'
                }`}>
                  {tier.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with Staggered Animation */}
        <div className="mb-12">
          {getTierProjects().length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                No projects in this category
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try selecting a different filter
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {getTierProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
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
        </div>

        {/* CTAs with Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {featuredProjects.length > 4 && (
            <button
              onClick={() => setShowAllFeatured(!showAllFeatured)}
              className="btn-primary inline-flex items-center gap-2"
            >
              {showAllFeatured ? (
                <>
                  <ChevronDown className="rotate-180" size={20} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  Show More Projects
                </>
              )}
            </button>
          )}

          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-brand/30 text-primary-brand rounded-xl hover:border-primary-brand hover:bg-primary-brand/5 transition-all duration-300 font-semibold"
          >
            View Full Portfolio
            <span className="text-sm px-2 py-1 bg-primary-brand/10 rounded">
              {getAllProjects().length}+ projects
            </span>
          </Link>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Projects showcasing technical depth</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for discussion
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

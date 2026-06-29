// src/components/sections/Skills/Skills.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcon } from '@/components/common/Icon/Icon';
import { getSkillsByCategory } from '@/utils/skillsData';
import { Layers, Code2, Cpu, Cloud, Database, Wrench, Smartphone, TestTube, BrainCircuit, Globe, Filter } from 'lucide-react';

const CATEGORY_CONFIG: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  frontend:     { label: 'Frontend',      icon: <Globe size={14} />,        color: 'text-cyan-500 border-cyan-500/30 bg-cyan-500/10' },
  backend:      { label: 'Backend',       icon: <Code2 size={14} />,        color: 'text-blue-500 border-blue-500/30 bg-blue-500/10' },
  languages:    { label: 'Languages',     icon: <Layers size={14} />,       color: 'text-violet-500 border-violet-500/30 bg-violet-500/10' },
  ai_ml:        { label: 'AI / ML',       icon: <BrainCircuit size={14} />, color: 'text-pink-500 border-pink-500/30 bg-pink-500/10' },
  database:     { label: 'Databases',     icon: <Database size={14} />,     color: 'text-amber-500 border-amber-500/30 bg-amber-500/10' },
  cloud_devops: { label: 'Cloud & DevOps',icon: <Cloud size={14} />,        color: 'text-sky-500 border-sky-500/30 bg-sky-500/10' },
  hardware_iot: { label: 'Hardware & IoT',icon: <Cpu size={14} />,          color: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10' },
  tools:        { label: 'Tools',         icon: <Wrench size={14} />,       color: 'text-orange-500 border-orange-500/30 bg-orange-500/10' },
  testing:      { label: 'Testing',       icon: <TestTube size={14} />,     color: 'text-red-500 border-red-500/30 bg-red-500/10' },
  mobile:       { label: 'Mobile',        icon: <Smartphone size={14} />,   color: 'text-teal-500 border-teal-500/30 bg-teal-500/10' },
};

const CATEGORY_ORDER = ['frontend','backend','languages','ai_ml','database','cloud_devops','hardware_iot','tools','testing','mobile'];

export const Skills = () => {
  const skillsByCategory = getSkillsByCategory();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const sortedCategories = Object.entries(skillsByCategory)
    .filter(([cat]) => CATEGORY_ORDER.includes(cat))
    .sort(([a], [b]) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b));

  const displayedCategories = activeCategory === 'all'
    ? sortedCategories
    : sortedCategories.filter(([cat]) => cat === activeCategory);

  const totalSkills = sortedCategories.reduce((acc, [, skills]) => acc + skills.length, 0);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            Technical Toolkit
          </span>
          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {totalSkills}+ technologies spanning hardware to cloud — combining ECE knowledge with modern software development.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Filter size={14} className="text-slate-400" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Filter by category</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {/* All button */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/20'
                  : 'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <Layers size={13} />
              All
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${activeCategory === 'all' ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                {totalSkills}
              </span>
            </button>

            {sortedCategories.map(([cat, skills]) => {
              const config = CATEGORY_CONFIG[cat];
              if (!config) return null;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    isActive
                      ? `${config.color} shadow-sm`
                      : 'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-400'
                  }`}
                >
                  {config.icon}
                  {config.label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-black/10 dark:bg-white/10' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    {skills.length}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Grid — Animated on category switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            {displayedCategories.map(([category, skills]) => {
              const config = CATEGORY_CONFIG[category];
              return (
                <div key={category} className="space-y-5">
                  {/* Category header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${config?.color || 'text-slate-500 border-slate-200 bg-slate-100'}`}>
                      {config?.icon || <Layers size={14} />}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                      {config?.label || category}
                    </h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                      {skills.length} skills
                    </span>
                  </div>

                  {/* Skill cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03, duration: 0.2 }}
                        whileHover={{ y: -4, scale: 1.03 }}
                        className="group"
                      >
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/60 dark:border-slate-800/60 hover:border-primary-500/30 dark:hover:border-primary-500/30 flex flex-col items-center gap-2.5 cursor-default h-full">
                          <div className="w-11 h-11 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-primary-950/30 transition-colors duration-300 group-hover:scale-110 transform">
                            <TechIcon
                              name={skill.name}
                              size={24}
                              color="primary"
                              variant="rounded"
                              fallbackIcon={skill.iconUrl}
                            />
                          </div>
                          <span className="text-xs font-medium text-center text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Currently Exploring strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="text-center">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-5">
              Currently Exploring
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Next.js 15', color: 'text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700' },
                { name: 'Three.js', color: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/40' },
                { name: 'Rust', color: 'text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800/40' },
                { name: 'Edge Computing', color: 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800/40' },
                { name: 'MLOps', color: 'text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/40' },
                { name: 'WebAssembly', color: 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/40' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border ${tech.color} transition-all duration-200 hover:scale-105`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

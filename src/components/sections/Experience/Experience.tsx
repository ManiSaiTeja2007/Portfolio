// src/components/sections/Experience/Experience.tsx
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Trophy, ChevronRight } from 'lucide-react';
import { experiencesData } from '@/utils/experienceData';

type IconKey = 'GraduationCap' | 'Trophy' | 'Briefcase' | 'Users';

const iconMap: Record<IconKey, { icon: React.ReactNode; bg: string; border: string }> = {
  GraduationCap: {
    icon: <GraduationCap size={20} />,
    bg: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40',
    border: 'border-blue-200 dark:border-blue-800/40',
  },
  Trophy: {
    icon: <Trophy size={20} />,
    bg: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40',
    border: 'border-amber-200 dark:border-amber-800/40',
  },
  Briefcase: {
    icon: <Briefcase size={20} />,
    bg: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40',
    border: 'border-purple-200 dark:border-purple-800/40',
  },
  Users: {
    icon: <Users size={20} />,
    bg: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40',
    border: 'border-emerald-200 dark:border-emerald-800/40',
  },
};

const typeBadgeStyles: Record<string, string> = {
  learning:    'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40',
  academic:    'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400 border border-green-200/60 dark:border-green-800/40',
  competitive: 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40',
  community:   'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border border-purple-200/60 dark:border-purple-800/40',
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            My Journey So Far
          </span>
          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
            Learning & Growth Path
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Building a strong foundation in hardware principles, full-stack systems architecture, and competitive algorithmic practice.
          </p>
        </motion.div>

        {/* Timeline — vertical single column with left line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent" />

          <div className="space-y-8">
            {experiencesData.map((exp, index) => {
              const iconData = iconMap[exp.iconName as IconKey] || iconMap.Briefcase;
              const badgeStyle = typeBadgeStyles[exp.type] || typeBadgeStyles.community;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot + icon */}
                  <div className={`absolute left-0 w-12 h-12 rounded-xl flex items-center justify-center border ${iconData.bg} ${iconData.border} shadow-sm z-10`}>
                    {iconData.icon}
                  </div>

                  {/* Card */}
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/60 hover:border-primary-500/30 dark:hover:border-primary-500/30 hover:shadow-md transition-all duration-300 group">

                    {/* Card header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold font-mono uppercase tracking-wider whitespace-nowrap">
                          {exp.period}
                        </span>
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeStyle}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description bullets */}
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          <ChevronRight size={14} className="text-primary-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Looking Ahead block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white mb-8 text-center">
            Looking Ahead
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                goal: 'Technical Internships',
                description: 'Apply ECE + full-stack knowledge in real-world production environments.',
                icon: '🎯',
                color: 'border-blue-200 dark:border-blue-800/40 hover:border-blue-400',
              },
              {
                goal: 'System Projects',
                description: 'Develop high-performance systems combining hardware-level logic with modern interfaces.',
                icon: '⚙️',
                color: 'border-purple-200 dark:border-purple-800/40 hover:border-purple-400',
              },
              {
                goal: 'Open-Source Leadership',
                description: 'Contribute core features and reusable libraries to popular developer packages.',
                icon: '🌟',
                color: 'border-amber-200 dark:border-amber-800/40 hover:border-amber-400',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border transition-all duration-300 hover:shadow-md ${item.color}`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.goal}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

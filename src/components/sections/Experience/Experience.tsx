// src/components/sections/Experience/Experience.tsx
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Trophy } from 'lucide-react';
import { experiencesData } from '@/utils/experienceData';

const iconMap = {
  GraduationCap: <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />,
  Trophy: <Trophy className="text-yellow-600 dark:text-yellow-400" size={24} />,
  Briefcase: <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />,
  Users: <Users className="text-green-600 dark:text-green-400" size={24} />,
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-brand/10 text-primary-brand rounded-full text-sm font-medium mb-4">
            My Journey So Far
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Learning & Growth Path
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Building a strong foundation in hardware principles, full-stack systems architecture, and competitive algorithmic metrics.
          </p>
        </motion.div>

        {/* Timeline body */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-brand via-secondary-brand to-transparent" />

          <div className="space-y-12">
            {experiencesData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-brand rounded-full border-4 border-white dark:border-slate-900 z-10 animate-pulse" />

                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-brand/35 dark:hover:border-primary-brand/35 transition-all duration-300">
                    
                    <div className="flex items-center gap-4 mb-4">
                      {index % 2 === 0 ? (
                        <>
                          <div className="flex-1 text-right">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                              {exp.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {exp.organization}
                            </p>
                          </div>
                          <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl flex-shrink-0">
                            {iconMap[exp.iconName]}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl flex-shrink-0">
                            {iconMap[exp.iconName]}
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                              {exp.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {exp.organization}
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    <span className="inline-block px-3 py-1 bg-primary-brand/10 text-primary-brand rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                      {exp.period}
                    </span>

                    <ul className={`space-y-2 text-sm text-slate-700 dark:text-slate-350 leading-relaxed ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Badge type tag */}
                    <div className="mt-4 flex justify-end">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        exp.type === 'learning' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-900/10' :
                        exp.type === 'academic' ? 'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400 border border-green-900/10' :
                        exp.type === 'competitive' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-400 border border-yellow-900/10' :
                        'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border border-purple-900/10'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Looking Ahead block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 text-center animate-fade-in"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Looking Ahead
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                goal: 'Technical Internships',
                description: 'Apply full-stack ECE knowledge in real-world environments.'
              },
              {
                goal: 'System Projects',
                description: 'Develop high-performance systems combining registers and user interfaces.'
              },
              {
                goal: 'Open-Source Leadership',
                description: 'Contribute core features and libraries to developer packages.'
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-850 shadow-sm hover:border-primary-brand/35 hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.goal}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

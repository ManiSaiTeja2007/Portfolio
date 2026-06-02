// src/components/sections/About/About.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, BookOpen, Target, Award, LineChart } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_INFO, AVAILABILITY, FOCUS_AREAS } from '@/utils/constants';
import { principlesData } from '@/utils/principlesData';

type TabType = 'analyst' | 'systems' | 'edge';

export const About = () => {
  const [activeTab, setActiveTab] = useState<TabType>('analyst');

  const tabsConfig = [
    {
      id: 'analyst' as TabType,
      label: '[The Data Analyst]',
      icon: <LineChart className="w-4 h-4" />,
      color: 'border-blue-500 text-blue-500',
    },
    {
      id: 'systems' as TabType,
      label: '[The Systems Engineer]',
      icon: <Cpu className="w-4 h-4" />,
      color: 'border-teal-500 text-teal-500',
    },
    {
      id: 'edge' as TabType,
      label: '[The Edge AI Developer]',
      icon: <Code2 className="w-4 h-4" />,
      color: 'border-purple-500 text-purple-500',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Systems-Level Data Analyst
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            Analyzing telemetry data and physical orbital coordinates at the systems level, and designing high-performance proxies at the software level.
          </p>
        </div>

        {/* Narrative & Tabbed UI Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Story Narrative (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Target className="text-primary-brand" size={24} />
              My Philosophy
            </h3>
            
            <div className="space-y-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <p>
                I'm <strong>{PERSONAL_INFO.name}</strong>, a B.Tech student majoring in <strong>{ACADEMIC_INFO.degree}</strong> at <strong>{PERSONAL_INFO.college}</strong>.
              </p>
              <p>
                My ECE engineering background provides a unique **systems perspective**. I understand that every variable tracked in telemetry, and every packet routed through a gateway, is bound by physical registers, clock cycles, and logic gates on actual microchips.
              </p>
              <p>
                This awareness guides how I perform data analysis and systems design—ensuring pipelines are mathematically rigorous, lightweight, and optimized for speed and footprint.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Panel Container (7 columns) */}
          <div className="lg:col-span-7 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md min-h-[420px] flex flex-col">
            
            {/* Tab selection buttons */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 pb-4 mb-6 gap-2 overflow-x-auto">
              {tabsConfig.map((tab) => (
                <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-sm font-semibold transition-all duration-300 ${
                     activeTab === tab.id
                       ? 'bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white border-b-2 border-primary-brand shadow-sm'
                       : 'text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                   }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab content panels */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                {activeTab === 'analyst' && (
                  <motion.div
                    key="analyst"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Data Analytics & Simulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Modeling circular orbits, propagating Keplerian paths, and forecasting customer telemetry</p>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-150 dark:border-slate-800/80">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Current CGPA Score:</span>
                        <span className="text-base font-bold text-primary-brand dark:text-blue-400 font-mono">{ACADEMIC_INFO.gpa}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Relevant Analytical Coursework</h5>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {ACADEMIC_INFO.relevantCourses.map((course, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'systems' && (
                  <motion.div
                    key="systems"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Go Systems & Networks</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Designing reverse proxies with EWMA scoring, UDP file transfers, and Memberlist Gossip cluster states</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-150 dark:border-slate-800/80 flex flex-col justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase">Availability Status</span>
                        <span className="text-sm font-bold text-emerald-500 mt-1 flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          Seeking Internships
                        </span>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-150 dark:border-slate-800/80 flex flex-col justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase">Target Timeline</span>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{AVAILABILITY.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">High-Performance Focus Areas</h5>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {FOCUS_AREAS.slice(1, 4).map((focus, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'edge' && (
                  <motion.div
                    key="edge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Edge AI & Mobile (Kotlin)</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Executing local on-device ML OCR zoning classifiers to audit package food contents</p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Engineering Methodologies</h5>
                      {[
                        'Automated Project State Package (PSP) auditing frameworks',
                        'Local-first offline thread-based dictionary matching search systems',
                        'Google ML Kit CameraX pipeline integrations'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                          <BookOpen size={16} className="text-purple-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <a
                        href="#skills"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-brand hover:underline"
                      >
                        <span>View Technical Skills Grid</span>
                        <Award size={14} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Centralized Development Principles Grid */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800/80">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              My Engineering Principles
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Six developer values that guide how I build and scale technology systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principlesData.map((principle, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl p-6 border border-slate-150 dark:border-slate-800/80 hover:border-primary-brand/35 dark:hover:border-primary-brand/35 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{principle.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{principle.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

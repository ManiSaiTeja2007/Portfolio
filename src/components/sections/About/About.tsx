// src/components/sections/About/About.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, BookOpen, Target, Award, LineChart } from "lucide-react";
import {
  PERSONAL_INFO,
  ACADEMIC_INFO,
  AVAILABILITY,
  FOCUS_AREAS,
} from "@/utils/constants";
import { principlesData } from "@/utils/principlesData";

type TabType = "analyst" | "systems" | "edge";

export const About = () => {
  const [activeTab, setActiveTab] = useState<TabType>("analyst");

  const tabsConfig = [
    {
      id: "analyst" as TabType,
      label: "[The Data Analyst]",
      shortLabel: "[Analyst]",
      icon: <LineChart className="w-4 h-4 flex-shrink-0" />,
    },
    {
      id: "systems" as TabType,
      label: "[The Systems Engineer]",
      shortLabel: "[Systems]",
      icon: <Cpu className="w-4 h-4 flex-shrink-0" />,
    },
    {
      id: "edge" as TabType,
      label: "[The Edge AI Dev]",
      shortLabel: "[Edge AI]",
      icon: <Code2 className="w-4 h-4 flex-shrink-0" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-slate-900 dark:text-white leading-tight">
            Systems-Level Data Analyst
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            Analyzing telemetry data and physical orbital coordinates at the
            systems level, and designing high-performance proxies at the
            software level.
          </p>
        </div>

        {/* ── Two-Column Grid ── */}
        {/*  Single column on mobile/tablet, 12-col on xl  */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 xl:gap-12 items-start">
          {/* ── LEFT: My Philosophy ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              xl:col-span-5
              bg-slate-50/50 dark:bg-slate-950/30
              border border-slate-200/60 dark:border-slate-800/80
              rounded-3xl p-5 sm:p-6 md:p-8
              shadow-xl backdrop-blur-md
              min-w-0
            "
          >
            {/* Card header */}
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 mb-5 md:mb-6">
              <div className="p-2 bg-primary-500/10 rounded-xl text-primary-600 dark:text-primary-400 flex-shrink-0">
                <Target size={20} />
              </div>
              <h3 className="text-sm md:text-base font-mono font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
                My Philosophy
              </h3>
            </div>

            {/* Body text */}
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <p>
                I'm{" "}
                <strong className="text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </strong>
                , a B.Tech student majoring in{" "}
                <strong className="text-slate-900 dark:text-white">
                  {ACADEMIC_INFO.degree}
                </strong>{" "}
                at{" "}
                <strong className="text-primary-600 dark:text-primary-400">
                  {PERSONAL_INFO.college}
                </strong>
                .
              </p>
              <p>
                My ECE engineering background provides a unique{" "}
                <strong className="text-slate-900 dark:text-white">
                  systems perspective
                </strong>
                . I understand that every variable tracked in telemetry, and
                every packet routed through a gateway, is bound by physical
                registers, clock cycles, and logic gates on actual microchips.
              </p>
              <p>
                This awareness guides how I perform data analysis and systems
                design — ensuring pipelines are mathematically rigorous,
                lightweight, and optimized for speed and footprint.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Tabbed Panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="
              xl:col-span-7
              bg-slate-50/50 dark:bg-slate-950/30
              border border-slate-200/60 dark:border-slate-800/80
              rounded-3xl p-5 sm:p-6 md:p-8
              shadow-xl backdrop-blur-md
              flex flex-col min-w-0
            "
          >
            {/* ── Tab navigation ── */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 mb-5 md:mb-6">
              {tabsConfig.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  className={`
                    relative flex items-center justify-center gap-1.5
                    flex-1 min-w-0
                    px-2 sm:px-3 py-2.5
                    font-mono text-xs sm:text-sm font-semibold
                    transition-all duration-200 rounded-t-lg
                    ${
                      activeTab === tab.id
                        ? "text-primary-600 dark:text-primary-400 bg-white dark:bg-slate-900"
                        : "text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/40"
                    }
                  `}
                >
                  {tab.icon}
                  {/* Full label on md+, short label on smaller screens */}
                  <span className="hidden md:inline truncate">{tab.label}</span>
                  <span className="md:hidden truncate">{tab.shortLabel}</span>

                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* ── Tab content ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {/* Analyst tab */}
                {activeTab === "analyst" && (
                  <motion.div
                    key="analyst"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                  >
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                        Data Analytics & Simulation
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Modeling circular orbits, propagating Keplerian paths,
                        and forecasting customer telemetry
                      </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/80">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                          Current CGPA Score:
                        </span>
                        <span className="text-base font-bold text-primary-brand dark:text-blue-400 font-mono flex-shrink-0">
                          {ACADEMIC_INFO.gpa}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Relevant Analytical Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {ACADEMIC_INFO.relevantCourses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1.5 bg-white dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Systems tab */}
                {activeTab === "systems" && (
                  <motion.div
                    key="systems"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                  >
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                        Go Systems & Networks
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Designing reverse proxies with EWMA scoring, UDP file
                        transfers, and Memberlist Gossip cluster states
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 md:p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/80 flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-slate-400 uppercase">
                          Availability Status
                        </span>
                        <span className="text-xs md:text-sm font-bold text-emerald-500 flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
                          Seeking Internships
                        </span>
                      </div>

                      <div className="p-3 md:p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/80 flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-slate-400 uppercase">
                          Target Timeline
                        </span>
                        <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">
                          {AVAILABILITY.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        High-Performance Focus Areas
                      </h5>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {FOCUS_AREAS.slice(1, 4).map((focus, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1.5 bg-white dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Edge AI tab */}
                {activeTab === "edge" && (
                  <motion.div
                    key="edge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                  >
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                        Edge AI & Mobile (Kotlin)
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Executing local on-device ML OCR zoning classifiers to
                        audit package food contents
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Engineering Methodologies
                      </h5>
                      {[
                        "Automated Project State Package (PSP) auditing frameworks",
                        "Local-first offline thread-based dictionary matching search systems",
                        "Google ML Kit CameraX pipeline integrations",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm"
                        >
                          <BookOpen
                            size={16}
                            className="text-purple-500 flex-shrink-0 mt-0.5"
                          />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-1">
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
          </motion.div>
        </div>

        {/* ── Engineering Principles Grid ── */}
        <div className="mt-16 md:mt-24 pt-10 md:pt-12 border-t border-slate-200 dark:border-slate-800/80">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              My Engineering Principles
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Six developer values that guide how I build and scale technology
              systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {principlesData.map((principle, idx) => (
              <div
                key={idx}
                className="
                  bg-slate-50/50 dark:bg-slate-900/30
                  rounded-2xl p-5 md:p-6
                  border border-slate-200 dark:border-slate-800/80
                  hover:border-primary-brand/35 dark:hover:border-primary-brand/35
                  hover:shadow-lg transition-all duration-300
                  min-w-0
                "
              >
                <div className="text-3xl mb-3">{principle.icon}</div>
                <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {principle.title}
                </h4>
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

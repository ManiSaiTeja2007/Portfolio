// src/components/sections/FunFact/FunFact.tsx
import { motion } from 'framer-motion';
import { Zap, Terminal, Cpu } from 'lucide-react';
import { FUN_FACTS } from '@/utils/constants';

export const FunFact = () => {
  return (
    <section id="fun-fact" className="section-container relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-12 relative z-10"
      >
        <span className="text-slate-900 dark:text-white font-poppins">Telemetry & </span>
        <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 bg-clip-text text-transparent">Fun Facts</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Terminal/Telemetry Window Container */}
        <div className="glass-effect rounded-2xl border border-slate-200/50 dark:border-slate-800/80 overflow-hidden shadow-2xl">
          {/* Window Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-100/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2 flex items-center gap-1.5">
                <Terminal size={12} className="text-primary-500" />
                SYSTEM_LOG_READER.EXE
              </span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-slate-200/50 dark:bg-slate-900/60 px-2 py-0.5 rounded border border-slate-300/30 dark:border-slate-800">
              BAUD: 115200
            </div>
          </div>

          {/* Window Content */}
          <div className="p-8 md:p-12 relative flex flex-col md:flex-row gap-8 items-center md:items-stretch">
            {/* Left side: Accent Badge */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-xl border border-slate-200/30 dark:border-slate-800/30 w-32 shrink-0 self-center">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md animate-pulse"></div>
                <div className="relative p-4 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 text-primary-500 dark:text-primary-400 rounded-full border border-primary-500/20">
                  <Zap size={32} className="animate-pulse" />
                </div>
              </div>
              <span className="text-[11px] font-mono text-primary-600 dark:text-primary-400 font-bold uppercase tracking-widest flex items-center gap-1">
                <Cpu size={10} /> Active State
              </span>
            </div>

            {/* Right side: Fact & Description */}
            <div className="flex-1 space-y-6">
              <blockquote className="text-lg md:text-xl font-poppins font-medium italic text-slate-800 dark:text-slate-200 leading-relaxed border-l-4 border-primary-500 pl-4 py-1">
                "{FUN_FACTS.quote}"
              </blockquote>

              <div className="text-slate-600 dark:text-slate-400 space-y-4 font-inter text-sm md:text-base leading-relaxed">
                {FUN_FACTS.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

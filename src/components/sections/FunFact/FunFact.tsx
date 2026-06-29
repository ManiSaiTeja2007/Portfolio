// src/components/sections/FunFact/FunFact.tsx
import { motion } from 'framer-motion';
import { Zap, Terminal, Cpu, Wifi, Activity } from 'lucide-react';
import { FUN_FACTS } from '@/utils/constants';

const terminalLines = [
  { prompt: '$', text: 'whoami', color: 'text-slate-300' },
  { prompt: '>', text: 'mani_sai_teja_bejjala :: ECE_Engineer + Software_Dev', color: 'text-emerald-400' },
  { prompt: '$', text: 'cat /etc/interests', color: 'text-slate-300' },
  { prompt: '>', text: '[IoT, Orbital_Physics, Systems_Design, Open_Source, Edge_AI]', color: 'text-cyan-400' },
  { prompt: '$', text: 'systemctl status curiosity.service', color: 'text-slate-300' },
  { prompt: '●', text: 'curiosity.service - Active (running) for 20 years, 3 months', color: 'text-emerald-400' },
];

export const FunFact = () => {
  return (
    <section id="fun-fact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-primary-500/8 dark:bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/8 dark:bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            Behind the Code
          </span>
          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Telemetry &{' '}
            <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 bg-clip-text text-transparent">
              Fun Facts
            </span>
          </h2>
        </motion.div>

        {/* Main terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-200/60 dark:border-slate-800/60"
        >
          {/* Window titlebar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal size={12} className="text-primary-400" />
                SYSTEM_LOG_READER.exe — bash — 80×24
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <Wifi size={10} />
                SSH_ACTIVE
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Activity size={10} />
                BAUD: 115200
              </span>
            </div>
          </div>

          {/* Two-panel terminal body */}
          <div className="bg-slate-950 p-6 md:p-8 grid md:grid-cols-2 gap-8 items-stretch">

            {/* Left: Fake terminal output */}
            <div className="space-y-2 font-mono text-sm">
              {terminalLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx + 0.2 }}
                  className="flex gap-2"
                >
                  <span className={`flex-shrink-0 ${idx % 2 === 0 ? 'text-primary-400' : 'text-slate-600'}`}>
                    {line.prompt}
                  </span>
                  <span className={line.color}>{line.text}</span>
                </motion.div>
              ))}
              <div className="flex gap-2 mt-2">
                <span className="text-primary-400">$</span>
                <span className="text-slate-300 animate-pulse">█</span>
              </div>
            </div>

            {/* Right: Quote + paragraphs */}
            <div className="flex flex-col justify-center space-y-5 border-l border-slate-800 pl-8">
              {/* Status badge */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md animate-pulse" />
                  <div className="relative p-2.5 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-primary-400 rounded-full border border-primary-500/20">
                    <Zap size={20} className="animate-pulse" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Status</p>
                  <p className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <Cpu size={10} />
                    Active · Curious · Building
                  </p>
                </div>
              </div>

              <blockquote className="text-base font-medium italic text-slate-300 leading-relaxed border-l-2 border-primary-500 pl-4">
                "{FUN_FACTS.quote}"
              </blockquote>

              <div className="space-y-3 text-sm text-slate-400 leading-relaxed">
                {FUN_FACTS.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

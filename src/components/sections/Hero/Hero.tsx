// src/components/sections/Hero/Hero.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cpu,
  Zap,
  GraduationCap,
  MapPin,
  Terminal,
  ArrowUpRight
} from "lucide-react";
import { PERSONAL_INFO, ACADEMIC_INFO } from "@/utils/constants";

export const Hero = () => {
  // Interactive PCB Logic Gate Simulator State
  const [gateA, setGateA] = useState<number>(0);
  const [gateB, setGateB] = useState<number>(1);
  const outAnd = gateA & gateB;
  const outOr = gateA | gateB;
  const outXor = gateA ^ gateB;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-10 dark:opacity-20 pointer-events-none z-0" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Technical Pitch & CTAs (7 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <span className="flex items-center gap-1">
                <Cpu className="w-4 h-4 text-primary-brand" />
                <Code2 className="w-4 h-4 text-secondary-brand" />
                <Zap className="w-4 h-4 text-amber-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Hardware-Informed Software
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
              <span className="block text-slate-800 dark:text-slate-400 text-2xl font-medium mb-2">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-brand via-purple-500 to-secondary-brand dark:from-indigo-400 dark:via-purple-400 dark:to-teal-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Title / College Subheading */}
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">
              {PERSONAL_INFO.title} at <span className="text-primary-brand font-bold">IIIT Sri City</span>
            </p>

            {/* Quick Metadata list */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                <GraduationCap size={16} className="text-primary-brand" />
                <span>{ACADEMIC_INFO.year}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                <MapPin size={16} className="text-emerald-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                <Terminal size={16} className="text-purple-500" />
                <span>CGPA: {ACADEMIC_INFO.gpa}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-sans">
              Building bridges between **hardware intelligence** and **software elegance**. 
              My background in Electronics Engineering fuels a systems-level mindset, allowing me to build 
              web applications optimized for performance, efficiency, and scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-primary-brand to-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-primary-brand/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl font-semibold hover:border-primary-brand hover:text-primary-brand dark:hover:text-primary-brand hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Interactive PCB / Logic Gate Simulator Dashboard (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-slate-900/90 dark:bg-slate-950/70 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Board Header decoration */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">SYS_LOGIC_SIM: active</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
              </div>

              {/* Schematic / Logic diagram */}
              <div className="space-y-6 relative z-10">
                <p className="text-xs font-mono text-slate-500 text-center">
                  -- CLICK PADS A & B TO EMULATE SILICON GATE TRANSLATIONS --
                </p>

                {/* Input Toggle Pads */}
                <div className="flex justify-around items-center gap-4 bg-slate-900/50 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <div className="text-center space-y-2">
                    <span className="block text-xs font-mono text-slate-500">INPUT A</span>
                    <button
                      onClick={() => setGateA(prev => prev === 0 ? 1 : 0)}
                      className={`w-14 h-14 rounded-full font-mono font-bold flex items-center justify-center border-2 transition-all duration-300 ${
                        gateA === 1 
                          ? 'bg-primary-brand border-primary-brand text-white shadow-glow-primary' 
                          : 'bg-slate-950 border-slate-800 text-slate-500'
                      }`}
                    >
                      {gateA}
                    </button>
                  </div>

                  <div className="text-center space-y-2">
                    <span className="block text-xs font-mono text-slate-500">INPUT B</span>
                    <button
                      onClick={() => setGateB(prev => prev === 0 ? 1 : 0)}
                      className={`w-14 h-14 rounded-full font-mono font-bold flex items-center justify-center border-2 transition-all duration-300 ${
                        gateB === 1 
                          ? 'bg-secondary-brand border-secondary-brand text-white shadow-glow-secondary' 
                          : 'bg-slate-950 border-slate-800 text-slate-500'
                      }`}
                    >
                      {gateB}
                    </button>
                  </div>
                </div>

                {/* Simulation Output Lines */}
                <div className="space-y-4">
                  
                  {/* AND Gate row */}
                  <div className="flex items-center justify-between p-3.5 bg-slate-900/40 dark:bg-slate-900/20 border border-slate-800/60 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-primary-brand" />
                      <span className="text-sm font-mono text-slate-300">AND GATE [A & B]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-500">STATE:</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono ${outAnd === 1 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-950 text-slate-500 border border-slate-900'}`}>
                        {outAnd === 1 ? 'HIGH (1)' : 'LOW (0)'}
                      </span>
                    </div>
                  </div>

                  {/* OR Gate row */}
                  <div className="flex items-center justify-between p-3.5 bg-slate-900/40 dark:bg-slate-900/20 border border-slate-800/60 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-secondary-brand" />
                      <span className="text-sm font-mono text-slate-300">OR GATE [A | B]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-500">STATE:</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono ${outOr === 1 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-950 text-slate-500 border border-slate-900'}`}>
                        {outOr === 1 ? 'HIGH (1)' : 'LOW (0)'}
                      </span>
                    </div>
                  </div>

                  {/* XOR Gate row */}
                  <div className="flex items-center justify-between p-3.5 bg-slate-900/40 dark:bg-slate-900/20 border border-slate-800/60 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-purple-500" />
                      <span className="text-sm font-mono text-slate-300">XOR GATE [A ^ B]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-500">STATE:</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono ${outXor === 1 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-950 text-slate-500 border border-slate-900'}`}>
                        {outXor === 1 ? 'HIGH (1)' : 'LOW (0)'}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Graphical representation overlay (circuit tracks) */}
              <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
                <svg className="w-full h-full text-slate-400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50,150 L 150,150 L 200,200 L 350,200" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M 50,250 L 150,250 L 200,200" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="200" cy="200" r="4" fill="currentColor" />
                </svg>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

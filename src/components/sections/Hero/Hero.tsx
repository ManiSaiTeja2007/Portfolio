// src/components/sections/Hero/Hero.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cpu,
  Zap,
  GraduationCap,
  MapPin,
  Terminal,
  ArrowUpRight,
  GitBranch,
  Wifi,
  Circle,
} from "lucide-react";
import { PERSONAL_INFO, ACADEMIC_INFO } from "@/utils/constants";

const TYPING_TEXTS = [
  "Data Analyst & Systems Engineer",
  "ECE Student @ IIIT Sri City",
  "Full-Stack Developer",
  "Edge AI Enthusiast",
];

const useTypingEffect = (texts: string[], speed = 60, pause = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
    }
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  useEffect(() => {
    setDisplayed(texts[textIdx].slice(0, charIdx));
  }, [charIdx, textIdx, texts]);

  return displayed;
};

export const Hero = () => {
  const [gateA, setGateA] = useState<number>(1);
  const [gateB, setGateB] = useState<number>(0);
  const [time, setTime] = useState(new Date());
  const typedText = useTypingEffect(TYPING_TEXTS);

  const outAnd = gateA & gateB;
  const outOr = gateA | gateB;
  const outXor = gateA ^ gateB;
  const outNand = outAnd === 1 ? 0 : 1;

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const techPills = [
    { label: "React", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" },
    { label: "TypeScript", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
    { label: "Go", color: "text-teal-400 bg-teal-500/10 border-teal-500/30" },
    { label: "Python", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30" },
    { label: "Kotlin", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" },
    { label: "VHDL", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
  ];

  const gateResults = [
    { name: "AND", expr: "A & B", result: outAnd, color: "text-indigo-400" },
    { name: "OR",  expr: "A | B", result: outOr,  color: "text-teal-400" },
    { name: "XOR", expr: "A ^ B", result: outXor, color: "text-purple-400" },
    { name: "NAND", expr: "!(A&B)", result: outNand, color: "text-rose-400" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary-500/8 dark:bg-primary-500/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-secondary-500/8 dark:bg-secondary-500/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-3/4 left-1/3 w-[300px] h-[300px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-center">

          {/* ── LEFT SIDE: Identity & CTAs ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-7"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 shadow-sm"
            >
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-primary-500" />
                <Code2 className="w-3.5 h-3.5 text-secondary-500" />
                <Zap className="w-3.5 h-3.5 text-amber-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Hardware-Informed Software
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                LIVE
              </span>
            </motion.div>

            {/* Name headline */}
            <div className="space-y-2">
              <span className="block text-slate-500 dark:text-slate-400 text-base font-medium tracking-wide">
                Hello, I'm
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-poppins font-extrabold tracking-tight leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-500 to-secondary-500 dark:from-indigo-400 dark:via-purple-400 dark:to-teal-400">
                  {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
                </span>
              </h1>
            </div>

            {/* Typing subtitle */}
            <div className="flex items-center gap-2 h-8">
              <Terminal className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span className="text-lg text-slate-700 dark:text-slate-300 font-mono font-medium">
                {typedText}
                <span className="ml-0.5 animate-pulse text-primary-500">|</span>
              </span>
            </div>

            {/* Metadata chips */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/60 text-sm text-slate-600 dark:text-slate-400">
                <GraduationCap size={14} className="text-primary-500" />
                <span>{ACADEMIC_INFO.year}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/60 text-sm text-slate-600 dark:text-slate-400">
                <MapPin size={14} className="text-emerald-500" />
                <span>IIIT Sri City</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/60 text-sm text-slate-600 dark:text-slate-400">
                <GitBranch size={14} className="text-purple-500" />
                <span>CGPA: {ACADEMIC_INFO.gpa.split("/")[0]}/10</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Building bridges between <strong className="text-slate-800 dark:text-slate-200">hardware intelligence</strong> and{" "}
              <strong className="text-slate-800 dark:text-slate-200">software elegance</strong>. My ECE background fuels a
              systems-level mindset — optimizing for performance, efficiency, and scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl font-semibold hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Tech pills strip */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techPills.map((pill) => (
                <span
                  key={pill.label}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${pill.color} transition-transform hover:scale-105`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT SIDE: Interactive Circuit Dashboard ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="relative bg-slate-950 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl shadow-slate-950/50">
              
              {/* ── Terminal / Dashboard Header bar ── */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/80 border-b border-slate-800/80 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/90" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
                    <span className="w-3 h-3 rounded-full bg-green-500/90" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 ml-2 flex items-center gap-1.5">
                    <Terminal size={11} className="text-primary-400" />
                    SYS_LOGIC_SIM v2.4 — GATE_EMULATOR
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Wifi size={10} />
                    CONNECTED
                  </span>
                  <span className="text-slate-500">
                    {time.toLocaleTimeString("en-US", { hour12: false })}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4">

                {/* ── Top mini-console ── */}
                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/60 font-mono text-[11px] space-y-1.5">
                  <p className="text-slate-600">$ system_init --module=gate_emulator</p>
                  <p className="text-emerald-400">✔ ECE_MODULE loaded successfully</p>
                  <p className="text-slate-500">
                    <span className="text-primary-400">INPUTS →</span>{" "}
                    A=<span className={gateA ? "text-emerald-400" : "text-slate-600"}>{gateA}</span>,{" "}
                    B=<span className={gateB ? "text-emerald-400" : "text-slate-600"}>{gateB}</span>
                  </p>
                  <p className="text-slate-500">
                    <span className="text-purple-400">OUTPUTS →</span>{" "}
                    AND={outAnd}, OR={outOr}, XOR={outXor}, NAND={outNand}
                  </p>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="text-slate-600">$</span>
                    <span className="text-slate-300 animate-pulse">█</span>
                  </div>
                </div>

                {/* ── Input toggles ── */}
                <div className="flex gap-3">
                  {[
                    { label: "INPUT A", val: gateA, set: setGateA, color: "from-indigo-500 to-blue-500" },
                    { label: "INPUT B", val: gateB, set: setGateB, color: "from-teal-500 to-emerald-500" },
                  ].map(({ label, val, set, color }) => (
                    <button
                      key={label}
                      onClick={() => set((v) => (v === 0 ? 1 : 0))}
                      className="flex-1 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                    >
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        {label}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold font-mono transition-all duration-300 border-2 ${
                          val === 1
                            ? `bg-gradient-to-br ${color} text-white border-transparent shadow-lg`
                            : "bg-slate-950 text-slate-600 border-slate-800"
                        }`}
                      >
                        {val}
                      </div>
                      <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${val === 1 ? "text-emerald-400" : "text-slate-600"}`}>
                        {val === 1 ? "HIGH" : "LOW"}
                      </span>
                    </button>
                  ))}
                </div>

                {/* ── Gate output rows ── */}
                <div className="grid grid-cols-2 gap-2">
                  {gateResults.map(({ name, expr, result, color }) => (
                    <div
                      key={name}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${
                        result === 1
                          ? "bg-emerald-500/5 border-emerald-500/20"
                          : "bg-slate-900/40 border-slate-800/60"
                      }`}
                    >
                      <div>
                        <p className={`text-xs font-mono font-bold ${color}`}>{name}</p>
                        <p className="text-[10px] text-slate-600 font-mono">{expr}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Circle
                          size={8}
                          className={result === 1 ? "fill-emerald-400 text-emerald-400" : "fill-slate-700 text-slate-700"}
                        />
                        <span className={`text-[10px] font-mono font-bold ${result === 1 ? "text-emerald-400" : "text-slate-600"}`}>
                          {result === 1 ? "1" : "0"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── System status bar ── */}
                <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-slate-600 border-t border-slate-800/60">
                  <span>BAUD_RATE: 115200</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    TELEMETRY_ACTIVE
                  </span>
                  <span>V_CC: 3.3V</span>
                </div>

              </div>
            </div>

            {/* Floating decorative badge below panel */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-full border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="text-amber-400">⚡</span>
                Click INPUT A / B to toggle gate states
                <span className="text-amber-400">⚡</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

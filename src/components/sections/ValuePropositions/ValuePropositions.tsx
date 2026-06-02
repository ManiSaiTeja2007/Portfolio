// src/components/sections/ValuePropositions/ValuePropositions.tsx
import { motion } from 'framer-motion';
import { Cpu, Layers, TrendingUp, ArrowRight } from 'lucide-react';
import { VALUE_PROPS_BENEFITS } from '@/utils/constants';

export const ValuePropositions = () => {
  const cards = [
    {
      icon: <Cpu className="text-white" size={24} />,
      title: "Hardware Understanding → Better Software",
      description: "My ECE engineering background provides unique systems-level insights. I understand performance constraints from silicon to interface, enabling me to build web apps that are optimally resource-aware.",
      color: "from-blue-600 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: "Full-Stack Mindset → End-to-End Systems",
      description: "I approach technical challenges holistically. From sensor data acquisition on ESP32 to state interfaces in React, I architect cohesive end-to-end architectures rather than isolated silos.",
      color: "from-purple-600 to-pink-500",
      delay: 0.2,
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: "Continuous Learning → Scalable Frameworks",
      description: "Silicon and software evolve rapidly. I maintain a disciplined study routine, exploring edge computing, microservices, and design patterns to build modern, future-proof products.",
      color: "from-green-600 to-emerald-500",
      delay: 0.3,
    },
  ];

  return (
    <section id="value-propositions" className="py-24 bg-slate-50 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4 inline-block">
            Systems Value
          </span>
          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
            Where Silicon Meets Interface
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My engineering perspective combines hardware constraints with software aesthetics to deliver exceptional technical depth.
          </p>
        </motion.div>

        {/* 3 Columns of Integrated Circuit (IC) Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              
              {/* Solder Pins Decoration (representing IC Pins) */}
              <div className="absolute top-1/4 -left-[6px] bottom-1/4 w-[6px] flex flex-col justify-between py-2 pointer-events-none z-10">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2.5 h-1.5 bg-slate-400 dark:bg-slate-700 rounded-r shadow-sm border-r border-slate-350 dark:border-slate-800" />
                ))}
              </div>
              <div className="absolute top-1/4 -right-[6px] bottom-1/4 w-[6px] flex flex-col justify-between py-2 pointer-events-none z-10">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2.5 h-1.5 bg-slate-400 dark:bg-slate-700 rounded-l shadow-sm border-l border-slate-350 dark:border-slate-800" />
                ))}
              </div>

              {/* Central Card Body styled as a clean microchip package */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl hover:border-primary-brand/35 transition-all duration-300 border border-slate-200/80 dark:border-slate-800/80 relative">
                
                {/* Visual Notch representing chip pin 1 orientation */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-slate-200 dark:bg-slate-950 rounded-b-lg border-x border-b border-slate-300 dark:border-slate-800" />

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-brand transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {card.description}
                </p>

                <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-primary-brand hover:underline">
                  <span className="mr-1">Explore schematic</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Benefits Display - Dynamic imports */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center justify-center p-6 bg-slate-50/80 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 max-w-3xl mx-auto shadow-sm">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">SYSTEM_BENEFITS_CATALOG</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {VALUE_PROPS_BENEFITS.map((benefit, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white dark:bg-slate-900/60 border border-slate-150 dark:border-slate-800/60 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-350 shadow-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

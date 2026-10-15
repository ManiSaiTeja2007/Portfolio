// src/components/sections/ValuePropositions/ValuePropositions.tsx
import { motion } from 'framer-motion';
import { Cpu, Layers, TrendingUp, ArrowRight } from 'lucide-react';
import { VALUE_PROPS_BENEFITS, VALUE_PROPOSITIONS_CONFIG } from '@/utils/constants';

const iconMap = {
  cpu: <Cpu className="text-white" size={24} />,
  layers: <Layers className="text-white" size={24} />,
  trending: <TrendingUp className="text-white" size={24} />,
};

export const ValuePropositions = () => {
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
            {VALUE_PROPOSITIONS_CONFIG.badge}
          </span>
          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
            {VALUE_PROPOSITIONS_CONFIG.heading}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {VALUE_PROPOSITIONS_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* 3 Columns of Integrated Circuit (IC) Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {VALUE_PROPOSITIONS_CONFIG.cards.map((card) => (
            <motion.div
              key={card.id}
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
                  {iconMap[card.iconType]}
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

        {/* Scrolling Benefits Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 overflow-hidden"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-950/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950/40 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-4 animate-[marquee_25s_linear_infinite] hover:pause-animation w-max">
              {[...VALUE_PROPS_BENEFITS, ...VALUE_PROPS_BENEFITS, ...VALUE_PROPS_BENEFITS].map((benefit, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/60 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm whitespace-nowrap flex-shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex-shrink-0" />
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

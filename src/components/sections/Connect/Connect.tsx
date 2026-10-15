// src/components/sections/Connect/Connect.tsx
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Hash } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCodepen, FaKaggle, FaDiscord, FaDev } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { CONNECT_CONFIG, PERSONAL_INFO } from '@/utils/constants';

const socialIconMap: Record<string, React.ReactNode> = {
  GitHub: <FaGithub size={24} />,
  LinkedIn: <FaLinkedin size={24} />,
  'Twitter / X': <FaXTwitter size={24} />,
  LeetCode: <SiLeetcode size={24} />,
  Kaggle: <FaKaggle size={24} />,
  Hashnode: <Hash size={24} />,
  Discord: <FaDiscord size={24} />,
  CodePen: <FaCodepen size={24} />,
  'Dev.to': <FaDev size={24} />,
};

export const Connect = () => {
  return (
    <section id="connect" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            {CONNECT_CONFIG.badge}
          </span>
          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
            {CONNECT_CONFIG.heading}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {CONNECT_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONNECT_CONFIG.platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-5 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700/60 transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden"
            >
              {/* Subtle gradient accent in corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-bl from-white to-transparent rounded-full" />
              </div>

              {/* Top: Icon + Arrow */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-350 group-hover:scale-110 transition-transform duration-300">
                  {socialIconMap[platform.name] || <Hash size={24} />}
                </div>
                <ExternalLink
                  size={14}
                  className="text-slate-400 dark:text-slate-500 group-hover:text-primary-500 transition-colors opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Platform name & handle */}
              <div className="mb-3">
                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                  {platform.handle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                {platform.description}
              </p>

              {/* Footer: stats + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400">
                  {platform.stats}
                </span>
                <ArrowRight
                  size={14}
                  className="text-primary-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Prefer email?{' '}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
            >
              {PERSONAL_INFO.email}
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

// src/components/sections/Connect/Connect.tsx
import { motion } from 'framer-motion';
import { Hash, ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCodepen, FaKaggle, FaDiscord, FaDev } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SOCIAL_LINKS } from '@/utils/constants';

interface SocialPlatform {
  name: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
  description: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  stats?: string;
}

const platforms: SocialPlatform[] = [
  {
    name: 'GitHub',
    handle: '@manisaiteja2007',
    url: SOCIAL_LINKS.github,
    icon: <FaGithub size={24} />,
    description: 'Open-source projects, systems code, and ECE experiments.',
    accentBg: 'bg-slate-800/40 hover:bg-slate-800/60',
    accentText: 'text-white',
    accentBorder: 'border-slate-700/60 hover:border-slate-600',
    stats: '25+ repos',
  },
  {
    name: 'LinkedIn',
    handle: 'mani-sai-teja-bejjala',
    url: SOCIAL_LINKS.linkedin,
    icon: <FaLinkedin size={24} />,
    description: 'Professional network, ECE journey, and career milestones.',
    accentBg: 'bg-blue-950/40 hover:bg-blue-950/60',
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-900/40 hover:border-blue-700/60',
    stats: 'Connecting',
  },
  {
    name: 'Twitter / X',
    handle: '@manisaiteja_b',
    url: SOCIAL_LINKS.twitter,
    icon: <FaXTwitter size={24} />,
    description: 'Tech threads, dev thoughts, and hardware-software musings.',
    accentBg: 'bg-slate-800/40 hover:bg-slate-800/60',
    accentText: 'text-slate-200',
    accentBorder: 'border-slate-700/60 hover:border-slate-500',
    stats: 'Tweeting',
  },
  {
    name: 'Kaggle',
    handle: 'bejjalamanisaiteja',
    url: SOCIAL_LINKS.kaggle,
    icon: <FaKaggle size={24} />,
    description: 'Data science notebooks, orbital physics models, and ML pipelines.',
    accentBg: 'bg-sky-950/40 hover:bg-sky-950/60',
    accentText: 'text-sky-400',
    accentBorder: 'border-sky-900/40 hover:border-sky-700/60',
    stats: 'Datasets & NB',
  },
  {
    name: 'Hashnode',
    handle: '@ManiSaiTejaBejjala',
    url: SOCIAL_LINKS.hashnode,
    icon: <Hash size={24} />,
    description: 'Technical articles on ECE meets software, systems design, and dev learnings.',
    accentBg: 'bg-blue-950/30 hover:bg-blue-950/50',
    accentText: 'text-blue-300',
    accentBorder: 'border-blue-900/40 hover:border-blue-600/60',
    stats: 'Writing',
  },
  {
    name: 'Discord',
    handle: 'manisaiteja7509',
    url: SOCIAL_LINKS.discord,
    icon: <FaDiscord size={24} />,
    description: 'Community discussions on hardware hacking, systems, and open-source.',
    accentBg: 'bg-indigo-950/40 hover:bg-indigo-950/60',
    accentText: 'text-indigo-400',
    accentBorder: 'border-indigo-900/40 hover:border-indigo-700/60',
    stats: 'In Servers',
  },
  {
    name: 'CodePen',
    handle: 'bejjala-mani-sai-teja',
    url: SOCIAL_LINKS.codepen,
    icon: <FaCodepen size={24} />,
    description: 'Frontend experiments, UI concepts, and interactive CSS demos.',
    accentBg: 'bg-slate-800/40 hover:bg-slate-800/60',
    accentText: 'text-white',
    accentBorder: 'border-slate-700/60 hover:border-slate-500',
    stats: 'Pens',
  },
  {
    name: 'Dev.to',
    handle: '@manisaiteja2007',
    url: SOCIAL_LINKS.devto,
    icon: <FaDev size={24} />,
    description: 'Dev community posts on web performance, TypeScript, and ECE for software devs.',
    accentBg: 'bg-slate-800/40 hover:bg-slate-800/60',
    accentText: 'text-slate-200',
    accentBorder: 'border-slate-700/60 hover:border-slate-500',
    stats: 'Posts',
  },
];

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
            Social & Professional
          </span>
          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
            Connect with Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Find me across the developer ecosystem — from hardware experiments to open-source contributions and technical writing.
          </p>
        </motion.div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
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
              className={`group relative flex flex-col p-5 rounded-2xl border transition-all duration-300 ${platform.accentBg} ${platform.accentBorder} bg-slate-50 dark:bg-slate-900/40 hover:shadow-lg cursor-pointer overflow-hidden`}
            >
              {/* Subtle gradient accent in corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-bl from-white to-transparent rounded-full" />
              </div>

              {/* Top: Icon + Arrow */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-350 group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
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
              href="mailto:manisaiteja2007@gmail.com"
              className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
            >
              manisaiteja2007@gmail.com
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

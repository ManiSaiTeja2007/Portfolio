// src/components/sections/Connect/Connect.tsx
import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCodepen, FaKaggle, FaDiscord, FaDev } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SOCIAL_LINKS } from '@/utils/constants';

const socialLinks = [
  {
    name: 'GitHub',
    url: SOCIAL_LINKS.github,
    icon: <FaGithub size={24} />,
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: SOCIAL_LINKS.linkedin,
    icon: <FaLinkedin size={24} />,
    color: 'hover:text-blue-700',
  },
  {
    name: 'Twitter',
    url: SOCIAL_LINKS.twitter,
    icon: <FaXTwitter size={24} />,
    color: 'hover:text-blue-400',
  },
  {
    name: 'Kaggle',
    url: SOCIAL_LINKS.kaggle,
    icon: <FaKaggle size={24} />,
    color: 'hover:text-blue-500',
  },
  {
    name: 'Hashnode',
    url: SOCIAL_LINKS.hashnode,
    icon: <Hash size={24} />,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Discord',
    url: SOCIAL_LINKS.discord,
    icon: <FaDiscord size={24} />,
    color: 'hover:text-purple-600',
  },
  {
    name: 'CodePen',
    url: SOCIAL_LINKS.codepen,
    icon: <FaCodepen size={24} />,
    color: 'hover:text-black dark:hover:text-white',
  },
  {
    name: 'Dev.to',
    url: SOCIAL_LINKS.devto,
    icon: <FaDev size={24} />,
    color: 'hover:text-black dark:hover:text-white',
  },
];

export const Connect = () => {
  return (
    <section id="connect" className="bg-section">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Connect with Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-description"
        >
          Feel free to connect with me on any of these platforms. I'm always open to
          discussing new opportunities, projects, or just chatting about technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-4 bg-card rounded-lg hover-lift ${social.color} transition-colors duration-300`}
              aria-label={`Connect on ${social.name}`}
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full mb-2">
                {social.icon}
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {social.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

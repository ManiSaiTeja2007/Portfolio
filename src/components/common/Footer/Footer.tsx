// src/components/common/Footer/Footer.tsx
import { motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin, ExternalLink, Heart, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaKaggle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stats', href: '#stats' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: SOCIAL_LINKS.github, icon: <FaGithub size={16} />, color: 'hover:text-white hover:bg-slate-700' },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: <FaLinkedin size={16} />, color: 'hover:text-blue-400 hover:bg-blue-950/40' },
  { label: 'Twitter', href: SOCIAL_LINKS.twitter, icon: <FaXTwitter size={16} />, color: 'hover:text-slate-200 hover:bg-slate-700' },
  { label: 'Kaggle', href: SOCIAL_LINKS.kaggle, icon: <FaKaggle size={16} />, color: 'hover:text-blue-400 hover:bg-blue-950/40' },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/60 overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main footer content ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          {/* Column 1: Brand / Identity */}
          <div className="md:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-primary-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                <span className="text-white font-poppins font-bold text-xl">M</span>
              </div>
              <div>
                <p className="text-white font-poppins font-bold text-lg leading-none">Mani Sai Teja</p>
                <p className="text-slate-500 text-xs font-mono mt-0.5">Bejjala</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              ECE student at IIIT Sri City bridging hardware intelligence with modern software development.
              Building systems that matter — from silicon to interface.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-primary-400 transition-colors text-sm group"
              >
                <Mail size={14} className="text-primary-500 group-hover:scale-110 transition-transform" />
                {PERSONAL_INFO.email}
              </a>
              <div className="flex items-center gap-2.5 text-slate-500 text-sm">
                <MapPin size={14} className="text-emerald-500" />
                Chittoor, Andhra Pradesh, India
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700/60 transition-all duration-200 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500">
              Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Availability & Profiles */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500">
              External Profiles
            </h3>

            <div className="space-y-2.5">
              {[
                { label: 'GitHub', sub: 'manisaiteja2007', href: SOCIAL_LINKS.github, color: 'text-slate-300' },
                { label: 'LinkedIn', sub: 'mani-sai-teja-bejjala', href: SOCIAL_LINKS.linkedin, color: 'text-blue-400' },
                { label: 'LeetCode', sub: '150+ problems', href: 'https://leetcode.com/u/manisaiteja2007/', color: 'text-orange-400' },
                { label: 'Kaggle', sub: 'bejjalamanisaiteja', href: SOCIAL_LINKS.kaggle, color: 'text-cyan-400' },
              ].map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 group transition-all duration-200"
                >
                  <div>
                    <p className={`text-sm font-semibold ${p.color}`}>{p.label}</p>
                    <p className="text-slate-600 text-xs font-mono">{p.sub}</p>
                  </div>
                  <ExternalLink size={12} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Availability status */}
            <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold">Seeking Internships</span>
              </div>
              <p className="text-slate-500 text-xs mt-1 font-mono">Available for Summer 2026</p>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-slate-800/60 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600 text-xs font-mono">
            <Terminal size={12} className="text-primary-500" />
            <span>
              © {new Date().getFullYear()} Mani Sai Teja Bejjala — Built with{' '}
              <span className="inline-flex items-center gap-1 text-rose-500">
                <Heart size={10} className="fill-current" /> React
              </span>{' '}
              & TypeScript
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-400 transition-colors text-xs font-mono group"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            Back to top
          </button>
        </div>

      </div>
    </footer>
  );
};

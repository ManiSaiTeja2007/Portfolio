// src/components/common/Header/Header.tsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { SECTION_IDS } from '@/utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#connect', label: 'Connect' },
    { href: '#stats', label: 'Stats' },
    { href: '#contact', label: 'Contact' },
    { href: '#fun-fact', label: 'Fun Fact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 w-[92%] max-w-7xl bg-white/75 dark:bg-slate-950/45 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-2xl z-50 transition-all duration-500 shadow-lg dark:shadow-glow/5 ${
      isScrolled 
        ? 'top-4 opacity-100 translate-y-0 pointer-events-auto' 
        : '-top-20 opacity-0 -translate-y-4 pointer-events-none'
    }`}>
      <div className="px-6 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-primary-brand rounded-lg flex items-center justify-center">
            <span className="text-white font-poppins font-bold text-2xl">M</span>
          </div>
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-2xl font-poppins font-bold text-primary-brand hidden md:block"
          >
            Mani Sai Teja
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-medium px-2 py-1 transition-colors duration-300 ${
                    isActive
                      ? 'text-primary-brand dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-primary-brand dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-brand to-secondary-brand rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        links={navLinks}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

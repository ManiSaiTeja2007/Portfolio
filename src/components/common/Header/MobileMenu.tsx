// src/components/common/Header/MobileMenu.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileMenuLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  links: MobileMenuLink[];
  activeSection: string;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, links, activeSection, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();

    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Account for fixed header height
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden"
        >
          <div className="px-4 py-2">
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary-brand/10 text-primary-brand font-medium'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

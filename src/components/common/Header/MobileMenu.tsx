// src/components/common/Header/MobileMenu.tsx
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
    <div
      className={`md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
      }`}
    >
      <div className="px-6 py-4 space-y-1">
        {links.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-4 py-3 rounded-xl transition-all duration-200 font-mono text-sm ${
                isActive
                  ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

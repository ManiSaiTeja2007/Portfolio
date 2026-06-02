// src/components/pages/HomePage.tsx
import { Hero } from '@/components/sections/Hero/Hero';
import { Stats } from '@/components/sections/Stats/Stats'; // MOVED UP: Immediate credibility
import { ValuePropositions } from '@/components/sections/ValuePropositions/ValuePropositions'; // NEW: Hardware+Software narrative
import { About } from '@/components/sections/About/About';
import { Skills } from '@/components/sections/Skills/Skills';
import { Experience } from '@/components/sections/Experience/Experience';
import { Projects } from '@/components/sections/Projects/Projects';
import { Connect } from '@/components/sections/Connect/Connect';
import { Contact } from '@/components/sections/Contact/Contact';
import { FunFact } from '@/components/sections/FunFact/FunFact';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const timer = setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 150); // Small delay to ensure elements are rendered
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <>
      {/* PHASE 1: Immediate Impact (0-10 seconds) */}
      <Hero />

      {/* PHASE 2: Professional Foundation (10-30 seconds) */}
      <Stats /> {/* Quick credibility stats */}
      <About /> {/* Narrative about me */}
      <ValuePropositions /> {/* Unique value blend */}

      {/* PHASE 3: Technical Demonstration (30-60 seconds) */}
      <Skills /> {/* Contextual skills */}
      <Projects /> {/* Tiered project showcase */}

      {/* PHASE 4: Depth & Complexity (1-2 minutes) */}
      <Experience /> {/* Impact-focused timeline */}

      {/* PHASE 5: Professional Context (2-3 minutes) */}
      <Connect /> {/* Social proof */}
      <Contact /> {/* Clear next steps */}
      <FunFact /> {/* Personality - kept at end */}
    </>
  );
};

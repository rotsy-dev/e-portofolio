/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Heart, HelpCircle, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsBento from './components/SkillsBento';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import EducationCard from './components/EducationCard';
import ContactHub from './components/ContactHub';
import ResumePrinter from './components/ResumePrinter';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedSkillHighlight, setSelectedSkillHighlight] = useState<string | null>(null);
  const [isPrinterOpen, setIsPrinterOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250; // offset

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen relative font-sans text-neutral-800 dark:text-slate-100 antialiased selection:bg-slate-900 selection:text-white dark:selection:bg-white dark:selection:text-slate-950 transition-colors duration-300 print:bg-white print:p-0">
      
      {/* Interactive Global Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Primary Content Scroll Hub */}
      <main className="relative print:hidden">
        
        {/* About Section (Hero / Introduction) */}
        <Hero
          onScrollToContact={() => scrollToSection('contact')}
          onOpenResumePrinter={() => setIsPrinterOpen(true)}
        />

        {/* Skills Bento grid catalog */}
        <SkillsBento
          selectedSkillHighlight={selectedSkillHighlight}
          setSelectedSkillHighlight={setSelectedSkillHighlight}
        />

        {/* Experiences Timeline layout */}
        <ExperienceTimeline
          selectedSkillHighlight={selectedSkillHighlight}
          setSelectedSkillHighlight={setSelectedSkillHighlight}
        />

        {/* Detailed Projects Showcase */}
        <ProjectsShowcase />

        {/* Educational degrees & Languages */}
        <EducationCard />

        {/* Contact hub form & Coordinates */}
        <ContactHub />

      </main>

      {/* Global Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 relative z-10 print:hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-tight text-xs">Rotsy Raharinosy</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">Portfolio Interactif v1.0</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
            Powered by <Heart className="w-3 text-red-500 fill-red-500 animate-pulse" /> and a refusal to give up.
          </p>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-505">
            <span>© {new Date().getFullYear()} Tous Droits Réservés</span>
          </div>
        </div>
      </footer>

      {/* Print CV PDF Dialog Overlay */}
      {isPrinterOpen && (
        <ResumePrinter onClose={() => setIsPrinterOpen(false)} />
      )}

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-slate-900 dark:bg-white border border-slate-800 dark:border-slate-200 text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-sm shadow-md transition-all duration-300 cursor-pointer z-50 print:hidden"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}

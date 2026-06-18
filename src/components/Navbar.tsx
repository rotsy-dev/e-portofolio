import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../hooks/useTheme';
import avatar from '../assets/images/favicon.png'

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'À Propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expériences' },
    { id: 'projects', label: 'Projets' },
    { id: 'education', label: 'Formations' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 border-b border-slate-100 dark:border-slate-900 shadow-2xs py-3'
          : 'bg-white/50 dark:bg-slate-950/50 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('about')}
        >
          <div className="w-9 h-9 rounded-md bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-950 transition-all group-hover:bg-slate-800 dark:group-hover:bg-slate-100 overflow-hidden">
            <img
              src={avatar}
              alt="Rotsy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white">
              ROTSY.
            </span>
            <span className="block text-[9px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Fullstack Dev
            </span>
          </div>
        </motion.div>
 
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 p-1 rounded-sm border border-slate-200 dark:border-slate-800">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-sm font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white dark:text-slate-950'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-955 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-slate-900 dark:bg-white rounded-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
 
        {/* Contact CTA & Theme Switcher */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-3"
        >
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-md bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-705 dark:text-slate-300 border border-slate-205 dark:border-slate-800 transition-colors cursor-pointer"
            aria-label="Changer de thème"
            title={theme === 'dark' ? "Mode Clair" : "Mode Sombre"}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 px-5 py-2.5 rounded-md font-sans font-semibold text-xs tracking-wider uppercase transition-colors duration-300 shadow-2xs hover:shadow-xs cursor-pointer"
          >
            <Cpu className="w-3.5 h-3.5" />
            Me Recruter
          </button>
        </motion.div>
 
        {/* Mobile Toggle & Theme button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-305 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
 
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-md font-sans font-semibold text-xs uppercase tracking-wider text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono opacity-50">/{item.id.substring(0, 3)}</span>
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-2 w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 py-3 rounded-md font-sans font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Cpu className="w-4 h-4" />
                Me Recruter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { useState } from 'react';
import { Search, LayoutGrid, Server, Database, ShieldCheck, GitBranch, Cloud, BrainCircuit, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Skill } from '../types';
import { skills } from '../data';

interface SkillsBentoProps {
  selectedSkillHighlight: string | null;
  setSelectedSkillHighlight: (skill: string | null) => void;
}

export default function SkillsBento({
  selectedSkillHighlight,
  setSelectedSkillHighlight,
}: SkillsBentoProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les Outils', icon: LayoutGrid },
    { id: 'frontend', label: 'Frontend', icon: LayoutGrid },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Bases de Données', icon: Database },
    { id: 'qa', label: 'QA & Test d\'intégration', icon: ShieldCheck },
    { id: 'devops', label: 'DevOps & Infrastructure', icon: Cloud },
    { id: 'cicd', label: 'CI/CD & Versioning', icon: GitBranch },
    { id: 'soft', label: 'Aptitudes & Atouts', icon: BrainCircuit },
  ];

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'frontend': return 'Frontend / UI Interactivité';
      case 'backend': return 'Backend / Logique Métier';
      case 'database': return 'Architecture Base de Données';
      case 'devops': return 'Infrastructures & Conteneurs';
      case 'qa': return 'Tests & Ingénierie QA';
      case 'cicd': return 'CI/CD & Méthodologies';
      case 'soft': return 'Atouts Organisationnels';
      default: return 'Général';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return LayoutGrid;
      case 'backend': return Server;
      case 'database': return Database;
      case 'devops': return Cloud;
      case 'qa': return ShieldCheck;
      case 'cicd': return GitBranch;
      case 'soft': return BrainCircuit;
      default: return Sparkles;
    }
  };

  const colSpans: Record<string, string> = {
    frontend: 'md:col-span-2 lg:col-span-2',
    backend: 'md:col-span-1 lg:col-span-1',
    database: 'md:col-span-1 lg:col-span-1',
    qa: 'md:col-span-1 lg:col-span-1',
    devops: 'md:col-span-1 lg:col-span-1',
    cicd: 'md:col-span-1 lg:col-span-1',
    soft: 'md:col-span-2 lg:col-span-2',
  };

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'all' ||
      skill.category === activeCategory ||
      (activeCategory === 'cicd' && skill.category === 'methodology'); // Concat methodology with CI/CD category for bento flow
    return matchesSearch && matchesCategory;
  });

  const handleSkillClick = (skillName: string) => {
    if (selectedSkillHighlight === skillName) {
      setSelectedSkillHighlight(null);
    } else {
      setSelectedSkillHighlight(skillName);
      // Fluid auto-scroll to the timeline block so they instantly see matching assignments
      const expSection = document.getElementById('experience');
      if (expSection) {
        expSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Group filtered skills for asymmetrical presentation
  const skillsByCategory = filteredSkills.reduce<Record<string, Skill[]>>((acc, s) => {
    const cat = s.category === 'methodology' ? 'cicd' : s.category; // consolidate
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(s);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 bg-slate-50/20 dark:bg-slate-900/10 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block with Modern Meta Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Stack & Maîtrises</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tighter">
              Mes Compétences & Outils
            </h2>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed uppercase">
              Cliquez sur un outil informatique ou un langage ci-dessous pour filtrer en temps réel et éclairer les étapes correspondantes de mon parcours professionnel !
            </p>
          </div>

          {/* Clean functional Quick Search bar */}
          <div className="relative w-full lg:max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-400 dark:text-slate-505" />
            <input
              type="text"
              placeholder="Chercher un outil (React, Cypress, Java...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 focus:bg-white dark:focus:bg-slate-900 text-xs font-mono uppercase tracking-wider text-slate-850 dark:text-white pl-10 pr-4 py-3 rounded-sm border border-slate-200 dark:border-slate-800 focus:border-slate-950 dark:focus:border-slate-300 focus:outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Categories Horizontal Selector */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-3 scrollbar-none scroll-smooth">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-sans text-xs font-semibold uppercase tracking-wider whitespace-nowrap cursor-pointer border transition-all duration-300 ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-950 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Alert of Selected filter */}
        <AnimatePresence>
          {selectedSkillHighlight && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 overflow-hidden"
            >
              <div className="p-3 bg-slate-900 dark:bg-slate-800 border border-slate-900 dark:border-slate-705 rounded-sm text-slate-100 dark:text-slate-200 text-xs font-mono uppercase flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="truncate">
                    Filtre actif : <strong className="text-white">"{selectedSkillHighlight}"</strong> est illuminé dans la section Expériences.
                  </span>
                </div>
                <button
                  onClick={() => setSelectedSkillHighlight(null)}
                  className="px-3 py-1 text-[10px] uppercase font-mono tracking-wider hover:bg-slate-800 dark:hover:bg-slate-700 rounded-sm transition cursor-pointer text-white underline border border-slate-700 dark:border-slate-600 shrink-0"
                >
                  Effacer
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Beautiful Real Bento Grid layout */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-sm border border-dashed border-slate-200 dark:border-slate-800 shadow-3xs">
            <span className="inline-block p-4 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-4">
              <Search className="w-6 h-6 text-slate-400 dark:text-slate-500" />
            </span>
            <p className="text-xs font-mono uppercase text-slate-450 dark:text-slate-550">Aucun outil ne correspond à votre recherche.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsByCategory).map(([catKey, items]) => {
              const catTitle = getCategoryLabel(catKey);
              const IconComp = getCategoryIcon(catKey);
              const spanClass = activeCategory === 'all' ? (colSpans[catKey] || 'md:col-span-1') : 'md:col-span-1';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  key={catKey}
                  className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-sm hover:shadow-xs hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-350 flex flex-col justify-between group h-full relative/bento overflow-hidden shadow-3xs ${spanClass}`}
                >
                  {/* Subtle clean tech grid effect */}
                  <div className="absolute top-0 right-0 p-5 opacity-5 pointer-events-none text-slate-900 dark:text-white">
                    <IconComp className="w-16 h-16 stroke-[1.5]" />
                  </div>

                  <div className="space-y-6">
                    {/* Bento Title Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800/80">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 flex items-center justify-center text-slate-800 dark:text-slate-300 group-hover:bg-slate-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-950 transition-colors duration-300">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          {catTitle}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-450 dark:text-slate-400 font-bold px-2 py-0.5 rounded-sm">
                        {items.length} Outils
                      </span>
                    </div>

                    {/* Skill tags list */}
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => {
                        const isHighlighted = selectedSkillHighlight === item.name;
                        return (
                          <button
                            key={item.name}
                            onClick={() => handleSkillClick(item.name)}
                            className={`group/skill relative flex items-center gap-1.5 px-3 py-2 rounded-sm text-[11px] font-mono tracking-wide font-semibold transition-all duration-300 cursor-pointer border ${
                              isHighlighted
                                ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-950 shadow-xs'
                                : 'bg-slate-50/50 dark:bg-slate-950/30 hover:bg-slate-900 dark:hover:bg-white hover:border-slate-905 dark:hover:border-white hover:text-white dark:hover:text-slate-950 border-slate-200/90 dark:border-slate-800 text-slate-650 dark:text-slate-300'
                            }`}
                          >
                            {isHighlighted ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-white dark:text-slate-900 animate-pulse" />
                            ) : (
                              <span className="w-1 h-3 bg-slate-300 dark:bg-slate-700 group-hover/skill:bg-white dark:group-hover/skill:bg-slate-950 transition-colors shrink-0" />
                            )}
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

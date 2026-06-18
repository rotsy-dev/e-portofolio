import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Code2, Target, Lightbulb, CheckCircle2, X, Search } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data';

export default function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'fullstack' | 'frontend' | 'qa'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const tabs = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'fullstack', label: 'Fullstack / Backend' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'qa', label: 'Automation & QA' },
  ];

  // Filtering by both Tab AND Search query simultaneously
  const filteredProjects = projects.filter((project) => {
    const matchesTab = activeTab === 'all' || project.category === activeTab;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchLower) ||
      project.subtitle.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower));

    return matchesTab && matchesSearch;
  });

  const handleDemoClick = () => {
    setDemoNotice("Ce projet fait partie d'applications d'entreprise soumises à accord de confidentialité (NDA). Les spécificités d'architecture technique ont été entièrement validées.");
    setTimeout(() => {
      setDemoNotice(null);
    }, 6000);
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 relative border-b border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Galerie de Réalisations</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tighter">
              Études de Cas & Projets Clés
            </h2>
            <p className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
              Une sélection de projets complexes illustrant mon expertise technique, du devis logistique à l’industrialisation continue.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full xl:w-auto">
            {/* Search filter input */}
            <div className="relative shrink-0 w-full sm:w-64">
              <Search className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Filtrer par mot-clé (React, PHP...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 focus:bg-white dark:focus:bg-slate-900 text-xs font-mono uppercase tracking-wider text-slate-850 dark:text-white pl-10 pr-4 py-3 rounded-sm border border-slate-200 dark:border-slate-800 focus:border-slate-950 dark:focus:border-slate-300 focus:outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            {/* Project Filters Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-50 dark:bg-slate-900 p-1.5 rounded-sm border border-slate-200 dark:border-slate-800 overflow-x-auto">
              {tabs.map((tab) => {
                const belongs = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-1.5 rounded-sm font-sans text-xs font-semibold uppercase tracking-wider cursor-pointer whitespace-nowrap transition-all duration-300 ${
                      belongs
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-2xs'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-905 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-slate-50/20 dark:bg-slate-900/10 rounded-sm border border-dashed border-slate-200 dark:border-slate-800 shadow-3xs">
            <span className="inline-block p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-4">
              <Search className="w-6 h-6 text-slate-400 dark:text-slate-500" />
            </span>
            <p className="text-xs font-mono uppercase text-slate-450 dark:text-slate-550">Aucun projet ne fait référence à votre recherche.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    key={project.id}
                    className="group bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-md hover:bg-white dark:hover:bg-slate-900 hover:shadow-xs hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-350 flex flex-col justify-between"
                  >
                    <div>
                      {/* Project Categories Badges */}
                      <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-200/50 dark:border-slate-800/80">
                        <span className="text-[9px] font-mono font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-sm">
                          {project.category === 'fullstack' ? 'Fullstack Core' : project.category === 'qa' ? 'QA & Automation' : 'Frontend & UI'}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">ROLE: {project.role.split(' ')[0]}</span>
                      </div>

                      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-slate-650 dark:group-hover:text-slate-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold mb-4 italic tracking-wide">{project.subtitle}</p>

                      <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Features list snapshot */}
                      <div className="space-y-2 mb-6">
                        {project.features.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 dark:text-slate-300 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-450 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <button
                        onClick={() => {
                          setDemoNotice(null);
                          setSelectedProject(project);
                        }}
                        className="w-full text-center bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans font-semibold text-xs py-3 px-4 rounded-sm cursor-pointer transition-colors flex items-center justify-center gap-2 uppercase tracking-wider"
                      >
                        <span>Consulter l'étude de cas</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Detailed Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/40 dark:bg-slate-950/70 backdrop-blur-xs p-4 overflow-y-auto"
            >
              {/* Close backdrop click */}
              <div className="absolute inset-0 cursor-default" onClick={() => setSelectedProject(null)} />

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 280, damping: 25 }}
                className="bg-white dark:bg-slate-900 rounded-md border border-slate-300 dark:border-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg relative z-110 flex flex-col"
              >
                {/* Header info */}
                <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50/40 dark:bg-slate-950/40 rounded-t-md">
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-250 dark:border-slate-700 px-2.5 py-1 rounded-sm">
                      {selectedProject.role}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mt-3 leading-tight tracking-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-550 mt-1 italic">{selectedProject.subtitle}</p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-705 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body details */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
                  
                  {/* Long Description */}
                  <div className="space-y-2">
                    <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Challenge & Outcome Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-sm border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-display font-bold text-[10px] uppercase tracking-wider">
                        <Target className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                        Le Défi Technique
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-sm border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-display font-bold text-[10px] uppercase tracking-wider">
                        <Lightbulb className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                        Impact & Résultat
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {selectedProject.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Core Features list */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Fonctionnalités Clés :</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-3 rounded-sm border border-slate-200 dark:border-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 dark:text-slate-350 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack used tags */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">Technologies & Livrables :</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inline Demo Notice */}
                  {demoNotice && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-slate-900 dark:bg-slate-800 border border-slate-800 text-white rounded-sm text-xs select-none"
                    >
                      {demoNotice}
                    </motion.div>
                  )}

                </div>

                {/* Footer simulation action with secure state Notice instead of window.alert */}
                <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Accord de Confidentialité Requis</div>
                  <button
                    onClick={handleDemoClick}
                    className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans font-semibold text-xs px-5 py-2.5 rounded-sm transition cursor-pointer uppercase tracking-wider w-full sm:w-auto"
                  >
                    Demander une démo live
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

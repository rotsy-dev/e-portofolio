import { Briefcase, MapPin, Calendar, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { experiences } from '../data';

interface ExperienceTimelineProps {
  selectedSkillHighlight: string | null;
  setSelectedSkillHighlight: (skill: string | null) => void;
}

export default function ExperienceTimeline({
  selectedSkillHighlight,
  setSelectedSkillHighlight,
}: ExperienceTimelineProps) {
  
  const handleStackClick = (stackItem: string) => {
    if (selectedSkillHighlight === stackItem) {
      setSelectedSkillHighlight(null);
    } else {
      setSelectedSkillHighlight(stackItem);
    }
  };

  return (
    <section id="experience" className="py-24 bg-slate-50/70 dark:bg-slate-900/10 border-y border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Mon Parcours</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tighter">
            Expériences Professionnelles
          </h2>
          <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase max-w-xl mx-auto leading-relaxed">
            De la création de plateformes industrielles complètes à l'automatisation des stratégies QA, découvrez mes rôles clés et ma valeur ajoutée.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1.5px] bg-slate-250 dark:bg-slate-800 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const hasHighlightedSkill = selectedSkillHighlight && exp.stack.includes(selectedSkillHighlight);
              const anyHighlightActive = selectedSkillHighlight !== null;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-stretch gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Badge Point */}
                  <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 z-10">
                    <div
                      className={`w-9 h-9 rounded-sm border bg-white dark:bg-slate-900 flex items-center justify-center transition-all duration-300 ${
                        hasHighlightedSkill
                          ? 'border-slate-900 dark:border-white ring-4 ring-slate-100 dark:ring-slate-800 scale-110 shadow-xs'
                          : anyHighlightActive
                          ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-600'
                          : 'border-slate-900 dark:border-slate-700 text-slate-900 dark:text-slate-100'
                      }`}
                    >
                      <Briefcase className={`w-4 h-4 ${hasHighlightedSkill ? 'text-slate-900 dark:text-white animate-pulse' : ''}`} />
                    </div>
                  </div>

                  {/* Empty Side (Desktop alignment) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Container Side */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div
                      className={`bg-white dark:bg-slate-900 p-6 md:p-8 rounded-md border transition-all duration-550 relative ${
                        hasHighlightedSkill
                          ? 'border-slate-900 dark:border-white ring-4 ring-slate-100 dark:ring-slate-800 shadow-xs bg-slate-50 dark:bg-slate-900/60'
                          : anyHighlightActive
                          ? 'border-slate-100 dark:border-slate-850 opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xs'
                          : 'border-slate-202/80 dark:border-slate-800 shadow-3xs hover:shadow-xs'
                      }`}
                    >
                      {/* Highlighted Skill Ribbon Banner */}
                      {hasHighlightedSkill && (
                        <div className="absolute top-4 right-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-sm flex items-center gap-1.5 animate-pulse">
                          <Sparkles className="w-3 h-3 text-slate-200 dark:text-slate-800" />
                          <span>Utilise "{selectedSkillHighlight}"</span>
                        </div>
                      )}

                      {/* Header metadata */}
                      <div className="flex flex-col gap-2 mb-4">
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono tracking-widest">{exp.period}</span>
                        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">
                          {exp.position}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-semibold font-mono uppercase">
                          <span className="text-slate-800 dark:text-slate-200">{exp.company}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-350 dark:bg-slate-700" />
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" />{exp.location}</span>
                        </div>
                      </div>

                      {/* Description List Bullet points */}
                      <ul className="space-y-2.5 mb-6 text-xs text-slate-500 dark:text-slate-400 leading-relaxed list-disc list-outside pl-4">
                        {exp.description.map((descLine, i) => (
                          <li key={i}>{descLine}</li>
                        ))}
                      </ul>

                      {/* Stack Pills footer */}
                      <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                        <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">Technologies Appliquées :</span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.stack.map((tech) => {
                            const isMatch = selectedSkillHighlight === tech;
                            return (
                              <button
                                key={tech}
                                onClick={() => handleStackClick(tech)}
                                className={`text-[10px] font-mono px-2 py-1 rounded-sm border transition-all duration-300 cursor-pointer ${
                                  isMatch
                                    ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-950 font-bold ring-2 ring-slate-100 dark:ring-slate-800'
                                    : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-350 hover:bg-slate-200 dark:hover:bg-slate-750 hover:text-slate-950 dark:hover:text-white'
                                }`}
                              >
                                {tech}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

import { GraduationCap, Languages, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { educations } from '../data';

export default function EducationCard() {
  const languages = [
    { name: 'Français', level: 'Avancé', percent: 95, desc: 'Langue de travail principale, parfaite maîtrise écrite et orale.' },
    { name: 'Anglais', level: 'Notions de base (Intermédiaire technique)', percent: 45, desc: 'Lecture de documentations techniques, écriture de code et rédaction de rapports.' },
  ];

  return (
    <section id="education" className="py-24 bg-slate-50/70 dark:bg-slate-900/10 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education timeline column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-medium">Formations</span>
              <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white tracking-tighter">
                Diplômes & Parcours Académique
              </h2>
              <p className="text-xs font-mono text-slate-400 dark:text-slate-555 uppercase max-w-lg leading-relaxed">
                Diplômé d'une école d'ingénierie informatique de renom, spécialisé en ingénierie logicielle et conception de bases de données.
              </p>
            </div>

            <div className="space-y-6">
              {educations.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-md border border-slate-202 dark:border-slate-800 shadow-3xs hover:shadow-xs transition-colors flex gap-5 items-start"
                >
                  <div className="w-11 h-11 rounded-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase text-slate-450 dark:text-slate-500">
                      {edu.period}
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Spécialité : <strong className="text-slate-650 dark:text-slate-200">{edu.specialization}</strong>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages column */}
          <div className="lg:col-span-5 space-y-8 lg:pl-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-medium">Langues</span>
              <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white tracking-tighter">
                Langues Parlées
              </h2>
              <p className="text-xs font-mono text-slate-400 dark:text-slate-555 uppercase max-w-lg leading-relaxed">
                Compétences linguistiques facilitant le travail en environnements francophones et collaboration technique multinationale.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-md border border-slate-202 dark:border-slate-800 shadow-3xs space-y-6">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-950 dark:text-white flex items-center gap-2">
                      <Languages className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      {lang.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-955 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded-sm">
                      {lang.level}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 dark:bg-slate-850 h-1.5 rounded-sm overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="bg-slate-900 dark:bg-white h-full rounded-sm"
                    />
                  </div>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{lang.desc}</p>
                </div>
              ))}
              
              {/* Mobility summary with clean matching slate icons */}
              <div className="bg-slate-50 dark:bg-slate-950/50 p-4 rounded-md border border-slate-200/65 dark:border-slate-800/80 mt-3 flex items-start gap-4">
                <Globe className="w-5 h-5 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-[9px] font-mono tracking-widest uppercase font-bold text-slate-400 dark:text-slate-500">Mobilité Internationale</span>
                  <p className="text-xs text-slate-605 dark:text-slate-300 leading-relaxed">
                    Localisé à Madagascar, ouvert d'esprit et disponible pour opportunités directes à distance ou relocalisation (France, Canada).
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

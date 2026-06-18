import { X, Printer, Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { contactInfo, experiences, educations, skills } from '../data';

interface ResumePrinterProps {
  onClose: () => void;
}

export default function ResumePrinter({ onClose }: ResumePrinterProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-120 bg-slate-950/40 dark:bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 overflow-y-auto print:p-0 print:bg-white print:absolute print:inset-0">
      
      {/* Outer wrapper to containerize paper view */}
      <div className="relative max-w-4xl w-full bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-300 dark:border-slate-800 shadow-xl flex flex-col max-h-[95vh] print:max-h-full print:border-none print:shadow-none print:rounded-none">
        
        {/* Interactive action header (Hidden when printing!) */}
        <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 rounded-t-md print:hidden">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-slate-800 dark:text-slate-200" />
            <span className="font-display font-bold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider">Visualisation du CV (Prêt pour Impression A4 / PDF)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans font-semibold text-xs px-5 py-2.5 rounded-sm transition cursor-pointer uppercase tracking-wider"
            >
              <Printer className="w-4 h-4" />
              Imprimer / Sauvegarder PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-505 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-10 flex justify-center bg-slate-200/50 dark:bg-slate-950/40 print:bg-white print:p-0 print:overflow-visible">
          
          {/* Printable Letter/A4 Box */}
          <div className="w-[210mm] min-h-[297mm] bg-white text-slate-950 p-10 shadow-md border border-slate-300 print:shadow-none print:border-none print:p-0 flex flex-col justify-between selection:bg-slate-100">
            
            {/* Header section */}
            <div className="border-b-2 border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="font-display font-extrabold text-3xl tracking-tighter text-slate-900 uppercase">
                  Rotsy RaharinosY
                </h1>
                <p className="font-mono text-sm tracking-widest uppercase font-bold text-slate-500 mt-1">
                  Développeur FullStack / QA & Automation
                </p>
                <p className="text-[10px] text-slate-450 mt-2 italic max-w-lg font-mono uppercase">
                  « Développeur expérimenté passionné par la création de solutions innovantes et doté d'une solide formation en ingénierie. »
                </p>
              </div>

              {/* Instant Contact bar */}
              <div className="space-y-1.5 text-xs text-slate-700 font-mono font-medium text-left sm:text-right shrink-0">
                <p className="flex sm:justify-end items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{contactInfo.email}</span>
                </p>
                <p className="flex sm:justify-end items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{contactInfo.phone}</span>
                </p>
                <p className="flex sm:justify-end items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span className="uppercase text-[9px]">Madagascar / France / Canada</span>
                </p>
                <p className="flex sm:justify-end items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[10px]">linkedin.com/in/rotsy-maminintsoa-raharinosy</span>
                </p>
              </div>
            </div>

            {/* Resume main content grid side columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 flex-1">
              
              {/* Left Column (Skills, education, languages) */}
              <div className="md:col-span-4 space-y-6">
                
                {/* Competences list */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
                    Compétences
                  </h3>
                  
                  <div className="space-y-3 text-[11px] font-mono leading-relaxed text-slate-600">
                    <div>
                      <strong className="block text-slate-800 uppercase tracking-wider">Frontend</strong>
                      <span>Vue.js, React.js, Angular, Ionic, TypeScript</span>
                    </div>
                    <div>
                      <strong className="block text-slate-800 uppercase tracking-wider">Backend</strong>
                      <span>Node.js (Express), PHP (Symfony, Laravel), GraphQL</span>
                    </div>
                    <div>
                      <strong className="block text-slate-800 uppercase tracking-wider">Bases de données</strong>
                      <span>MySQL, PostgreSQL, MongoDB, Firestore</span>
                    </div>
                    <div>
                      <strong className="block text-slate-800 uppercase tracking-wider">DevOps & Cloud</strong>
                      <span>Docker, Kubernetes, AWS, Firebase</span>
                    </div>
                    <div>
                      <strong className="block text-slate-800 uppercase tracking-wider">Tests & QA</strong>
                      <span>Cypress, Jest, PEST, E2E & Integration</span>
                    </div>
                  </div>
                </div>

                {/* Formations list */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
                    Diplômes
                  </h3>
                  
                  <div className="space-y-3">
                    {educations.map((edu) => (
                      <div key={edu.id} className="text-[11px] font-sans">
                        <span className="block font-bold text-slate-800 leading-tight">{edu.degree}</span>
                        <span className="block text-slate-500 leading-tight text-[10px]">{edu.institution}</span>
                        <span className="block text-[9px] text-slate-405 font-mono mt-0.5">{edu.period}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
                    Langues
                  </h3>
                  <div className="text-[11px] space-y-2 font-mono">
                    <div>
                      <strong className="block text-slate-800 uppercase tracking-wider">Français</strong>
                      <span className="text-slate-500">Avancé (Langue maternelle)</span>
                    </div>
                    <div>
                      <strong className="block text-slate-800 uppercase tracking-wider">Anglais</strong>
                      <span className="text-slate-500">Notions de base (Technique)</span>
                    </div>
                  </div>
                </div>

                {/* Soft skills */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
                    Atouts Humains
                  </h3>
                  <ul className="text-[10px] font-mono text-slate-500 space-y-1 list-disc list-inside">
                    <li>Stratégies QA/QC</li>
                    <li>Résolution de problèmes</li>
                    <li>Agilité & Scrum</li>
                    <li>Curiosité technologique</li>
                  </ul>
                </div>

              </div>

              {/* Right Column (Experiences) */}
              <div className="md:col-span-8 space-y-6">
                
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
                  Expériences Professionnelles
                </h3>

                <div className="space-y-5">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="space-y-1.5">
                      <div className="flex justify-between items-start text-xs font-sans">
                        <div>
                          <strong className="text-slate-900 text-sm font-display tracking-tight leading-tight">{exp.position}</strong>
                          <span className="text-slate-450 font-semibold block text-[11px]">{exp.company} | {exp.location}</span>
                        </div>
                        <span className="text-slate-800 font-mono text-[9px] font-bold uppercase tracking-wider shrink-0 whitespace-nowrap bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-sm">
                          {exp.period}
                        </span>
                      </div>

                      {/* Resume List bullets */}
                      <ul className="list-disc list-outside text-[11px] font-sans text-slate-500 pl-4 space-y-1">
                        {exp.description.map((descLine, idx) => (
                          <li key={idx}>{(descLine)}</li>
                        ))}
                      </ul>

                      {/* Stack highlights */}
                      <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider pt-0.5">
                        <strong className="text-slate-600">Stack :</strong> {exp.stack.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
              
            </div>

            {/* Footer reference label */}
            <div className="mt-8 border-t border-slate-150 pt-4 text-center text-[9px] text-slate-400 font-mono uppercase tracking-wider">
              Document généré dynamquement sur le Portfolio Digital de Rotsy Raharinosy © {new Date().getFullYear()}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

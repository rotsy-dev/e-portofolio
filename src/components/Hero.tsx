import { Mail, Phone, MapPin, Linkedin, Download, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { contactInfo, avatarUrl } from '../data';
import AnimatedCounter from './AnimatedCounter';

interface HeroProps {
  onScrollToContact: () => void;
  onOpenResumePrinter: () => void;
}

export default function Hero({ onScrollToContact, onOpenResumePrinter }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  // Handler to download Rotsy's structured CV data in custom markdown format
  const handleDownloadCV = () => {
    const cvText = `
# ROTSY RAHARINOSY
## Développeur FullStack & Ingénieur QA & Automation

### CONTACTS
- Email: ${contactInfo.email}
- Téléphone: ${contactInfo.phone}
- LinkedIn: ${contactInfo.linkedin}
- Localisation: Madagascar / France / Canada

### COMPÉTENCES TECHNIQUES
- **Frontend**: Vue.js, React.js, Angular, Ionic, TypeScript
- **Backend / Logique**: Node.js (Express), PHP (Symfony, Laravel), GraphQL
- **Databases**: MySQL, PostgreSQL, MongoDB, Firestore
- **Infrastructures & DevOps**: Docker, Kubernetes, AWS, Firebase
- **Tests & Assurance Qualité**: Cypress, Jest, PEST, E2E & Integration testing

### RESUMÉ DE CARRIÈRE
- **Lead Développeur / Lead QA**: Conception d'architectures d'intégration et supervision de pipelines de livraison continue.
- **Développeur Senior / Ingénieur QA**: Mise en production de systèmes de devis automatisés et frameworks E2E.
- **Développeur FullStack**: Développement d'outils et d'interfaçages web & mobiles haute performance.

---
Document généré et téléchargé à partir du Portfolio Interactif de Rotsy Raharinosy.
`;
    const blob = new Blob([cvText.trim()], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'CV_Rotsy_Raharinosy.md');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 transition-colors duration-300">
      {/* Delicate light background grid/border for minimalist feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status Batch */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 px-3.5 py-1.5 rounded-md w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Disponible pour Opportunités</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter text-slate-900 dark:text-white leading-[1.05]">
                ROTSY <span className="text-slate-400 dark:text-slate-500 block sm:inline">RAHARINOSY</span>
              </h1>
              <p className="font-display font-medium text-xl md:text-2xl text-slate-500 dark:text-slate-400 tracking-tight">
                Développeur FullStack
              </p>
            </motion.div>

            {/* Introductory statement */}
            <motion.p variants={itemVariants} className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl font-sans">
              « Développeur expérimenté passionné par la création de solutions innovantes et doté d'une solide formation en ingénierie. » Spécialiste de la conception backend-to-frontend robuste (Symfony, React, Vue, Node.js) et de l'automatisation de l'assurance qualité (QA).
            </motion.p>

            {/* Core Metrics Bento Cards (Animate dynamically via intersection counters!) */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-2">
              <AnimatedCounter target={5} suffix="+" label="Ans d'Expérience" />
              <AnimatedCounter target={50} prefix="+" suffix="%" label="Gain Perf. Web" />
              <AnimatedCounter target={100} suffix="%" label="Suites QA E2E" />
            </motion.div>

            {/* Contacts Info Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-slate-50/50 dark:bg-slate-900/50 p-6 rounded-lg border border-slate-200/60 dark:border-slate-800/60 max-w-2xl"
            >
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-left font-sans text-sm font-medium w-full group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-md bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:border-slate-400 dark:group-hover:border-slate-700 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{contactInfo.email}</span>
              </button>

              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-left font-sans text-sm font-medium w-full group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-md bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:border-slate-400 dark:group-hover:border-slate-700 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{contactInfo.phone}</span>
              </button>

              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-sans text-sm font-medium">
                <div className="w-8 h-8 rounded-md bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="truncate">Madagascar / France / Canada</span>
              </div>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-sans text-sm font-medium group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-md bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:border-slate-400 dark:group-hover:border-slate-700 transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>linkedin.com/in/rotsy-maminintsoa-raharinosy</span>
              </a>
            </motion.div>

            {/* Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onScrollToContact}
                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 px-7 py-3 rounded-md font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-xs cursor-pointer"
              >
                Me Contacter
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResumePrinter}
                className="flex items-center gap-2 bg-white dark:bg-slate-900 text-slate-850 dark:text-slate-100 border border-slate-300 dark:border-slate-800 hover:border-slate-800 dark:hover:border-slate-500 px-7 py-3 rounded-md font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-2xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                Visualiser & Imprimer CV
              </button>

              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 border border-dashed border-slate-300 dark:border-slate-800 hover:border-slate-800 dark:hover:border-slate-500 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-5 py-3 rounded-md font-sans font-semibold text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer"
                title="Télécharge le CV complet au format Markdown réutilisable"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>Télécharger CV au format MD</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Picture / Illustration Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center animate-fade-in"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Minimal dashed box wrapper matching case structure */}
              <div className="absolute inset-0 rounded-3xl border border-slate-200 dark:border-slate-800 animate-[spin_120s_linear_infinite]" />
              <div className="absolute inset-3 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800/80" />

              {/* Main Avatar Card Frame */}
              <div className="absolute inset-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 overflow-hidden flex items-center justify-center transition-all hover:border-slate-400 dark:hover:border-slate-700">
                <img
                  src={avatarUrl}
                  alt="Rotsy Raharinosy Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none filter dark:brightness-95 contrast-105 transition-all duration-700"
                />
              </div>

              {/* Float Mini Stats */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute top-1/10 left-[-4%] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-md shadow-xs flex items-center gap-2.5"
              >
                <span className="w-2.5 h-2.5 bg-slate-900 dark:bg-emerald-400 rounded-full" />
                <div>
                  <span className="block text-[9px] font-mono font-bold uppercase text-slate-400 dark:text-slate-505">Main Stack</span>
                  <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">Symfony & React</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-1/8 right-[-6%] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-md shadow-xs flex items-center gap-2.5"
              >
                <span className="w-2.5 h-2.5 bg-slate-400 dark:bg-slate-500 rounded-full" />
                <div>
                  <span className="block text-[9px] font-mono font-bold uppercase text-slate-400 dark:text-slate-505">Execution</span>
                  <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">QA Automation</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

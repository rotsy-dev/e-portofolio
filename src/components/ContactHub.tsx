import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, MessageSquare, Briefcase, Coffee } from 'lucide-react';
import { contactInfo } from '../data';

type ContextType = 'recruitment' | 'project' | 'chat';

export default function ContactHub() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactContext, setContactContext] = useState<ContextType>('recruitment');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Change default Subject template and placeholder when changing the context type
  useEffect(() => {
    if (contactContext === 'recruitment') {
      setSubject('Opportunité de poste / Recrutement CDI');
    } else if (contactContext === 'project') {
      setSubject('Proposition de projet / Prestation Freelance');
    } else if (contactContext === 'chat') {
      setSubject('Échange technique / Partage réseau architectural');
    }
  }, [contactContext]);

  const getPlaceholderMessage = () => {
    switch (contactContext) {
      case 'recruitment':
        return "Bonjour Rotsy, votre profil d’ingénieur d’études d’intégration / QA fullstack nous intéresse beaucoup. Nous aimerions organiser un premier échange technique...";
      case 'project':
        return "Bonjour Rotsy, j’aimerais échanger avec vous au sujet de l’automatisation de nos services backends Symfony ou d'optimisation frontend React...";
      case 'chat':
        return "Bonjour Rotsy, j’apprécie votre travail sur les architectures logicielles et l’ingénierie qualité. Échangeons ensemble au sujet de...";
      default:
        return "Écrivez votre message ici...";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Veuillez renseigner tous les champs obligatoires (*) avant de soumettre.');
      return;
    }

    if (message.length > 1000) {
      return;
    }

    setStatus('sending');
    setErrorMsg(null);

    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_KEY || '';

    if (!accessKey) {
      // Graceful fallback for demo/development with simulated sending behavior
      console.warn("VITE_WEB3FORMS_KEY is missing! Using simulated success mode.");
      setTimeout(() => {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setContactContext('recruitment');
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: subject || `Nouveau message de ${name} [${contactContext}]`,
          message: message,
          from_name: name,
          from_title: "Portfolio Rotsy",
          context: contactContext
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setContactContext('recruitment');
      } else {
        setStatus('error');
        setErrorMsg(result.message || "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg("Une erreur réseau s'est produite lors de l'envoi du message. Veuillez vérifier votre connexion.");
    }
  };

  const MAX_CHAR_COUNT = 1000;
  const isMessageTooLong = message.length > MAX_CHAR_COUNT;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Coordinates and info Card Block */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Discutons de votre projet</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tighter">
                Restons en Contact
              </h2>
              <p className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                Vous recherchez un développeur rigoureux, autonome et polyvalent ? N'hésitez pas à m'envoyer un message ou à m'appeler directement.
              </p>
            </div>

            {/* Coordinates list cards */}
            <div className="space-y-4">
              
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-md">
                <div className="w-9 h-9 rounded-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">E-mail Professionnel</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors uppercase">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-md">
                <div className="w-9 h-9 rounded-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">Téléphone Direct</span>
                  <a href={`tel:${contactInfo.phone}`} className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors uppercase">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-md">
                <div className="w-9 h-9 rounded-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">Adresse / Mobilité</span>
                  <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 uppercase">
                    Madagascar / France / Canada
                  </span>
                </div>
              </div>

            </div>

            {/* LinkedIn social footer */}
            <div className="pt-6 border-t border-slate-150 dark:border-slate-800 flex items-center gap-4">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">Suivez-moi :</span>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Contact form Block */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/40 p-6 md:p-10 rounded-md border border-slate-200 dark:border-slate-800">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4"
                >
                  <div className="w-14 h-14 rounded-sm bg-slate-900 dark:bg-white border border-slate-950 dark:border-slate-100 text-white dark:text-slate-950 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-white dark:text-slate-950" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight uppercase">Message envoyé !</h3>
                  <p className="text-xs font-mono uppercase text-slate-450 dark:text-slate-400 max-w-sm leading-relaxed mt-2">
                    Merci pour votre intérêt. Votre message a bien été transmis. Je m’engage à vous répondre sous 24h à 48h.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans font-semibold text-xs rounded-sm cursor-pointer transition-colors uppercase tracking-wider"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Dynamic interactive selector chips */}
                  <div className="space-y-2">
                    <span className="block text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Quel est le cadre de votre message ?</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setContactContext('recruitment')}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-sm border text-[11px] font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                          contactContext === 'recruitment'
                            ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-950'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-405 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <Briefcase className="w-3.5 h-3.5 shrink-0" />
                        <span>Recrutement</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setContactContext('project')}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-sm border text-[11px] font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                          contactContext === 'project'
                            ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-950'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-405 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                        <span>Prestation</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setContactContext('chat')}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-sm border text-[11px] font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                          contactContext === 'chat'
                            ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-950'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-405 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <Coffee className="w-3.5 h-3.5 shrink-0" />
                        <span>Réseau & Café</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="block text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-505">Votre Nom Complet *</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 hover:bg-slate-100/50 dark:hover:bg-slate-800/85 focus:bg-white dark:focus:bg-slate-900 text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-white px-4 py-3 rounded-sm border border-slate-202 dark:border-slate-800 focus:border-slate-950 dark:focus:border-slate-400 focus:outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="block text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-505">Adresse E-mail *</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="jean@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 hover:bg-slate-100/50 dark:hover:bg-slate-800/85 focus:bg-white dark:focus:bg-slate-900 text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-white px-4 py-3 rounded-sm border border-slate-202 dark:border-slate-800 focus:border-slate-950 dark:focus:border-slate-400 focus:outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </div>

                  </div>

                  {/* Subject input */}
                  <div className="space-y-2">
                    <label htmlFor="form-subject" className="block text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-505">Sujet de discussion</label>
                    <input
                      id="form-subject"
                      type="text"
                      placeholder="Proposition d’entretien / Projet freelance"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 hover:bg-slate-100/50 dark:hover:bg-slate-800/85 focus:bg-white dark:focus:bg-slate-900 text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-white px-4 py-3 rounded-sm border border-slate-202 dark:border-slate-800 focus:border-slate-950 dark:focus:border-slate-400 focus:outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                  </div>

                  {/* Message input */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="form-message" className="block text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-505">Votre Message *</label>
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${isMessageTooLong ? 'text-red-500' : 'text-slate-400 dark:text-slate-500'}`}>
                        {message.length} / {MAX_CHAR_COUNT} Caractères
                      </span>
                    </div>
                    <textarea
                      id="form-message"
                      required
                      rows={5}
                      placeholder={getPlaceholderMessage()}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 hover:bg-slate-100/50 dark:hover:bg-slate-800/85 focus:bg-white dark:focus:bg-slate-900 text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-white px-4 py-3 rounded-sm border border-slate-202 dark:border-slate-800 focus:border-slate-950 dark:focus:border-slate-400 focus:outline-hidden transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                    />
                  </div>

                  {/* Error handling */}
                  {status === 'error' && (
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/65 text-red-700 dark:text-red-400 text-xs font-mono uppercase rounded-sm flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg || "Veuillez renseigner tous les champs obligatoires (*) avant de soumettre."}</span>
                    </div>
                  )}

                  {isMessageTooLong && (
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/65 text-red-700 dark:text-red-400 text-xs font-mono uppercase rounded-sm flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Votre message dépasse la limite de {MAX_CHAR_COUNT} caractères. Merci de simplifier votre texte.</span>
                    </div>
                  )}

                  {/* Submit button */}
                  <div className="space-y-3">
                    <button
                      type="submit"
                      disabled={status === 'sending' || isMessageTooLong}
                      className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 disabled:bg-slate-350 dark:disabled:bg-slate-800 text-white dark:text-slate-950 font-sans font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-3xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                    </button>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}

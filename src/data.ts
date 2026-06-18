import { Experience, Education, Project, ContactInfo, Skill } from './types';

export const contactInfo: ContactInfo = {
  email: 'rotsyni@gmail.com',
  location: 'Ivato k4, Antananarivo, Madagascar / France, Canada',
  phone: '+261 34 80 350 05',
  linkedin: 'https://www.linkedin.com/in/rotsy-maminintsoa-raharinosy',
};

export const avatarUrl = '/src/assets/images/avatar_rotsy_1781686453707.png';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    position: 'Fullstack Developer',
    company: 'Menuiserie de la Grande Ile',
    location: 'Zone Industrielle Forello Tanjombato',
    period: 'Depuis nov. 2023',
    description: [
      'Développement et gestion d’une plateforme web de suivi des commandes pour +30 utilisateurs actifs, couvrant tout le processus devis → livraison.',
      'Gestion de plus de 100 commandes/mois via un système intégré de suivi en temps réel.',
      'Amélioration des performances applicatives de plus de 50% grâce à l’optimisation du code, de l’architecture et du chargement des pages.',
      'Mise en œuvre de protocoles de sécurité robustes, d’authentification sécurisée des utilisateurs et de systèmes automatisés de sauvegarde des données.',
    ],
    stack: ['Symfony', 'Ionic', 'Angular CLI', 'Node.js', 'TypeScript', 'Docker', 'PostgreSQL'],
  },
  {
    id: 'exp-2',
    position: 'QA Automation Engineer',
    company: 'SmartPredict',
    location: 'Antananarivo',
    period: 'D’oct. 2022 à nov. 2023',
    description: [
      'Conception et implémentation d’une stratégie complète de tests E2E avec Cypress, couvrant l’ensemble des parcours critiques utilisateurs.',
      'Intégration transparente de tests automatisés dans le pipeline CI/CD, réduisant de manière significative le temps de livraison et les régressions en production.',
      'Développement d’un framework de tests automatisés scalable et maintenable, facilitant l’ajout rapide de nouveaux scénarios.',
      'Optimisation des performances via Google Lighthouse et collaboration étroite avec les équipes de développement pour intégrer les meilleures pratiques QA.',
    ],
    stack: ['Cypress', 'Jest', 'JavaScript', 'TypeScript', 'GraphQL', 'Node.js', 'GitHub Actions'],
  },
  {
    id: 'exp-3',
    position: 'Développeur Fullstack',
    company: 'MANAO SIDINA',
    location: 'Fianarantsoa',
    period: 'De mai 2022 à août 2022',
    description: [
      'Développement d’une solution tableur complète et interactive pour améliorer l’efficacité des opérations bureautiques quotidiennes.',
      'Création d’une application moderne de gestion des factures et des stocks pour simplifier les processus financiers et logistiques d’entreprise.',
    ],
    stack: ['PHP CodeIgniter', 'Vue.js', 'jQuery', 'MySQL', 'Git'],
  },
  {
    id: 'exp-4',
    position: 'Administrateur de Vente',
    company: 'Airtel Madagascar',
    location: 'Antananarivo',
    period: 'De mars 2021 à nov. 2021',
    description: [
      'Supervision du cycle complet des factures et de la comptabilisation associée.',
      'Développement d’outils internes performants avec PHP/VBA Excel pour automatiser des processus financiers complexes.',
      'Encadrement direct et formation de 2 stagiaires au sein de l’équipe de gestion.',
    ],
    stack: ['PHP CodeIgniter', 'jQuery', 'MySQL', 'VBA Excel'],
  },
  {
    id: 'exp-5',
    position: 'Stagiaire Développeur',
    company: 'APMF (Agence Portuaire Maritime et Fluviale)',
    location: 'Antananarivo',
    period: 'D’avr. 2018 à oct. 2018',
    description: [
      'Conception et réalisation d’une application de gestion des trafics maritimes.',
      'Optimisation de la surveillance opérationnelle et de la sécurité des opérations portuaires majeures.',
    ],
    stack: ['Java', 'AngularJS', 'Spring MVC', 'Hibernate', 'Bootstrap', 'MySQL'],
  },
];

export const educations: Education[] = [
  {
    id: 'edu-1',
    degree: 'Master en Informatique',
    institution: 'École Nationale d’Informatique Fianarantsoa',
    period: 'D’avr. 2019 à nov. 2020',
    specialization: 'Génie logiciel et bases de données',
  },
  {
    id: 'edu-2',
    degree: 'Licence en Informatique',
    institution: 'École Nationale d’Informatique Fianarantsoa',
    period: 'D’avr. 2016 à nov. 2017',
    specialization: 'Génie logiciel et bases de données',
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Angular CLI', category: 'frontend' },
  { name: 'Ionic (Capacitor/Cordova)', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Vuex / Pinia / Redux', category: 'frontend' },

  // Backend
  { name: 'Node.js (Express)', category: 'backend' },
  { name: 'PHP (Laravel, Symfony)', category: 'backend' },
  { name: 'Spring MVC (Java)', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Hibernate', category: 'backend' },
  { name: 'API REST', category: 'backend' },

  // Databases
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Firebase Firestore', category: 'database' },

  // DevOps & Cloud
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'Firebase', category: 'devops' },

  // Tests & QA
  { name: 'Cypress', category: 'qa' },
  { name: 'Jest', category: 'qa' },
  { name: 'PEST (E2E/Unit)', category: 'qa' },
  { name: 'Integration Testing', category: 'qa' },
  { name: 'Performance Testing', category: 'qa' },

  // CI/CD & Monitoring
  { name: 'GitHub Actions', category: 'cicd' },
  { name: 'GitLab CI/CD', category: 'cicd' },
  { name: 'Google Lighthouse', category: 'cicd' },

  // Methodologies & Version Control
  { name: 'Agile / Scrum', category: 'methodology' },
  { name: 'TDD (Test-Driven Development)', category: 'methodology' },
  { name: 'Git / GitHub / GitLab', category: 'methodology' },

  // Soft Skills
  { name: 'Stratégies QA / QC', category: 'soft' },
  { name: 'Résolution de problèmes complexes', category: 'soft' },
  { name: 'Travail en équipe agile', category: 'soft' },
  { name: 'Adaptabilité & curiosité moderne', category: 'soft' },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'CommandTrack Pro',
    subtitle: 'Suivi logistique et devis en temps réel',
    description: 'Une plateforme industrielle complète développée pour la Menuiserie de la Grande Ile, optimisant la chaîne logistique du devis à la livraison.',
    longDescription: 'CommandTrack Pro centralise et automatise l’ensemble du flux de production d’une grande usine de menuiserie. Grâce à un tableau de bord dynamique et réactif, les artisans et l’équipe managériale suivent l’avancement en temps réel de chaque pièce. L’intégration de devis automatiques génère des rapports PDF instantanés et améliore drastiquement le pilotage commercial.',
    role: 'Développeur Fullstack Lead',
    challenge: 'Fluidifier l’accès aux états de livraison et de production pour plus de 30 collaborateurs actifs tout en gardant une interface simple pour le personnel en atelier.',
    outcome: 'Amélioration de plus de 50% des temps de chargement des pages et synchronisation fluide des livraisons. Plus de 100 commandes mensuelles gérées sans aucun retard logistique.',
    tags: ['Symfony', 'Angular', 'Node.js', 'Docker', 'PostgreSQL', 'Ionic'],
    features: [
      'Génération automatique de devis et facturation en un clic',
      'Suivi en temps réel des étapes de production en atelier',
      'Tableau de bord de gestion des stocks et alertes d’approvisionnement',
      'Système d’authentification sécurisé et droits d’accès sur mesure',
    ],
    category: 'fullstack',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'proj-2',
    title: 'SmartTest E2E Platform',
    subtitle: 'Framework d’automatisation de suite de tests',
    description: 'Une suite complète de test d’intégration continue et de tests de bout en bout robustes pour l’industrie analytics et IA chez SmartPredict.',
    longDescription: 'Conception d’une architecture robuste de tests d’intégration et de bout en bout (E2E) pour valider des modèles d’apprentissage automatique et des visualisations de données de pointe. Le système gère des flux de données GraphQL complexes, vérifiant le comportement de l’interface sur diverses configurations d’appareils.',
    role: 'QA Automation Engineer',
    challenge: 'Instaurer des tests stables qui s’exécutent rapidement dans le flux de déploiement CI/CD sans provoquer de faux positifs ou de goulets d’étranglement de build.',
    outcome: 'Intégration totale dans les pipelines de déploiement, réduisant de 30% le délai de livraison des correctifs et assurant l’élimination efficace des régressions critiques avant la mise en production.',
    tags: ['Cypress', 'Jest', 'GitHub Actions', 'GraphQL', 'TypeScript', 'Node.js'],
    features: [
      'Framework de test réutilisable et orienté objet pour Cypress',
      'Intégration continue avec rapports détaillés de couverture de code',
      'Analyse automatisée des performances avec Google Lighthouse intégré',
      'Simulations de latence réseau et comportements d’utilisateurs réels',
    ],
    category: 'qa',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'proj-3',
    title: 'ManaoSheet & Facture Suite',
    subtitle: 'Tableur web réactif & gestionnaire logistique',
    description: 'Une solution d’entreprise ergonomique pour faciliter la saisie bureautique et optimiser la facturation instantanée des clients.',
    longDescription: 'Créé pour automatiser les tâches comptables et le suivi des factures de MANAO SIDINA. L’application propose un tableur personnalisé permettant d’insérer et modifier instantanément des calculs de vente complexes reliés à une base de données de stock centralisée.',
    role: 'Développeur Fullstack',
    challenge: 'Fournir une interactivité proche d’Excel au sein d’un navigateur web classique, avec une mise à jour synchrone de l’état du stock.',
    outcome: 'Une interface hautement interactive adoptée instantanément par l’équipe bureautique, accélérant le traitement administratif de 40%.',
    tags: ['Vue.js', 'PHP CodeIgniter', 'MySQL', 'jQuery', 'Git'],
    features: [
      'Tableur collaboratif avec formules de calcul dynamique',
      'Suivi en temps réel des stocks avec niveau d’alerte bas',
      'Exportation instantanée des documents de facturation en formats standards',
    ],
    category: 'fullstack',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'proj-4',
    title: 'APMF MarineWatch',
    subtitle: 'Régulation et surveillance de trafic portuaire',
    description: 'Système d’information développé pour le compte de l’Agence Portuaire Maritime et Fluviale, enregistrant et sécurisant les mouvements maritimes.',
    longDescription: 'Application de planification et d’archivage sécurisé des mouvements portuaires de transport de cargaison et de passagers. Le portail fournit un journal d’historique, une prévisualisation de la charge portuaire quotidienne et des statistiques d’activité des navires.',
    role: 'Stagiaire Développeur',
    challenge: 'Construire un système d’information hautement sécurisé respectant scrupuleusement les régulations maritimes tout en restant simple d’accès.',
    outcome: 'Mise en œuvre d’un produit de niveau production permettant d’accroître la précision des heures d’accostage et d’automatiser la paperasse des capitaines.',
    tags: ['Java', 'Spring MVC', 'Hibernate', 'AngularJS', 'Bootstrap', 'MySQL'],
    features: [
      'Journal dynamique d’arrivées et de départs de navires',
      'Calcul automatique des taxes portuaires selon le volume des cargaisons',
      'Tableau de bord d’activités avec filtres avancés d’analyse',
    ],
    category: 'frontend',
    demoUrl: '#',
    codeUrl: '#',
  },
];

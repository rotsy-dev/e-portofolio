export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  stack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  specialization: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'qa' | 'cicd' | 'methodology' | 'soft';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  role: string;
  challenge: string;
  outcome: string;
  tags: string[];
  features: string[];
  category: 'fullstack' | 'frontend' | 'qa';
  demoUrl?: string;
  codeUrl?: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  phone: string;
  linkedin: string;
}

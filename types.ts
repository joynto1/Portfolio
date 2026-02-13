export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  role: string;
  demoUrl?: string;
  sourceUrl?: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; proficiency: string }[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  description?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
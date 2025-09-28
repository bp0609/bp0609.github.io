export interface Project {
  id: number;
  title: string;
  category: 'machine-learning' | 'algorithms' | 'web-development' | 'mobile' | 'iot';
  featured: boolean;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  metrics?: Record<string, string>;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  type: 'education' | 'work' | 'project';
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Theme = 'light' | 'dark';

export type FilterCategory = 'all' | 'machine-learning' | 'algorithms' | 'web-development';

export interface AnimationVariants {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  problem: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface OtherProject {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
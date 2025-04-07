// This file is kept for compatibility but all database schema has been removed
// since this is a static portfolio website that doesn't require a database

// Empty placeholder types for compatibility (not used)
// Types for Portfolio Data
export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  link: string;
}

export interface Technology {
  name: string;
  color: string;
}

export interface Skill {
  name: string;
}

export type SkillCategory = {
  title: string;
  skills: Skill[];
}

export type PortfolioData = {
  name: string;
  title: string;
  bio: string;
  skills: SkillCategory[];
  projects: Project[];
};

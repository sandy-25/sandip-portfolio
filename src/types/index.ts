/**
 * Core type definitions for the portfolio application.
 * Centralized here to ensure consistency across all components.
 */

// ================================
// Navigation
// ================================
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// ================================
// Skills
// ================================
export type SkillCategory = 'backend' | 'frontend' | 'tools';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency: number;
  yearsOfExperience?: number;
  highlight?: boolean;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  description: string;
  skills: Skill[];
  color: string;
}

// ================================
// Projects
// ================================
export type ProjectStatus = 'completed' | 'in-progress' | 'maintained';

export interface ProjectTechStack {
  backend: string[];
  frontend: string[];
  database: string[];
  tools: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  role: string;
  status: ProjectStatus;
  featured: boolean;
  techStack: ProjectTechStack;
  responsibilities: string[];
  keyAchievements: string[];
  architecture: string;
  metrics?: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  gradient: string;
  accentColor: string;
}

// ================================
// Experience
// ================================
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  companyUrl?: string;
  isCurrentRole: boolean;
  clientProject?: string;
}

// ================================
// Contact Form
// ================================
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// ================================
// Animation Variants
// ================================
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}

// ================================
// Three.js Scene
// ================================
export interface SceneConfig {
  enableOrbitControls?: boolean;
  enablePostProcessing?: boolean;
  pixelRatio?: number;
}

// ================================
// Social Links
// ================================
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

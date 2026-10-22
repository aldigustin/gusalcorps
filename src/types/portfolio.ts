export interface ProfileData {
  name: string;
  brandName: string;
  kicker: string;
  headline: string;
  tagline: string;
  bioParagraph1: string;
  bioParagraph2: string;
  bioParagraph3: string;
  degree: string;
  specialization: string;
  email: string;
  phone?: string;
  location: string;
  statusText: string;
  githubUrl: string;
  linkedinUrl: string;
  avatarUrl: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: 'Advanced' | 'Proficient' | 'Competent';
  tools: string[];
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDesc: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'it-support' | 'networking' | 'telecom' | 'digital-web';
  categoryLabel: string;
  summary: string;
  fullDescription: string;
  imageUrl: string;
  technologies: string[];
  highlights: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skillsApplied: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  major: string;
  gpaOrHonors?: string;
  coreSubjects: string[];
  capstoneProject?: string;
}

export interface PortfolioData {
  profile: ProfileData;
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
}

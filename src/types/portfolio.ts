export type SeniorityLevel = "mid" | "senior" | "lead";

export interface ProfileInfo {
  fullName: string;
  role: string;
  headline: string;
  location: string;
  seniority: SeniorityLevel;
  mainStack: string[];
  availability: string;
  summary: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "repo" | "live" | "doc";
}

export interface ProjectTechStack {
  frontend: string[];
  backend: string[];
  infra: string[];
  data: string[];
}

export interface ProjectImpact {
  summary: string;
  metrics: string[];
}

export interface ProjectCase {
  id: string;
  name: string;
  context: string;
  audience: string;
  responsibilities: string[];
  techStack: ProjectTechStack;
  architecturalDecisions: string[];
  impact: ProjectImpact;
  links: ProjectLink[];
}

export interface ExpertiseDomain {
  id: string;
  title: string;
  description: string;
  primaryTools: string[];
  depthLevel: "hands-on" | "expert" | "leading";
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  responsibilities: string[];
  technicalHighlights: string[];
  companyUrl?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
}

export interface AchievementEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: "award" | "certification" | "recognition";
}

export interface TechnologyExperience {
  id: string;
  name: string;
  category: "frontend" | "backend" | "infra" | "data" | "mobile" | "ai" | "testing" | "other";
  yearsOfExperience: number;
  monthsOfExperience: number;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert" | "leading";
  firstUsed?: string;
  lastUsed?: string;
  relatedProjects: string[];
  relatedDomains: string[];
  description?: string;
}

export interface StackFilter {
  category?: TechnologyExperience["category"];
  proficiency?: TechnologyExperience["proficiency"];
  search?: string;
}



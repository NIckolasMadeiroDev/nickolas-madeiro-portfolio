import { Translations } from "./types";
import { ProjectCase } from "@/types/portfolio";
import { ExperienceEntry } from "@/types/portfolio";

export function getTranslatedProject(project: ProjectCase, t: Translations): ProjectCase {
  const projectKey = project.id as keyof Translations["projects"];
  const translated = t.projects[projectKey];
  
  if (!translated) {
    return project;
  }

  return {
    ...project,
    name: translated.name,
    context: translated.context,
    audience: translated.audience,
    responsibilities: translated.responsibilities,
    architecturalDecisions: translated.architecturalDecisions,
    impact: {
      summary: translated.impact.summary,
      metrics: translated.impact.metrics,
    },
  };
}

export function getTranslatedExperience(experience: ExperienceEntry, t: Translations): ExperienceEntry {
  const expKey = experience.id as keyof Translations["experience"];
  const translated = t.experience[expKey];
  
  if (!translated) {
    return experience;
  }

  return {
    ...experience,
    company: translated.company,
    role: translated.role,
    responsibilities: translated.responsibilities,
    technicalHighlights: translated.technicalHighlights,
    companyUrl: experience.companyUrl,
  };
}


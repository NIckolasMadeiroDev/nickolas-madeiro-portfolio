"use client";

import { ProfileInfo, ExperienceEntry, EducationEntry, AchievementEntry, ProjectCase, ExpertiseDomain, TechnologyExperience } from "@/types/portfolio";
import { useI18n } from "@/i18n/I18nProvider";
import { formatExperience, getTotalExperienceMonths } from "@/content/technologies";

interface ResumePageProps {
  readonly profile: ProfileInfo;
  readonly experience: ExperienceEntry[];
  readonly education: EducationEntry[];
  readonly achievements: AchievementEntry[];
  readonly projects: ProjectCase[];
  readonly technologies: TechnologyExperience[];
  readonly expertiseDomains: ExpertiseDomain[];
}

export function ResumePage({
  profile,
  experience,
  education,
  achievements,
  projects,
  technologies,
  expertiseDomains,
}: ResumePageProps) {
  const { t } = useI18n();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const technologiesByCategory = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, TechnologyExperience[]>);

  Object.keys(technologiesByCategory).forEach((category) => {
    technologiesByCategory[category].sort((a, b) => {
      return getTotalExperienceMonths(b) - getTotalExperienceMonths(a);
    });
  });

  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1.5cm;
          }
          
          body {
            background: white;
            color: black;
          }
          
          .no-print {
            display: none !important;
          }
          
          .resume-container {
            max-width: 100%;
            padding: 0;
            margin: 0;
            background: white;
          }
          
          .resume-section {
            page-break-inside: avoid;
            margin-bottom: 1.2rem;
          }
          
          .resume-item {
            page-break-inside: avoid;
            margin-bottom: 0.8rem;
          }
          
          h1, h2, h3 {
            color: #111827 !important;
          }
          
          p, span, li {
            color: #374151 !important;
          }
          
          a {
            color: #111827 !important;
            text-decoration: none;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-white print:bg-white">
        <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900">
              {t.common.resume || "Currículo"}
            </h1>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.common.downloadPDF || "Baixar PDF"}
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                {t.common.print || "Imprimir"}
              </button>
            </div>
          </div>
        </div>

        <div className="resume-container max-w-4xl mx-auto px-6 py-8 print:px-8 print:py-6 bg-white">
          <header className="mb-8 pb-6 border-b-2 border-gray-300">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.fullName}</h1>
            <p className="text-lg text-gray-700 mb-2">{profile.role}</p>
            <p className="text-sm text-gray-600">{profile.location}</p>
            {profile.availability && (
              <p className="text-sm text-gray-600 mt-2">{profile.availability}</p>
            )}
          </header>

          {profile.summary && (
            <section className="resume-section mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                {t.sections.about.title || "Resumo Profissional"}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">{profile.summary}</p>
            </section>
          )}

          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              {t.sections.experience.title || "Experiência Profissional"}
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="resume-item">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-sm font-medium text-gray-700">{exp.company}</p>
                    </div>
                    <div className="text-right ml-4 shrink-0">
                      <p className="text-xs text-gray-600 whitespace-nowrap">{exp.period}</p>
                      {exp.location && (
                        <p className="text-xs text-gray-500 whitespace-nowrap">{exp.location}</p>
                      )}
                    </div>
                  </div>
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.technicalHighlights && exp.technicalHighlights.length > 0 && (
                    <p className="text-xs text-gray-600 mt-2">
                      <span className="font-medium">Stack:</span> {exp.technicalHighlights.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              {t.sections.projects.title || "Projetos Principais"}
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 6).map((project) => (
                <div key={project.id} className="resume-item">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-xs text-gray-700 mb-2">{project.context}</p>
                  {project.techStack && (
                    <div className="text-xs text-gray-600">
                      {project.techStack.frontend && project.techStack.frontend.length > 0 && (
                        <p><span className="font-medium">Frontend:</span> {project.techStack.frontend.join(", ")}</p>
                      )}
                      {project.techStack.backend && project.techStack.backend.length > 0 && (
                        <p><span className="font-medium">Backend:</span> {project.techStack.backend.join(", ")}</p>
                      )}
                    </div>
                  )}
                  {project.impact && (
                    <p className="text-xs text-gray-700 mt-1 italic">{project.impact.summary}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              {t.sections.stack.title || "Stack Técnica"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(technologiesByCategory).map(([category, techs]) => (
                <div key={category} className="resume-item">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 capitalize">
                    {category === "frontend" ? "Frontend" :
                     category === "backend" ? "Backend" :
                     category === "infra" ? "Infraestrutura" :
                     category === "data" ? "Banco de Dados" :
                     category === "mobile" ? "Mobile" :
                     category === "ai" ? "IA & ML" :
                     category === "testing" ? "Testes" : category}
                  </h3>
                  <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
                    {techs.slice(0, 8).map((tech, idx) => (
                      <span key={tech.id} className="text-xs text-gray-700">
                        {idx > 0 && <span className="text-gray-400 mx-1">•</span>}
                        {tech.name} <span className="text-gray-500">({formatExperience(tech)})</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
              {t.sections.education.title || "Formação Acadêmica"}
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="resume-item">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-sm text-gray-700">{edu.institution}</p>
                    </div>
                    {edu.period && (
                      <p className="text-xs text-gray-600 ml-4 shrink-0 whitespace-nowrap">{edu.period}</p>
                    )}
                  </div>
                  {edu.description && (
                    <p className="text-xs text-gray-600 mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {achievements.filter(a => a.type === "certification").length > 0 && (
            <section className="resume-section mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                {t.sections.achievements.title || "Certificações"}
              </h2>
              <div className="space-y-2">
                {achievements
                  .filter(a => a.type === "certification")
                  .map((cert) => (
                    <div key={cert.id} className="resume-item">
                      <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                      <p className="text-xs text-gray-600">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-xs text-gray-700 mt-1">{cert.description}</p>
                      )}
                    </div>
                  ))}
              </div>
            </section>
          )}

          {achievements.filter(a => a.type === "award" || a.type === "recognition").length > 0 && (
            <section className="resume-section mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                {t.sections.achievements.title || "Conquistas"}
              </h2>
              <div className="space-y-2">
                {achievements
                  .filter(a => a.type === "award" || a.type === "recognition")
                  .map((achievement) => (
                    <div key={achievement.id} className="resume-item">
                      <h3 className="text-sm font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-xs text-gray-600">{achievement.issuer}</p>
                      {achievement.description && (
                        <p className="text-xs text-gray-700 mt-1">{achievement.description}</p>
                      )}
                    </div>
                  ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}


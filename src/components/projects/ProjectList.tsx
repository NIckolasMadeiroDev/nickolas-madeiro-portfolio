"use client";

import { ProjectCase } from "@/types/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { getTranslatedProject } from "@/i18n/helpers";

interface ProjectListProps {
  readonly projects: ProjectCase[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const { t } = useI18n();
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {projects.map((project, index) => {
        const translatedProject = getTranslatedProject(project, t);
        const isExpanded = expandedProjects.has(translatedProject.id);
        return (
        <motion.article
          key={translatedProject.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="group relative rounded-xl border border-border-default bg-bg-secondary shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <button
            onClick={() => toggleProject(translatedProject.id)}
            className="relative w-full text-left p-4 sm:p-5 md:p-6 lg:p-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl touch-manipulation"
          >
            <header className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-text-primary leading-tight">
                      {translatedProject.name}
                    </h3>
                  </div>
                  <p className="text-[11px] xs:text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
                    <span className="font-medium">{t.common.context}:</span> {translatedProject.context}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 mt-0.5 p-1 rounded-lg hover:bg-bg-subtle transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-text-secondary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
              {!isExpanded && (
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {translatedProject.techStack.frontend.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="text-[10px] xs:text-xs px-2 py-0.5 rounded-full bg-bg-subtle text-text-secondary border border-border-default hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {translatedProject.techStack.frontend.length > 3 && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.15 }}
                        className="text-[10px] xs:text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium"
                      >
                        +{translatedProject.techStack.frontend.length - 3}
                      </motion.span>
                    )}
                  </div>
                  {translatedProject.links.length > 0 && (
                    <motion.a
                      href={translatedProject.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn inline-flex items-center justify-center gap-2 self-start mt-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-primary text-white text-[11px] xs:text-xs sm:text-sm font-medium hover:bg-primary-hover transition-all shadow-sm hover:shadow-md"
                    >
                      <span>{t.common.viewMore}</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              )}
            </header>
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 pt-0 border-t border-border-default">
                  <div className="pt-4 space-y-3">
                    <p className="text-[11px] xs:text-xs sm:text-sm text-text-secondary leading-relaxed">
                      <span className="font-medium">{t.common.audience}:</span> {translatedProject.audience}
                    </p>
                  </div>
                  <div className="mt-4 grid gap-3 sm:gap-4 text-[11px] xs:text-xs sm:text-sm text-text-secondary grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-1">
                      <p className="font-semibold text-text-primary">
                        {t.common.responsibilities}
                      </p>
                      <ul className="space-y-1">
                        {translatedProject.responsibilities.map((item) => (
                          <li key={item} className="list-inside list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-text-primary">
                          {t.common.stack}
                        </p>
                        <div className="mt-1 space-y-1">
                          <p>Frontend: {translatedProject.techStack.frontend.join(", ")}</p>
                          <p>Backend: {translatedProject.techStack.backend.join(", ")}</p>
                          <p>Infra: {translatedProject.techStack.infra.join(", ")}</p>
                          <p>Dados: {translatedProject.techStack.data.join(", ")}</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">
                          {t.common.architecturalDecisions}
                        </p>
                        <ul className="mt-1 space-y-1">
                          {translatedProject.architecturalDecisions.map((decision) => (
                            <li key={decision} className="list-inside list-disc">
                              {decision}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-text-primary">{t.common.impact}</p>
                        <p className="mt-1">{translatedProject.impact.summary}</p>
                        <ul className="mt-1 space-y-1">
                          {translatedProject.impact.metrics.map((metric) => (
                            <li key={metric} className="list-inside list-disc">
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {translatedProject.links.length > 0 ? (
                        <div className="space-y-3">
                          <p className="font-semibold text-text-primary">{t.common.viewProject}</p>
                          <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
                            {translatedProject.links.map((link) => (
                              <motion.a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group/link inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white text-xs sm:text-sm font-medium hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
                              >
                                <span>{link.label}</span>
                                <svg className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.article>
      );
      })}
    </div>
  );
}



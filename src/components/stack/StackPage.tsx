"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { technologies, formatExperience, getTotalExperienceMonths } from "@/content/technologies";
import { expertiseDomains, projectCases } from "@/content/profile";
import { TechnologyExperience, StackFilter } from "@/types/portfolio";
import { TechIcon } from "./TechIcon";
import Link from "next/link";
import { DecorativePattern } from "@/components/common/DecorativePattern";
import { SectionIcon } from "@/components/common/SectionIcon";
import { useI18n } from "@/i18n/I18nProvider";

const proficiencyColors: Record<TechnologyExperience["proficiency"], string> = {
  beginner: "bg-gray-400",
  intermediate: "bg-blue-400",
  advanced: "bg-purple-400",
  expert: "bg-green-400",
  leading: "bg-yellow-400",
};

export function StackPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<StackFilter>({});
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const categoryLabels: Record<TechnologyExperience["category"], string> = {
    frontend: t.sections.stack.categories.frontend,
    backend: t.sections.stack.categories.backend,
    infra: t.sections.stack.categories.infra,
    data: t.sections.stack.categories.data,
    mobile: t.sections.stack.categories.mobile,
    ai: t.sections.stack.categories.ai,
    testing: t.sections.stack.categories.testing,
    other: t.sections.stack.categories.other,
  };

  const proficiencyLabels: Record<TechnologyExperience["proficiency"], string> = {
    beginner: t.sections.stack.proficiencies.beginner,
    intermediate: t.sections.stack.proficiencies.intermediate,
    advanced: t.sections.stack.proficiencies.advanced,
    expert: t.sections.stack.proficiencies.expert,
    leading: t.sections.stack.proficiencies.leading,
  };

  const filteredTechnologies = useMemo(() => {
    const MIN_EXPERIENCE_MONTHS = 36; // 3 anos
    
    return technologies.filter((tech) => {
      const totalMonths = getTotalExperienceMonths(tech);
      if (totalMonths < MIN_EXPERIENCE_MONTHS) return false;
      
      if (filter.category && tech.category !== filter.category) return false;
      if (filter.proficiency && tech.proficiency !== filter.proficiency) return false;
      if (filter.search && !tech.name.toLowerCase().includes(filter.search.toLowerCase())) return false;
      if (selectedDomain && !tech.relatedDomains.includes(selectedDomain)) return false;
      return true;
    });
  }, [filter, selectedDomain]);

  const sortedTechnologies = useMemo(() => {
    return [...filteredTechnologies].sort((a, b) => {
      const aMonths = getTotalExperienceMonths(a);
      const bMonths = getTotalExperienceMonths(b);
      return bMonths - aMonths;
    });
  }, [filteredTechnologies]);

  const selectedTechnology = selectedTech ? technologies.find((t) => t.id === selectedTech) : null;

  return (
    <div className="min-h-screen">
      <section className="relative border-b border-border-default bg-bg-subtle py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-accent rounded-full blur-3xl" />
        </div>
        <DecorativePattern variant="circuit" />
        
        <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary shrink-0"
              >
                <SectionIcon type="stack" className="w-full h-full" />
              </motion.div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
                {t.sections.stack.pageTitle}
              </h1>
            </div>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
              {t.sections.stack.pageDescription}
            </p>
            <Link
              href="/#stack"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors group"
            >
              <motion.svg
                animate={{ x: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </motion.svg>
              {t.sections.stack.backToHome}
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="search-tech" className="block text-xs font-medium text-text-secondary mb-2">
                    {t.sections.stack.searchLabel}
                  </label>
                  <input
                    id="search-tech"
                    type="text"
                    value={filter.search || ""}
                    onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                    placeholder={t.sections.stack.searchPlaceholder}
                    className="w-full px-3 py-2 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="category-filter" className="block text-xs font-medium text-text-secondary mb-2">
                    {t.sections.stack.categoryLabel}
                  </label>
                  <select
                    id="category-filter"
                    value={filter.category || ""}
                    onChange={(e) => setFilter({ ...filter, category: e.target.value as TechnologyExperience["category"] || undefined })}
                    className="w-full px-3 py-2 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="">{t.sections.stack.allCategories}</option>
                    {Object.entries(categoryLabels).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="proficiency-filter" className="block text-xs font-medium text-text-secondary mb-2">
                    {t.sections.stack.proficiencyLabel}
                  </label>
                  <select
                    id="proficiency-filter"
                    value={filter.proficiency || ""}
                    onChange={(e) => setFilter({ ...filter, proficiency: e.target.value as TechnologyExperience["proficiency"] || undefined })}
                    className="w-full px-3 py-2 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="">{t.sections.stack.allProficiencies}</option>
                    {Object.entries(proficiencyLabels).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="domain-filter" className="block text-xs font-medium text-text-secondary mb-2">
                    {t.sections.stack.domainLabel}
                  </label>
                  <select
                    id="domain-filter"
                    value={selectedDomain || ""}
                    onChange={(e) => setSelectedDomain(e.target.value || null)}
                    className="w-full px-3 py-2 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="">{t.sections.stack.allDomains}</option>
                    {expertiseDomains.map((domain) => (
                      <option key={domain.id} value={domain.id}>
                        {domain.title}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => {
                    setFilter({});
                    setSelectedDomain(null);
                    setSelectedTech(null);
                  }}
                  className="w-full px-3 py-2 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary hover:bg-bg-subtle transition-colors"
                >
                  {t.sections.stack.clearFilters}
                </button>
              </motion.div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            {selectedTechnology ? (
              <TechnologyDetail
                technology={selectedTechnology}
                onClose={() => setSelectedTech(null)}
              />
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-text-secondary">
                    {sortedTechnologies.length}{" "}
                    {sortedTechnologies.length === 1
                      ? t.sections.stack.technologyFound
                      : t.sections.stack.technologiesFound}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {sortedTechnologies.map((tech, index) => (
                    <motion.button
                      key={tech.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      onClick={() => setSelectedTech(tech.id)}
                      className="group relative text-left p-4 sm:p-5 rounded-xl border border-border-default bg-bg-secondary hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer touch-manipulation overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-start gap-3 sm:gap-4">
                        <div className="shrink-0">
                          <TechIcon name={tech.name} size="sm" showLabel={false} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-sm sm:text-base font-semibold text-text-primary">
                              {tech.name}
                            </h3>
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.1, type: "spring" }}
                              className="w-1.5 h-1.5 rounded-full bg-primary"
                            />
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-bg-subtle text-text-secondary border border-border-default">
                              {categoryLabels[tech.category]}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${proficiencyColors[tech.proficiency]} text-white shadow-sm`}>
                              {proficiencyLabels[tech.proficiency]}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mb-2">
                            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xs text-text-secondary font-medium">
                              {formatExperience(tech)} {t.sections.stack.experienceLabel}
                            </p>
                          </div>
                          <p className="text-xs text-text-disabled line-clamp-2">
                            {tech.description}
                          </p>
                          {tech.relatedProjects.length > 0 && (
                            <div className="flex items-center gap-1.5 mt-2">
                              <svg className="w-3 h-3 text-text-disabled" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                              <p className="text-[10px] text-text-disabled">
                                {tech.relatedProjects.length}{" "}
                                {tech.relatedProjects.length === 1
                                  ? t.sections.stack.project
                                  : t.sections.stack.projects}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function TechnologyDetail({
  technology,
  onClose,
}: {
  readonly technology: TechnologyExperience;
  readonly onClose: () => void;
}) {
  const { t } = useI18n();
  const relatedProjects = projectCases.filter((p) => technology.relatedProjects.includes(p.id));
  const relatedDomains = expertiseDomains.filter((d) => technology.relatedDomains.includes(d.id));

  const categoryLabels: Record<TechnologyExperience["category"], string> = {
    frontend: t.sections.stack.categories.frontend,
    backend: t.sections.stack.categories.backend,
    infra: t.sections.stack.categories.infra,
    data: t.sections.stack.categories.data,
    mobile: t.sections.stack.categories.mobile,
    ai: t.sections.stack.categories.ai,
    testing: t.sections.stack.categories.testing,
    other: t.sections.stack.categories.other,
  };

  const proficiencyLabels: Record<TechnologyExperience["proficiency"], string> = {
    beginner: t.sections.stack.proficiencies.beginner,
    intermediate: t.sections.stack.proficiencies.intermediate,
    advanced: t.sections.stack.proficiencies.advanced,
    expert: t.sections.stack.proficiencies.expert,
    leading: t.sections.stack.proficiencies.leading,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <TechIcon name={technology.name} size="md" showLabel={false} />
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2">
              {technology.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-full bg-bg-subtle text-text-secondary">
                {categoryLabels[technology.category]}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${proficiencyColors[technology.proficiency]} text-white`}>
                {proficiencyLabels[technology.proficiency]}
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              {formatExperience(technology)} {t.sections.stack.experienceLabel}
            </p>
            {technology.firstUsed && technology.lastUsed && (
              <p className="text-xs text-text-disabled mt-1">
                {technology.firstUsed} - {technology.lastUsed}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-bg-subtle transition-colors touch-manipulation"
          aria-label="Fechar detalhes"
        >
          <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {technology.description && (
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-2">Sobre</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {technology.description}
          </p>
        </div>
      )}

      {relatedProjects.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3">
            Projetos relacionados ({relatedProjects.length})
          </h3>
          <div className="space-y-2">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/#projects`}
                className="block p-3 rounded-lg border border-border-default bg-bg-secondary hover:border-primary/50 transition-colors"
              >
                <p className="text-sm font-medium text-text-primary">{project.name}</p>
                <p className="text-xs text-text-secondary mt-1 line-clamp-1">
                  {project.context}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedDomains.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3">
            Domínios relacionados ({relatedDomains.length})
          </h3>
          <div className="space-y-2">
            {relatedDomains.map((domain) => (
              <div
                key={domain.id}
                className="p-3 rounded-lg border border-border-default bg-bg-secondary"
              >
                <p className="text-sm font-medium text-text-primary">{domain.title}</p>
                <p className="text-xs text-text-secondary mt-1 line-clamp-1">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}


"use client";

import { ExpertiseDomain } from "@/types/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { TechIcon } from "./TechIcon";
import { useI18n } from "@/i18n/I18nProvider";

interface ExpertiseListProps {
  readonly domains: ExpertiseDomain[];
}

export function ExpertiseList({ domains }: ExpertiseListProps) {
  const { t } = useI18n();
  const [expandedDomains, setExpandedDomains] = useState<Set<string>>(new Set());

  const toggleDomain = (domainId: string) => {
    setExpandedDomains((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(domainId)) {
        newSet.delete(domainId);
      } else {
        newSet.add(domainId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <p className="text-sm text-text-secondary">
          {t.sections.stack.exploreDescription}
        </p>
        <Link
          href="/stack"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-default bg-bg-secondary text-sm font-medium text-text-primary hover:border-primary hover:bg-bg-subtle transition-colors touch-manipulation"
        >
          {t.sections.stack.viewFullStack}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain, index) => {
          const isExpanded = expandedDomains.has(domain.id);
          return (
            <motion.article
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="group relative rounded-xl border border-border-default bg-bg-secondary shadow-sm hover:shadow-xl hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <button
                onClick={() => toggleDomain(domain.id)}
                className="relative w-full text-left p-3.5 sm:p-4 md:p-5 lg:p-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl touch-manipulation"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary-accent flex items-center justify-center shrink-0 shadow-sm"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </motion.div>
                      <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-text-primary leading-tight">
                        {domain.title}
                      </h3>
                    </div>
                    <p className="text-[11px] xs:text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {domain.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 p-1 rounded-lg hover:bg-bg-subtle transition-colors"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary"
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
                
                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 sm:h-2 bg-bg-subtle rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          domain.depthLevel === "leading"
                            ? "bg-primary"
                            : domain.depthLevel === "expert"
                            ? "bg-secondary-accent"
                            : "bg-text-disabled"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                    <span className="text-[10px] xs:text-xs text-text-primary font-medium whitespace-nowrap">
                      {domain.depthLevel === "leading"
                        ? t.common.leading
                        : domain.depthLevel === "expert"
                        ? t.common.expert
                        : t.common.practical}
                    </span>
                  </div>
                </div>

                {!isExpanded && (
                  <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-2">
                    {domain.primaryTools.slice(0, 4).map((tool) => (
                      <TechIcon key={tool} name={tool} size="sm" showLabel={false} />
                    ))}
                    {domain.primaryTools.length > 4 && (
                      <div className="w-12 h-12 rounded-lg border-2 border-border-default bg-bg-subtle flex items-center justify-center">
                        <span className="text-[10px] xs:text-xs font-bold text-text-secondary">
                          +{domain.primaryTools.length - 4}
                        </span>
                      </div>
                    )}
                  </div>
                )}
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
                    <div className="px-3.5 sm:px-4 md:px-5 lg:px-6 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 pt-0 border-t border-border-default">
                      <div className="pt-3">
                        <p className="text-[10px] xs:text-[11px] font-medium uppercase tracking-wide text-text-disabled mb-2 sm:mb-3">
                          {t.sections.stack.mainStack}
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-3">
                          {domain.primaryTools.map((tool, toolIndex) => (
                            <motion.div
                              key={tool}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: toolIndex * 0.05,
                                type: "spring",
                                stiffness: 200,
                              }}
                            >
                              <TechIcon name={tool} size="sm" showLabel={false} />
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-[10px] xs:text-xs text-text-secondary leading-relaxed break-words">
                          {domain.primaryTools.join(" • ")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { ExperienceEntry } from "@/types/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { getTranslatedExperience } from "@/i18n/helpers";

interface ExperienceListProps {
  readonly items: ExperienceEntry[];
}

export function ExperienceList({ items }: ExperienceListProps) {
  const { t } = useI18n();
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());

  const toggleEntry = (entryId: string) => {
    setExpandedEntries((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(entryId)) {
        newSet.delete(entryId);
      } else {
        newSet.add(entryId);
      }
      return newSet;
    });
  };
  
  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((entry, index) => {
        const translatedEntry = getTranslatedExperience(entry, t);
        const isExpanded = expandedEntries.has(translatedEntry.id);
        return (
        <motion.article
          key={translatedEntry.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -2 }}
          className="group relative rounded-xl border border-border-default bg-bg-secondary shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <button
            onClick={() => toggleEntry(translatedEntry.id)}
            className="relative w-full text-left p-3.5 sm:p-4 md:p-5 lg:p-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl touch-manipulation"
          >
            <header className="flex flex-col justify-between gap-2 sm:gap-1 sm:flex-row sm:items-baseline">
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                      >
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                      <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-text-primary leading-tight">
                        {translatedEntry.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
                      <p className="text-[11px] xs:text-xs sm:text-sm text-text-secondary break-words">
                        {translatedEntry.company} • {translatedEntry.location}
                      </p>
                      {translatedEntry.companyUrl && (
                        <motion.a
                          href={translatedEntry.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="shrink-0 p-1 rounded-lg hover:bg-bg-subtle transition-colors"
                          aria-label={`Visitar site da ${translatedEntry.company}`}
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
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
                <div className="flex items-center gap-2 mt-1">
                  <svg className="w-3 h-3 text-text-disabled" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[11px] xs:text-xs sm:text-sm text-text-secondary whitespace-nowrap">
                    {translatedEntry.period}
                    {translatedEntry.isCurrent && (
                      <span className="ml-1 px-1.5 py-0.5 rounded-full bg-success/10 text-success text-[10px] font-medium">
                        {t.common.current}
                      </span>
                    )}
                  </p>
                </div>
                {!isExpanded && (
                  <p className="text-[10px] xs:text-xs text-text-disabled mt-2 line-clamp-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {translatedEntry.responsibilities[0]}
                  </p>
                )}
              </div>
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
                <div className="px-3.5 sm:px-4 md:px-5 lg:px-6 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 pt-0 border-t border-border-default">
                  <div className="pt-3 grid gap-3 sm:gap-4 md:gap-6 text-[11px] xs:text-xs sm:text-sm text-text-secondary grid-cols-1 sm:grid-cols-2">
                    <div>
                      <p className="font-semibold text-text-primary mb-1.5">
                        {t.common.responsibilities}
                      </p>
                      <ul className="space-y-1">
                        {translatedEntry.responsibilities.map((item) => (
                          <li key={item} className="list-inside list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary mb-1.5">
                        {t.common.technicalHighlights}
                      </p>
                      <ul className="space-y-1">
                        {translatedEntry.technicalHighlights.map((item) => (
                          <li key={item} className="list-inside list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
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



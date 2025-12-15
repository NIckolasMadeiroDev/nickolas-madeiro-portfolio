"use client";

import { EducationEntry } from "@/types/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface EducationListProps {
  readonly items: EducationEntry[];
}

export function EducationList({ items }: EducationListProps) {
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
        const isExpanded = expandedEntries.has(entry.id);
        return (
        <motion.article
          key={entry.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -2 }}
          className="group relative rounded-xl border border-border-default bg-bg-secondary shadow-sm hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <button
            onClick={() => toggleEntry(entry.id)}
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
                        className="w-8 h-8 rounded-lg bg-secondary-accent/10 flex items-center justify-center shrink-0"
                      >
                        <svg className="w-4 h-4 text-secondary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v9M4 9v9a2 2 0 002 2h12a2 2 0 002-2V9" />
                        </svg>
                      </motion.div>
                      <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-text-primary leading-tight">
                        {entry.degree}
                      </h3>
                    </div>
                    <p className="text-[11px] xs:text-xs sm:text-sm text-text-secondary mt-0.5 sm:mt-1 break-words">
                      {entry.institution} • {entry.location}
                    </p>
                  </div>
                  {entry.description && (
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
                  )}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <svg className="w-3 h-3 text-text-disabled" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[11px] xs:text-xs sm:text-sm text-text-secondary whitespace-nowrap shrink-0">
                    {entry.period}
                  </p>
                </div>
                {!isExpanded && entry.description && (
                  <p className="text-[10px] xs:text-xs text-text-disabled mt-2 line-clamp-2 flex items-start gap-1">
                    <span className="w-1 h-1 rounded-full bg-secondary-accent mt-1.5 shrink-0" />
                    {entry.description}
                  </p>
                )}
              </div>
            </header>
          </button>
          
          <AnimatePresence>
            {isExpanded && entry.description && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-3.5 sm:px-4 md:px-5 lg:px-6 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 pt-0 border-t border-border-default">
                  <p className="pt-3 text-[11px] xs:text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {entry.description}
                  </p>
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


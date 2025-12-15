"use client";

import { AchievementEntry } from "@/types/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AchievementIcon } from "@/components/common/AchievementIcon";

interface AchievementListProps {
  readonly items: AchievementEntry[];
}

export function AchievementList({ items }: AchievementListProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const isExpanded = expandedItems.has(item.id);
        return (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -2, scale: 1.02 }}
          className="group relative rounded-xl border border-border-default bg-bg-secondary shadow-sm hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <button
            onClick={() => toggleItem(item.id)}
            className="relative w-full text-left p-3.5 sm:p-4 md:p-5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl touch-manipulation"
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary shrink-0"
              >
                <AchievementIcon type={item.type} className="w-full h-full" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[11px] xs:text-xs sm:text-sm font-semibold text-text-primary mb-0.5 sm:mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                      <svg className="w-3 h-3 text-text-disabled" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-[10px] xs:text-xs text-text-secondary break-words">
                        {item.issuer} • {item.date}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 p-1 rounded-lg hover:bg-bg-subtle transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-secondary"
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
                  <p className="text-[10px] xs:text-xs text-text-secondary leading-relaxed line-clamp-2 break-words flex items-start gap-1">
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item.description}
                  </p>
                )}
              </div>
            </div>
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
                <div className="px-3.5 sm:px-4 md:px-5 pb-3.5 sm:pb-4 md:pb-5 pt-0 border-t border-border-default">
                  <p className="pt-3 text-[10px] xs:text-xs text-text-secondary leading-relaxed break-words">
                    {item.description}
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


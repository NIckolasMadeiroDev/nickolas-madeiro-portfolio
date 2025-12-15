"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { FloatingIcon } from "@/components/common/FloatingIcon";

interface AboutSectionProps {
  readonly fullName: string;
}

export function AboutSection({ fullName }: AboutSectionProps) {
  const { t } = useI18n();
  
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 opacity-10">
        <FloatingIcon delay={0}>
          <svg className="w-32 h-32 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </FloatingIcon>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-2xl space-y-3 sm:space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed"
      >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="w-1 h-full bg-gradient-to-b from-primary to-secondary-accent rounded-full shrink-0" />
            <p>{t.sections.about.summary}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <div className="w-1 h-full bg-gradient-to-b from-secondary-accent to-primary rounded-full shrink-0" />
            <p>{t.sections.about.paragraph2}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start gap-3"
          >
            <div className="w-1 h-full bg-gradient-to-b from-primary to-secondary-accent rounded-full shrink-0" />
            <p>
              {t.sections.about.paragraph3.replace("{fullName}", fullName)}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}



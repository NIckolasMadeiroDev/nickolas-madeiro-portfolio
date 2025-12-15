"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { DecorativePattern } from "@/components/common/DecorativePattern";
import { FloatingIcon } from "@/components/common/FloatingIcon";
import { ProfileImage } from "@/components/common/ProfileImage";
import { ParallaxDevIcon } from "@/components/common/ParallaxDevIcon";
import { DevIcons } from "@/components/common/DevIcons";

interface HeroProps {
  mainStack: string[];
  availability: string;
}

export function Hero({ mainStack, availability }: HeroProps) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative border-b border-[var(--border-default)] bg-[var(--background-subtle)] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <DecorativePattern variant="dots" />
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[var(--secondary-accent)] rounded-full blur-3xl" />
        <motion.div
          animate={{
            opacity: [0.08, 0.12, 0.08],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-56 h-56 bg-[var(--secondary-accent)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-20">
          <FloatingIcon delay={0}>
            <svg className="w-16 h-16 sm:w-24 sm:h-24 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </FloatingIcon>
        </div>
        
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 opacity-20">
          <FloatingIcon delay={1}>
            <svg className="w-12 h-12 sm:w-20 sm:h-20 text-[var(--secondary-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </FloatingIcon>
        </div>

        <ParallaxDevIcon
          icon={DevIcons.terminal}
          position={{ top: "10%", right: "15%" }}
          size="medium"
          color="primary"
          delay={0.2}
          opacity={0.12}
        />
        <ParallaxDevIcon
          icon={DevIcons.database}
          position={{ bottom: "20%", right: "8%" }}
          size="small"
          color="secondary"
          delay={0.4}
          opacity={0.1}
        />
        <ParallaxDevIcon
          icon={DevIcons.server}
          position={{ top: "30%", left: "5%" }}
          size="medium"
          color="primary"
          delay={0.3}
          opacity={0.12}
        />
        <ParallaxDevIcon
          icon={DevIcons.gitBranch}
          position={{ bottom: "15%", left: "12%" }}
          size="small"
          color="secondary"
          delay={0.5}
          opacity={0.1}
        />
        <ParallaxDevIcon
          icon={DevIcons.rocket}
          position={{ top: "60%", right: "25%" }}
          size="small"
          color="primary"
          delay={0.6}
          opacity={0.1}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-2 sm:space-y-3"
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
            {t.hero.headline}
          </h1>
          <p className="text-[10px] xs:text-xs sm:text-sm text-[var(--text-disabled)]">
            {t.hero.location}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
            {t.hero.description}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-start shrink-0 md:-mt-4 md:mr-4 order-2 md:order-1"
          >
            <ProfileImage
              src="/images/profile-photo.jpg"
              alt="Nickolas Madeiro - Software Engineer"
              size="medium"
              variant="circle"
              priority
              withBorder
              withShadow
            />
          </motion.div>
          
          <div className="flex-1 max-w-2xl order-1 md:order-2">
            <div className="relative rounded-xl border border-[var(--border-default)] bg-[var(--background-secondary)] p-4 sm:p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    {t.hero.valueProposition}
                  </h3>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-1 xs:gap-1.5"
        >
            {mainStack.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative rounded-full border border-[var(--border-default)] bg-[var(--background-secondary)] px-2 py-0.5 xs:px-3 xs:py-1 text-[10px] xs:text-xs font-medium text-[var(--text-primary)] shadow-sm hover:shadow-md hover:border-[var(--primary)]/50 transition-all group"
              >
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                {item}
              </motion.span>
            ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-2.5 sm:gap-3 sm:flex-row"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:bg-[var(--primary-hover)] shadow-lg hover:shadow-xl touch-manipulation overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            {t.hero.viewProjects}
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--border-strong)] bg-[var(--background-secondary)] px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--primary)] hover:bg-[var(--background-subtle)] shadow-sm hover:shadow-md touch-manipulation"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.hero.contact}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}



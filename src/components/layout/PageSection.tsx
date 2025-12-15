"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { Translations } from "@/i18n/types";
import { DecorativePattern } from "@/components/common/DecorativePattern";
import { SectionIcon } from "@/components/common/SectionIcon";
import { ParallaxDevIcon } from "@/components/common/ParallaxDevIcon";
import { DevIcons } from "@/components/common/DevIcons";

type SectionIconType = "projects" | "stack" | "experience" | "education" | "achievements" | "about" | "contact";

interface PageSectionProps {
  readonly id: string;
  readonly titleKey: keyof Translations["sections"];
  readonly children: ReactNode;
  readonly pattern?: "dots" | "grid" | "waves" | "circuit";
}

export function PageSection({ id, titleKey, children, pattern = "dots" }: PageSectionProps) {
  const { t } = useI18n();
  const section = t.sections[titleKey];
  const title = section.title;
  const subtitle = section.subtitle;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const getSectionIcons = () => {
    const iconMap: Record<string, { icon: React.ReactNode; positions: Array<{ top?: string; right?: string; bottom?: string; left?: string }> }> = {
      projects: {
        icon: DevIcons.rocket,
        positions: [
          { top: "15%", right: "8%" },
          { bottom: "20%", left: "5%" },
        ],
      },
      stack: {
        icon: DevIcons.cpu,
        positions: [
          { top: "20%", right: "10%" },
          { bottom: "25%", left: "8%" },
        ],
      },
      experience: {
        icon: DevIcons.server,
        positions: [
          { top: "25%", left: "6%" },
          { bottom: "15%", right: "12%" },
        ],
      },
      education: {
        icon: DevIcons.shield,
        positions: [
          { top: "18%", right: "7%" },
        ],
      },
      achievements: {
        icon: DevIcons.zap,
        positions: [
          { top: "22%", left: "9%" },
          { bottom: "18%", right: "6%" },
        ],
      },
      about: {
        icon: DevIcons.cube,
        positions: [
          { top: "20%", right: "8%" },
        ],
      },
      contact: {
        icon: DevIcons.cloud,
        positions: [
          { top: "15%", left: "7%" },
          { bottom: "20%", right: "9%" },
        ],
      },
    };
    return iconMap[titleKey] || { icon: DevIcons.codeBrackets, positions: [{ top: "20%", right: "10%" }] };
  };

  const sectionIcons = getSectionIcons();

  return (
    <section
      ref={ref}
      id={id}
      className="relative scroll-mt-20 sm:scroll-mt-24 border-b border-border-default py-8 sm:py-10 md:py-14 lg:py-16 overflow-hidden"
    >
      <motion.div style={{ opacity }} className="absolute inset-0">
        <DecorativePattern variant={pattern} />
      </motion.div>
      
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-10 right-10 w-48 h-48 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary-accent rounded-full blur-3xl" />
      </motion.div>

      {sectionIcons.positions.map((position, index) => {
        const positionKey = `${Object.values(position).join("-")}-${index}`;
        return (
          <ParallaxDevIcon
            key={positionKey}
            icon={sectionIcons.icon}
            position={position}
            size={index % 2 === 0 ? "small" : "medium"}
            color={index % 2 === 0 ? "primary" : "secondary"}
            delay={index * 0.2}
            opacity={0.08}
            speed={0.3}
          />
        );
      })}
      
      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 sm:gap-5 md:gap-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary shrink-0"
            >
              <SectionIcon 
                type={titleKey as SectionIconType} 
                className="w-full h-full" 
              />
            </motion.div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-text-primary">
              {title}
            </h2>
          </div>
          {subtitle ? (
            <p className="mt-2 text-sm sm:text-base text-text-secondary leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}



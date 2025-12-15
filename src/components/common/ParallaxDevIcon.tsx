"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDevIconProps {
  readonly icon: React.ReactNode;
  readonly position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  readonly size?: "small" | "medium" | "large";
  readonly color?: "primary" | "secondary" | "accent";
  readonly delay?: number;
  readonly speed?: number;
  readonly opacity?: number;
}

const sizeMap = {
  small: "w-8 h-8 sm:w-10 sm:h-10",
  medium: "w-12 h-12 sm:w-16 sm:h-16",
  large: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
};

const colorMap = {
  primary: "text-[var(--primary)]",
  secondary: "text-[var(--secondary-accent)]",
  accent: "text-[var(--primary)]",
};

export function ParallaxDevIcon({
  icon,
  position,
  size = "medium",
  color = "primary",
  delay = 0,
  speed = 0.5,
  opacity = 0.15,
}: ParallaxDevIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  const positionClasses = Object.entries(position)
    .map(([key, value]) => `${key}-[${value}]`)
    .join(" ");

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate, scale }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${positionClasses} ${sizeMap[size]} ${colorMap[color]} pointer-events-none`}
    >
      {icon}
    </motion.div>
  );
}


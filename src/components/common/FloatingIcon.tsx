"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingIconProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly duration?: number;
  readonly className?: string;
}

export function FloatingIcon({ children, delay = 0, duration = 3, className = "" }: FloatingIconProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}


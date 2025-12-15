"use client";

import { motion } from "framer-motion";

interface DecorativePatternProps {
  readonly variant?: "dots" | "grid" | "waves" | "circuit";
  readonly className?: string;
}

export function DecorativePattern({ variant = "dots", className = "" }: DecorativePatternProps) {
  const patterns = {
    dots: (
      <svg className="absolute inset-0 w-full h-full opacity-5" aria-hidden="true">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    ),
    grid: (
      <svg className="absolute inset-0 w-full h-full opacity-5" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    ),
    waves: (
      <svg className="absolute inset-0 w-full h-full opacity-5" aria-hidden="true">
        <defs>
          <pattern id="waves" width="100" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 0 10 Q 25 0, 50 10 T 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    ),
    circuit: (
      <svg className="absolute inset-0 w-full h-full opacity-5" aria-hidden="true">
        <defs>
          <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2" fill="currentColor" />
            <circle cx="55" cy="5" r="2" fill="currentColor" />
            <circle cx="5" cy="55" r="2" fill="currentColor" />
            <circle cx="55" cy="55" r="2" fill="currentColor" />
            <path d="M 5 5 L 55 5 M 5 5 L 5 55 M 55 5 L 55 55" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    ),
  };

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {patterns[variant]}
    </motion.div>
  );
}


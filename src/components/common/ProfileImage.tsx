"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProfileImageProps {
  readonly src: string;
  readonly alt: string;
  readonly size?: "small" | "medium" | "large" | "xlarge";
  readonly variant?: "circle" | "rounded" | "square";
  readonly className?: string;
  readonly priority?: boolean;
  readonly withBorder?: boolean;
  readonly withShadow?: boolean;
}

const sizeMap = {
  small: { width: 80, height: 80, className: "w-20 h-20" },
  medium: { width: 160, height: 160, className: "w-40 h-40" },
  large: { width: 240, height: 240, className: "w-60 h-60" },
  xlarge: { width: 320, height: 320, className: "w-80 h-80" },
};

const variantMap = {
  circle: "rounded-full",
  rounded: "rounded-2xl",
  square: "rounded-lg",
};

export function ProfileImage({
  src,
  alt,
  size = "medium",
  variant = "circle",
  className = "",
  priority = false,
  withBorder = false,
  withShadow = true,
}: ProfileImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const sizeConfig = sizeMap[size];
  const variantClass = variantMap[variant];

  const borderClass = withBorder
    ? "border-2 border-[var(--border-strong)]"
    : "";

  const shadowClass = withShadow ? "shadow-lg" : "";

  if (hasError) {
    return (
      <div
        className={`${sizeConfig.className} ${variantClass} ${borderClass} ${shadowClass} ${className} bg-[var(--background-secondary)] flex items-center justify-center`}
      >
        <svg
          className="w-1/2 h-1/2 text-[var(--text-disabled)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isLoading ? 0.5 : 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`relative ${sizeConfig.className} ${variantClass} ${borderClass} ${shadowClass} ${className} overflow-hidden`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-[var(--background-secondary)] animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        width={sizeConfig.width}
        height={sizeConfig.height}
        priority={priority}
        className={`${variantClass} object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--secondary-accent)]/10 pointer-events-none" />
    </motion.div>
  );
}


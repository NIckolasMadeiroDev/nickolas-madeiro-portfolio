"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type TechIconSize = "sm" | "md" | "lg";

interface TechIconProps {
  name: string;
  size?: TechIconSize;
  showLabel?: boolean;
}

function getIconSize(size: TechIconSize) {
  if (size === "sm") return 24;
  if (size === "lg") return 48;
  return 32;
}

function renderTechIcon(name: string, size: TechIconSize) {
  const dimension = getIconSize(size);

  switch (name) {
    case "React":
    case "React Native":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "Next.js":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#0F172A" />
          <path d="M8 8h2v8H8zM12 8h2l4 8h-2z" fill="#F8FAFC" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#3178C6" />
          <text
            x="12"
            y="15"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#F8FAFC"
          >
            TS
          </text>
        </svg>
      );
    case "JavaScript":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#F7DF1E" />
          <text
            x="12"
            y="15"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#0F172A"
          >
            JS
          </text>
        </svg>
      );
    case "Node.js":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2 4 6v8l8 4 8-4V6z" fill="#339933" />
          <text
            x="12"
            y="14"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#F8FAFC"
          >
            Node
          </text>
        </svg>
      );
    case "NestJS":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#E0234E" />
          <path
            d="M8 16c3 1 6-1 7-4.5C16 8 14 6 12 5"
            fill="none"
            stroke="#F8FAFC"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Angular":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2 4 6l2 12 6 4 6-4 2-12z" fill="#DD0031" />
          <path d="M12 6 9 15h2l1-3h2l1 3h2z" fill="#F8FAFC" />
        </svg>
      );
    case "Spring":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#6DB33F" />
          <path
            d="M8 13c1 2 3 3 5.5 2.5C16 15 17 13 17 11c0-1-.5-2-1.5-2.5"
            fill="none"
            stroke="#F8FAFC"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="3" fill="#336791" />
          <circle cx="10" cy="11" r="3" fill="#F8FAFC" />
          <path
            d="M14 9c1.5 0 3 1 3 3s-1.5 3-3 3"
            fill="none"
            stroke="#F8FAFC"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "AWS":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#020617" />
          <path
            d="M6 14c2 2 4 3 6 3s4-1 6-3"
            fill="none"
            stroke="#FF9900"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <text
            x="12"
            y="11"
            textAnchor="middle"
            fontSize="7"
            fontWeight="bold"
            fill="#FF9900"
          >
            aws
          </text>
        </svg>
      );
    case "Docker":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="11" width="14" height="5" rx="1" fill="#2496ED" />
          <rect x="6" y="8" width="3" height="3" fill="#2496ED" />
          <rect x="10" y="8" width="3" height="3" fill="#2496ED" />
          <rect x="14" y="8" width="3" height="3" fill="#2496ED" />
        </svg>
      );
    case "Tailwind CSS":
    case "Tailwind":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path
            d="M4 14c1.5-3 3-4 5-4 3 0 3 2 5 2 1.5 0 3-1 4-3-1.5 3-3 4-5 4-3 0-3-2-5-2-1.5 0-3 1-4 3z"
            fill="#06B6D4"
          />
        </svg>
      );
    case "Java":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#ED8B00" />
          <path
            d="M8 8h8v2H8zm0 3h8v2H8zm0 3h6v2H8z"
            fill="#F8FAFC"
          />
        </svg>
      );
    case "Python":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#3776AB" />
          <path
            d="M9 8c1 0 2 1 2 2v2c0 1-1 2-2 2H7c-1 0-2-1-2-2v-2c0-1 1-2 2-2h2zm8 0c1 0 2 1 2 2v2c0 1-1 2-2 2h-2c-1 0-2-1-2-2v-2c0-1 1-2 2-2h2z"
            fill="#FFD43B"
          />
        </svg>
      );
    case "TensorFlow":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path
            d="M4 4h16v16H4z"
            fill="#FF6F00"
          />
          <path
            d="M8 8h8v8H8z"
            fill="#F8FAFC"
          />
        </svg>
      );
    case "MongoDB":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 2C8 2 6 4 6 8c0 4 2 6 6 6s6-2 6-6c0-4-2-6-6-6z"
            fill="#47A248"
          />
          <path
            d="M12 14c-4 0-6 2-6 6s2 6 6 6 6-2 6-6-2-6-6-6z"
            fill="#47A248"
          />
        </svg>
      );
    case "Oracle":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#F80000" />
          <path
            d="M8 12h8M12 8v8"
            stroke="#F8FAFC"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Kafka":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#231F20" />
          <circle cx="9" cy="12" r="2" fill="#F8FAFC" />
          <circle cx="15" cy="12" r="2" fill="#F8FAFC" />
        </svg>
      );
    case "Keycloak":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#ED8B00" />
          <path
            d="M8 8h8v8H8z"
            fill="#F8FAFC"
            fillOpacity="0.3"
          />
        </svg>
      );
    case "Kotlin":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path
            d="M4 4l8 8-8 8V4z"
            fill="#7F52FF"
          />
          <path
            d="M12 4l8 8-8 8V4z"
            fill="#0095D5"
          />
        </svg>
      );
    case "Ktor":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#000000" />
          <path
            d="M8 8h8v2H8zm0 3h8v2H8zm0 3h6v2H8z"
            fill="#7F52FF"
          />
        </svg>
      );
    case "CI/CD":
    case "CI":
    case "CD":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="#2563EB" strokeWidth="1.5" />
          <path
            d="M8 12l3 3 5-6"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "IA":
    case "AI":
    case "Chatbots":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="#0EA5E9" strokeWidth="1.5" />
          <circle cx="9" cy="10" r="1.5" fill="#0EA5E9" />
          <circle cx="15" cy="10" r="1.5" fill="#0EA5E9" />
          <path
            d="M9 14c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Liquibase":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#2968B0" />
          <path d="M8 8h8v2H8zm0 3h8v2H8zm0 3h6v2H8z" fill="#F8FAFC" />
        </svg>
      );
    case "Maven":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path d="M4 4h16v16H4z" fill="#C71A36" />
          <path d="M8 8h8v8H8z" fill="#F8FAFC" />
          <circle cx="12" cy="12" r="2" fill="#C71A36" />
        </svg>
      );
    case "JUnit":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#25A162" />
          <path d="M8 12h8M12 8v8" stroke="#F8FAFC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Mockito":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#78C257" />
          <path d="M8 10h8v4H8z" fill="#F8FAFC" />
        </svg>
      );
    case "SCSS":
    case "SASS":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#CF649A" />
          <path d="M9 8h6v2H9zm0 3h6v2H9zm0 3h4v2H9z" fill="#F8FAFC" />
        </svg>
      );
    case "Karma":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#0A9FD8" />
          <circle cx="9" cy="12" r="2" fill="#F8FAFC" />
          <circle cx="15" cy="12" r="2" fill="#F8FAFC" />
        </svg>
      );
    case "Jasmine":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#8A4182" />
          <path d="M9 10h6v4H9z" fill="#F8FAFC" />
        </svg>
      );
    case "Rancher":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#0075A8" />
          <path d="M8 8h8v8H8z" fill="#F8FAFC" fillOpacity="0.3" />
          <circle cx="12" cy="12" r="3" fill="#0075A8" />
        </svg>
      );
    case "MariaDB":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="3" fill="#C49A3C" />
          <circle cx="10" cy="11" r="3" fill="#F8FAFC" />
          <path d="M14 9c1.5 0 3 1 3 3s-1.5 3-3 3" fill="none" stroke="#F8FAFC" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "WebGate":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#2563EB" />
          <path d="M8 8h8v2H8zm0 3h8v2H8zm0 3h6v2H8z" fill="#F8FAFC" />
        </svg>
      );
    case "Kubernetes":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2L4 7v10l8 5 8-5V7z" fill="#326CE5" />
          <path d="M12 2v5l8 5M12 7L4 12M12 17l8-5M12 17v5l-8-5M12 22l8-5" fill="none" stroke="#F8FAFC" strokeWidth="1.2" />
        </svg>
      );
    case "AWS Cognito":
    case "Cognito":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#FF9900" />
          <path d="M8 10h8v2H8zm0 3h8v2H8z" fill="#020617" />
          <circle cx="12" cy="8" r="1.5" fill="#020617" />
        </svg>
      );
    case "AWS Route53":
    case "Route53":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#8C4FFF" />
          <path d="M8 12h8M12 8v8" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="#F8FAFC" />
        </svg>
      );
    case "WordPress":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#21759B" />
          <path d="M12 6c-3 0-5 2-5 5 0 2 1 3 2 4l1-3c0-1 1-2 2-2s2 1 2 2l1 3c1-1 2-2 2-4 0-3-2-5-5-5z" fill="#F8FAFC" />
        </svg>
      );
    case "Spring Framework":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="#6DB33F" />
          <path
            d="M8 13c1 2 3 3 5.5 2.5C16 15 17 13 17 11c0-1-.5-2-1.5-2.5"
            fill="none"
            stroke="#F8FAFC"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "NodeJS":
    case "Node":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2 4 6v8l8 4 8-4V6z" fill="#339933" />
          <text
            x="12"
            y="14"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#F8FAFC"
          >
            Node
          </text>
        </svg>
      );
    case "testing":
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="#10B981" strokeWidth="1.5" />
          <path d="M8 12l2 2 4-4" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();
      
      return (
        <svg width={dimension} height={dimension} viewBox="0 0 24 24" aria-hidden>
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="4"
            fill="#64748B"
            fillOpacity="0.1"
            stroke="#64748B"
            strokeWidth="1.5"
          />
          <text
            x="12"
            y="15"
            textAnchor="middle"
            fontSize={dimension <= 24 ? "8" : dimension <= 32 ? "10" : "12"}
            fontWeight="bold"
            fill="#64748B"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {initials || "?"}
          </text>
        </svg>
      );
  }
}

export function TechIcon({ name, size = "md", showLabel = true }: TechIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-2 group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <motion.div
        className={`
          ${sizeClasses[size]}
          rounded-lg border-2 border-[var(--border-default)]
          bg-[var(--background-secondary)]
          flex items-center justify-center
          cursor-pointer
          transition-all duration-300
          group-hover:border-[var(--primary)]
          group-hover:shadow-lg
          group-hover:bg-[var(--background-subtle)]
        `}
        animate={{
          rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        {renderTechIcon(name, size)}
      </motion.div>
      {showLabel && (
        <motion.span
          className="text-xs text-[var(--text-secondary)] font-medium"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {name}
        </motion.span>
      )}
    </motion.div>
  );
}

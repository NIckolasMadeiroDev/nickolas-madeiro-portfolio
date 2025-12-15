"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Locale, localeFlags, localeNames } from "@/i18n/index";
import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LANGUAGES: Locale[] = ["pt", "en", "es"] as const;

export const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (lang: Locale) => {
      setLocale(lang);
      setIsOpen(false);
    },
    [setLocale]
  );

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const currentFlag = useMemo(() => localeFlags[locale], [locale]);
  const currentName = useMemo(() => localeNames[locale], [locale]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-border-default bg-bg-secondary px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium text-text-primary transition-all hover:bg-bg-subtle hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:ring-offset-bg-secondary touch-manipulation"
        aria-label={`Select language. Current: ${currentName}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-base sm:text-lg" aria-hidden="true">
          {currentFlag}
        </span>
        <span className="hidden xs:inline text-[10px] sm:text-xs">{currentName}</span>
        <svg
          className={`w-3 h-3 sm:w-4 sm:h-4 text-text-secondary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-44 sm:w-48 rounded-lg border border-border-default bg-bg-secondary shadow-lg z-50 overflow-hidden backdrop-blur-sm"
          >
            <div className="py-0.5 sm:py-1">
              {LANGUAGES.map((lang) => {
                const isSelected = locale === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => handleSelect(lang)}
                    className={`
                      w-full flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm transition-colors touch-manipulation
                      ${
                        isSelected
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
                      }
                    `}
                    aria-label={`Select ${localeNames[lang]}`}
                    aria-pressed={isSelected}
                  >
                    <span className="text-lg sm:text-xl" aria-hidden="true">
                      {localeFlags[lang]}
                    </span>
                    <span className="flex-1 text-left">{localeNames[lang]}</span>
                    {isSelected && (
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});


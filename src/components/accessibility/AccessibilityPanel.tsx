"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { VLibrasWidget } from "./VLibrasWidget";

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  letterSpacing: boolean;
  lineHeight: boolean;
  libras: boolean;
}

const STORAGE_KEY = "portfolio-accessibility";

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  letterSpacing: false,
  lineHeight: false,
  libras: false,
};

const loadSettingsFromStorage = (): AccessibilitySettings => {
  if (typeof window === "undefined") {
    return defaultSettings;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return defaultSettings;
  }

  try {
    const parsed = JSON.parse(stored);
    return {
      fontSize: parsed.fontSize ?? defaultSettings.fontSize,
      highContrast: parsed.highContrast ?? defaultSettings.highContrast,
      letterSpacing: parsed.letterSpacing ?? defaultSettings.letterSpacing,
      lineHeight: parsed.lineHeight ?? defaultSettings.lineHeight,
      libras: parsed.libras ?? defaultSettings.libras,
    };
  } catch {
    return defaultSettings;
  }
};

export function AccessibilityPanel() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(loadSettingsFromStorage);

  const applySettings = (newSettings: AccessibilitySettings) => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    const html = document.documentElement;
    
    root.style.setProperty("--accessibility-font-size", `${newSettings.fontSize}`);
    
    if (newSettings.highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    if (newSettings.letterSpacing) {
      html.dataset.accessibilityLetterSpacing = "true";
    } else {
      delete html.dataset.accessibilityLetterSpacing;
    }

    if (newSettings.lineHeight) {
      html.dataset.accessibilityLineHeight = "true";
    } else {
      delete html.dataset.accessibilityLineHeight;
    }
  };

  useEffect(() => {
    applySettings(settings);
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    }
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <>
      <VLibrasWidget enabled={settings.libras} />
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--primary)] text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group touch-manipulation"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Acessibilidade"
        aria-expanded={isOpen}
        style={{ fontSize: "inherit" }}
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--secondary-accent)] rounded-full border-2 border-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-20 left-4 sm:bottom-24 sm:left-6 z-50 w-[calc(100vw-2rem)] max-w-80 sm:max-w-96 bg-[var(--background-secondary)] border border-[var(--border-default)] rounded-xl shadow-2xl p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Acessibilidade
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-[var(--background-subtle)] transition-colors"
                  aria-label="Fechar"
                >
                  <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">
                      Tamanho da fonte
                    </label>
                    <span className="text-xs text-[var(--text-secondary)]">
                      {settings.fontSize}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateSetting("fontSize", Math.max(75, settings.fontSize - 10))}
                      className="w-8 h-8 rounded-lg border border-[var(--border-default)] bg-[var(--background-subtle)] hover:bg-[var(--background-primary)] flex items-center justify-center transition-colors"
                      aria-label="Diminuir fonte"
                    >
                      <svg className="w-4 h-4 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                      </svg>
                    </button>
                    <div className="flex-1 h-2 bg-[var(--background-subtle)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--primary)] rounded-full transition-all"
                        style={{ width: `${((settings.fontSize - 75) / (150 - 75)) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={() => updateSetting("fontSize", Math.min(150, settings.fontSize + 10))}
                      className="w-8 h-8 rounded-lg border border-[var(--border-default)] bg-[var(--background-subtle)] hover:bg-[var(--background-primary)] flex items-center justify-center transition-colors"
                      aria-label="Aumentar fonte"
                    >
                      <svg className="w-4 h-4 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-default)] hover:bg-[var(--background-subtle)] cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        Alto contraste
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={Boolean(settings.highContrast)}
                      onChange={(e) => updateSetting("highContrast", e.target.checked)}
                      className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-default)] hover:bg-[var(--background-subtle)] cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        Espaçamento entre letras
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={Boolean(settings.letterSpacing)}
                      onChange={(e) => updateSetting("letterSpacing", e.target.checked)}
                      className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-default)] hover:bg-[var(--background-subtle)] cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        Espaçamento entre linhas
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={Boolean(settings.lineHeight)}
                      onChange={(e) => updateSetting("lineHeight", e.target.checked)}
                      className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-default)] hover:bg-[var(--background-subtle)] cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        Tradutor LIBRAS (VLibras)
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={Boolean(settings.libras)}
                      onChange={(e) => updateSetting("libras", e.target.checked)}
                      className="w-5 h-5 rounded border-[var(--border-default)] text-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </label>
                </div>

                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 rounded-lg border border-[var(--border-default)] bg-[var(--background-subtle)] text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--background-primary)] transition-colors"
                >
                  Redefinir configurações
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


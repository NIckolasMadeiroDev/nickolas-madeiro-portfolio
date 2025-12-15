"use client";

import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const label = theme === "dark" ? "Tema claro" : "Tema escuro";
  const icon = theme === "dark" ? "☀️" : "🌙";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-full border border-border-default bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-primary hover:text-text-primary"
    >
      <span aria-hidden>{icon}</span>
      <span className="hidden sm:inline">
        {theme === "dark" ? "Claro" : "Escuro"}
      </span>
    </button>
  );
}



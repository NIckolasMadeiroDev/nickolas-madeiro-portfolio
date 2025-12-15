import { Locale, Translations } from "./types";
import { pt } from "./locales/pt";
import { en } from "./locales/en";
import { es } from "./locales/es";

export type { Locale, Translations } from "./types";

export const translations: Record<Locale, Translations> = {
  pt,
  en,
  es,
};

export const defaultLocale: Locale = "pt";

export const supportedLocales: Locale[] = ["pt", "en", "es"];

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};


"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export function SiteFooter() {
  const { t } = useI18n();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-default bg-bg-secondary/50 backdrop-blur-sm">
      <div className="w-full px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
            <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:items-center sm:gap-3">
              <p className="text-xs text-text-secondary">
                © {currentYear} {t.footer.copyright}
              </p>
              <span className="hidden sm:inline text-text-disabled">•</span>
              <p className="text-xs text-text-disabled">
                {t.footer.rights}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-disabled">
                {t.footer.poweredBy}
              </span>
              <Link
                href="https://www.linkedin.com/in/nickolas-madeiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-primary"
              >
                <span className="relative">
                  Nickolas Madeiro
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full" />
                </span>
                <svg
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


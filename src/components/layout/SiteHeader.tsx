"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ChatbotButton } from "@/components/chatbot/Chatbot";
import { useI18n } from "@/i18n/I18nProvider";

interface SiteHeaderProps {
  readonly fullName: string;
  readonly role: string;
}

export function SiteHeader({ fullName, role }: SiteHeaderProps) {
  const { t } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SECTION_LINKS = [
    { href: "/#projects", label: t.nav.projects },
    { href: "/stack", label: t.nav.stack },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#education", label: t.nav.education },
    { href: "/#achievements", label: t.nav.achievements },
    { href: "/#about", label: t.nav.about },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border-default bg-bg-secondary/95 backdrop-blur-md">
      <div className="w-full px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 lg:px-8 xl:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-8">
          <div className="flex flex-col min-w-0 shrink-0 max-w-[60%] sm:max-w-none">
            <span className="text-[10px] xs:text-xs font-medium uppercase tracking-wide text-text-disabled truncate">
              {role}
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-text-primary truncate">
              {fullName}
            </span>
          </div>
          
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8 text-sm text-text-secondary">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-text-primary px-1 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 px-2.5 py-1 text-[10px] xs:text-xs font-medium text-[#22C55E]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
                <span className="hidden sm:inline">Open to Work</span>
                <span className="sm:hidden">Disponível</span>
              </div>
              <Link
                href="#contact"
                className="rounded-full bg-primary px-3 py-1.5 md:px-4 md:py-2 text-[10px] xs:text-xs font-medium text-white transition-colors hover:bg-primary-hover whitespace-nowrap"
              >
                {t.nav.availability}
              </Link>
            </div>
            <ChatbotButton />
            <LanguageSwitcher />
            <ThemeToggle />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-bg-subtle transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-border-default pt-3">
            <div className="flex flex-col gap-1.5">
              {SECTION_LINKS.map((link) => {
                const isExternal = link.href.startsWith("http");
                const Component = isExternal ? "a" : Link;
                const props = isExternal
                  ? { href: link.href, target: "_blank", rel: "noreferrer" }
                  : { href: link.href };
                return (
                  <Component
                    key={link.href}
                    {...props}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-subtle rounded-lg transition-colors touch-manipulation"
                  >
                    {link.label}
                  </Component>
                );
              })}
              <div className="xs:hidden px-3 pt-2">
                <LanguageSwitcher />
              </div>
              <div className="px-3 pt-2">
                <ChatbotButton />
              </div>
              <div className="mx-3 mt-1.5 flex items-center justify-center gap-2 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 px-4 py-2.5 text-xs font-medium text-[#22C55E]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
                <span>Open to Work</span>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-3 mt-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-medium text-white text-center transition-colors hover:bg-primary-hover touch-manipulation"
              >
                {t.nav.availability}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}


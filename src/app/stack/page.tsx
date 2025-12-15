import { StackPage } from "@/components/stack/StackPage";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { profileInfo } from "@/content/profile";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nickolasmadeiro.dev";

export const metadata: Metadata = {
  title: "Stack Técnica & Expertise | Nickolas Madeiro",
  description:
    "Explore as tecnologias, ferramentas e experiência técnica de Nickolas Madeiro. Especialista em Next.js, React, Node.js, NestJS, AWS, Docker, Kubernetes e Inteligência Artificial.",
  keywords: [
    "stack técnica",
    "tecnologias",
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "expertise técnica",
    "ferramentas de desenvolvimento",
  ],
  alternates: {
    canonical: "/stack",
  },
  openGraph: {
    title: "Stack Técnica & Expertise | Nickolas Madeiro",
    description:
      "Explore as tecnologias, ferramentas e experiência técnica de Nickolas Madeiro. Especialista em desenvolvimento full-stack e arquitetura de sistemas.",
    url: `${SITE_URL}/stack`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Stack Técnica & Expertise | Nickolas Madeiro",
    description:
      "Explore as tecnologias, ferramentas e experiência técnica de Nickolas Madeiro.",
  },
};

export default function StackRoute() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)]">
      <SiteHeader fullName={profileInfo.fullName} role={profileInfo.role} />
      <main>
        <StackPage />
      </main>
    </div>
  );
}


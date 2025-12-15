import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { Hero } from "@/components/home/Hero";
import { PageSection } from "@/components/layout/PageSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ProjectList } from "@/components/projects/ProjectList";
import { ExpertiseList } from "@/components/stack/ExpertiseList";
import { AchievementList } from "@/components/achievements/AchievementList";
import { EducationList } from "@/components/education/EducationList";
import { AccessibilityPanel } from "@/components/accessibility/AccessibilityPanel";
import { Chatbot } from "@/components/chatbot/Chatbot";
import { HighlightsSection } from "@/components/highlights/HighlightsSection";
import {
  expertiseDomains,
  experienceEntries,
  profileInfo,
  projectCases,
  educationEntries,
  achievementEntries,
} from "@/content/profile";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nickolasmadeiro.dev";

export const metadata: Metadata = {
  title: "Nickolas Madeiro - Desenvolvedor Full Stack Sênior | Portfólio",
  description:
    "Desenvolvedor Full Stack Sênior com 8+ anos de experiência em Next.js, React, Node.js, NestJS, AWS e IA. Especialista em transformação digital para saúde, governo e soluções escaláveis em produção. Portfólio com projetos, experiência e stack técnica.",
  keywords: [
    "Nickolas Madeiro",
    "desenvolvedor full stack",
    "desenvolvedor sênior",
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "inteligência artificial",
    "IA",
    "LLMs",
    "transformação digital",
    "arquitetura de software",
    "portfólio",
    "Fortaleza",
    "Ceará",
    "Brasil",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nickolas Madeiro - Desenvolvedor Full Stack Sênior",
    description:
      "Desenvolvedor Full Stack Sênior com 8+ anos de experiência. Especialista em Next.js, React, Node.js, NestJS, AWS e IA.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nickolas Madeiro - Desenvolvedor Full Stack Sênior",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-(--background-primary) relative">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-(--primary)/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-(--secondary-accent)/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-(--primary)/3 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-(--secondary-accent)/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>
      
      <SiteHeader fullName={profileInfo.fullName} role={profileInfo.role} />
      <main>
        <Hero
          mainStack={profileInfo.mainStack}
          availability={profileInfo.availability}
        />

        <HighlightsSection />

        <PageSection id="projects" titleKey="projects">
          <ProjectList projects={projectCases} />
        </PageSection>

        <PageSection id="stack" titleKey="stack">
          <ExpertiseList domains={expertiseDomains} />
        </PageSection>

        <PageSection id="experience" titleKey="experience">
          <ExperienceList items={experienceEntries} />
        </PageSection>

        <PageSection id="education" titleKey="education">
          <EducationList items={educationEntries} />
        </PageSection>

        <PageSection id="achievements" titleKey="achievements">
          <AchievementList items={achievementEntries} />
        </PageSection>

        <PageSection id="about" titleKey="about">
          <AboutSection fullName={profileInfo.fullName} />
        </PageSection>

        <PageSection id="contact" titleKey="contact">
          <ContactSection
            email="paulomadeirodigital@gmail.com"
            whatsappNumber="5585988523560"
            linkedinUrl="https://www.linkedin.com/in/nickolas-madeiro/"
            instagramUrl="https://www.instagram.com/nickolas_madeiro?igsh=MXRmdHptcDUwdDRyMQ=="
          />
        </PageSection>
      </main>
      <WhatsAppButton phoneNumber="5585988523560" />
      <Chatbot />
      <AccessibilityPanel />
    </div>
  );
}

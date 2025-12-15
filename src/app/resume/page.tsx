import { ResumePage } from "@/components/resume/ResumePage";
import {
  profileInfo,
  experienceEntries,
  educationEntries,
  achievementEntries,
  projectCases,
  expertiseDomains,
} from "@/content/profile";
import { technologies } from "@/content/technologies";
import { getTotalExperienceMonths } from "@/content/technologies";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nickolasmadeiro.dev";

export const metadata: Metadata = {
  title: "Currículo | Nickolas Madeiro",
  description:
    "Currículo completo de Nickolas Madeiro - Desenvolvedor Full Stack Sênior com 8+ anos de experiência. Experiência profissional, projetos, formação acadêmica e conquistas.",
  keywords: [
    "currículo",
    "CV",
    "Nickolas Madeiro",
    "desenvolvedor full stack",
    "experiência profissional",
    "portfólio",
    "histórico profissional",
  ],
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Currículo | Nickolas Madeiro",
    description:
      "Currículo completo de Nickolas Madeiro - Desenvolvedor Full Stack Sênior com 8+ anos de experiência.",
    url: `${SITE_URL}/resume`,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumeRoute() {
  const filteredTechnologies = technologies.filter((tech) => {
    const totalMonths = getTotalExperienceMonths(tech);
    return totalMonths >= 36; // 3 anos
  });

  return (
    <ResumePage
      profile={profileInfo}
      experience={experienceEntries}
      education={educationEntries}
      achievements={achievementEntries}
      projects={projectCases}
      technologies={filteredTechnologies}
      expertiseDomains={expertiseDomains}
    />
  );
}


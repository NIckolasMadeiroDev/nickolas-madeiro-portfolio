import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nickolasmadeiro.dev";
const SITE_NAME = "Nickolas Madeiro - Software Engineer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nickolas Madeiro - Desenvolvedor Full Stack Sênior | Portfólio",
    template: "%s | Nickolas Madeiro",
  },
  description:
    "Desenvolvedor Full Stack Sênior com 8+ anos de experiência em Next.js, React, Node.js, NestJS, AWS e IA. Especialista em transformação digital para saúde, governo e soluções escaláveis em produção.",
  keywords: [
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
    "engenheiro de software",
    "desenvolvimento web",
    "Fortaleza",
    "Ceará",
    "Brasil",
  ],
  authors: [{ name: "Nickolas Madeiro" }],
  creator: "Nickolas Madeiro",
  publisher: "Nickolas Madeiro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Nickolas Madeiro - Desenvolvedor Full Stack Sênior",
    description:
      "Desenvolvedor Full Stack Sênior com 8+ anos de experiência. Especialista em Next.js, React, Node.js, NestJS, AWS e IA. Transformação digital para saúde, governo e soluções escaláveis.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nickolas Madeiro - Desenvolvedor Full Stack Sênior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nickolas Madeiro - Desenvolvedor Full Stack Sênior",
    description:
      "Desenvolvedor Full Stack Sênior com 8+ anos de experiência. Especialista em Next.js, React, Node.js, NestJS, AWS e IA.",
    images: [`${SITE_URL}/images/og-image.jpg`],
    creator: "@nickolas_madeiro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  category: "technology",
};

import { I18nProvider } from "@/i18n/I18nProvider";
import { ChatbotProvider } from "@/components/chatbot/ChatbotContext";
import Script from "next/script";
import { profileInfo } from "@/content/profile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileInfo.fullName,
    jobTitle: profileInfo.role,
    description: profileInfo.summary,
    url: SITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/nickolas-madeiro/",
      "https://www.instagram.com/nickolas_madeiro",
    ],
    knowsAbout: profileInfo.mainStack,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      addressCountry: "BR",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profileInfo.fullName} - ${profileInfo.role}`,
    description: profileInfo.availability,
    provider: {
      "@type": "Person",
      name: profileInfo.fullName,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: [
      "Desenvolvimento Full Stack",
      "Arquitetura de Software",
      "Consultoria em Tecnologia",
      "Desenvolvimento de IA",
      "Transformação Digital",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_URL,
    url: SITE_URL,
    description: profileInfo.summary,
    author: {
      "@type": "Person",
      name: profileInfo.fullName,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stack",
        item: `${SITE_URL}/stack`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Currículo",
        item: `${SITE_URL}/resume`,
      },
    ],
  };

  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <I18nProvider>
          <ChatbotProvider>{children}</ChatbotProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

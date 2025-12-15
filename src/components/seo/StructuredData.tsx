import { profileInfo } from "@/content/profile";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nickolasmadeiro.dev";

export function StructuredData() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}


export type Locale = "pt" | "en" | "es";

export interface Translations {
  nav: {
    projects: string;
    stack: string;
    experience: string;
    education: string;
    achievements: string;
    about: string;
    contact: string;
    availability: string;
  };
  hero: {
    headline: string;
    description: string;
    location: string;
    valueProposition: string;
    viewProjects: string;
    contact: string;
  };
  sections: {
    projects: {
      title: string;
      subtitle: string;
    };
    stack: {
      title: string;
      subtitle: string;
      pageTitle: string;
      pageDescription: string;
      backToHome: string;
      exploreDescription: string;
      viewFullStack: string;
      mainStack: string;
      searchPlaceholder: string;
      searchLabel: string;
      categoryLabel: string;
      proficiencyLabel: string;
      domainLabel: string;
      clearFilters: string;
      noResults: string;
      allCategories: string;
      allProficiencies: string;
      allDomains: string;
      technologiesFound: string;
      technologyFound: string;
      experienceLabel: string;
      project: string;
      projects: string;
      categories: {
        frontend: string;
        backend: string;
        infra: string;
        data: string;
        mobile: string;
        ai: string;
        testing: string;
        other: string;
      };
      proficiencies: {
        beginner: string;
        intermediate: string;
        advanced: string;
        expert: string;
        leading: string;
      };
    };
    experience: {
      title: string;
      subtitle: string;
    };
    education: {
      title: string;
      subtitle: string;
    };
    achievements: {
      title: string;
      subtitle: string;
    };
    about: {
      title: string;
      subtitle: string;
      summary: string;
      paragraph2: string;
      paragraph3: string;
    };
    contact: {
      title: string;
      subtitle: string;
      description: string;
      suggestion: string;
    };
    chatbot: {
      title: string;
      subtitle: string;
      welcomeMessage: string;
      inputPlaceholder: string;
      listeningPlaceholder: string;
      inputHint: string;
      sendButton: string;
      toggleButton: string;
      clearChat: string;
      startRecording: string;
      stopRecording: string;
      errorMessage: string;
    };
  };
  projects: {
    llamagov: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    nucleus: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    xviaGov: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    easyerp: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    elegebr: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    investplus: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    bsid: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    saudehdPlatform: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    mproAssistencia: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    s4sLeadership: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
    hackathonCreaMa: {
      name: string;
      context: string;
      audience: string;
      responsibilities: string[];
      architecturalDecisions: string[];
      impact: {
        summary: string;
        metrics: string[];
      };
    };
  };
  experience: {
    xviaGov: {
      company: string;
      role: string;
      responsibilities: string[];
      technicalHighlights: string[];
    };
    itia: {
      company: string;
      role: string;
      responsibilities: string[];
      technicalHighlights: string[];
    };
    saudehdPleno: {
      company: string;
      role: string;
      responsibilities: string[];
      technicalHighlights: string[];
    };
    s4sSocio: {
      company: string;
      role: string;
      responsibilities: string[];
      technicalHighlights: string[];
    };
    healthdev: {
      company: string;
      role: string;
      responsibilities: string[];
      technicalHighlights: string[];
    };
    rmssystems: {
      company: string;
      role: string;
      responsibilities: string[];
      technicalHighlights: string[];
    };
  };
  education: {
    ifce: {
      institution: string;
      degree: string;
      description: string;
    };
    pixels: {
      institution: string;
      degree: string;
      description: string;
    };
    institutoMix: {
      institution: string;
      degree: string;
      description: string;
    };
  };
  achievements: {
    hackathonCreaCe1: {
      title: string;
      issuer: string;
      description: string;
    };
    hackathonCreaCe2: {
      title: string;
      issuer: string;
      description: string;
    };
    hackathonCreaMa: {
      title: string;
      issuer: string;
      description: string;
    };
    hackathonConfea: {
      title: string;
      issuer: string;
      description: string;
    };
    hackathonSecitece: {
      title: string;
      issuer: string;
      description: string;
    };
    certAluraArquitetura: {
      title: string;
      issuer: string;
      description: string;
    };
    certAluraDevops: {
      title: string;
      issuer: string;
      description: string;
    };
    certAluraNodejs: {
      title: string;
      issuer: string;
      description: string;
    };
    certDioFullstack: {
      title: string;
      issuer: string;
      description: string;
    };
    certDioCloud: {
      title: string;
      issuer: string;
      description: string;
    };
    certAluraReact: {
      title: string;
      issuer: string;
      description: string;
    };
  };
  contact: {
    form: {
      name: string;
      email: string;
      contactType: string;
      workMode: string;
      interest: string;
      message: string;
      submit: string;
      submitting: string;
      whatsapp: string;
      orSendTo: string;
      selectOption: string;
      selectOptional: string;
      contactTypeOptions: {
        consultoria: string;
        processoSeletivo: string;
        entrevista: string;
        projeto: string;
        parceria: string;
        outro: string;
      };
      workModeOptions: {
        pj: string;
        clt: string;
        freelance: string;
        estagio: string;
        indiferente: string;
      };
      interestOptions: {
        frontend: string;
        backend: string;
        fullstack: string;
        mobile: string;
        devops: string;
        ia: string;
        arquitetura: string;
        lideranca: string;
        outro: string;
      };
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
      errors: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        contactTypeRequired: string;
        messageRequired: string;
        messageMinLength: string;
        submitError: string;
        connectionError: string;
      };
      success: string;
    };
  };
  common: {
    context: string;
    audience: string;
    responsibilities: string;
    technicalHighlights: string;
    stack: string;
    architecturalDecisions: string;
    impact: string;
    depth: string;
    leading: string;
    expert: string;
    practical: string;
    current: string;
    period: string;
    viewMore: string;
    viewProject: string;
    resume: string;
    downloadPDF: string;
    print: string;
    downloadResume: string;
  };
}


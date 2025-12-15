import {
  ExpertiseDomain,
  ExperienceEntry,
  ProfileInfo,
  ProjectCase,
  EducationEntry,
  AchievementEntry,
} from "@/types/portfolio";

export const profileInfo: ProfileInfo = {
  fullName: "Nickolas Madeiro",
  role: "Software Engineer",
  headline:
    "Profissional multidisciplinar em desenvolvimento full-stack, arquitetura de sistemas, IA e liderança técnica, com atuação em saúde, governo e engenharia.",
  location: "Fortaleza, Ceará, Brasil · Disponibilidade para regime híbrido",
  seniority: "senior",
  mainStack: [
    "Next.js",
    "React",
    "Angular",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Java",
    "Spring",
    "Python",
    "TensorFlow",
    "React Native",
    "PostgreSQL",
    "Oracle",
    "MariaDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Liquibase",
    "Maven",
    "JUnit",
    "Mockito",
    "Keycloak",
  ],
  availability:
    "Disponível para projetos em regime PJ, CLT ou consultoria. Especializado em transformação digital para saúde, governo e soluções intensivas em dados. Entrego arquiteturas escaláveis, sistemas críticos em produção e decisões técnicas que geram impacto mensurável.",
  summary:
    "Profissional multidisciplinar com mais de 8 anos de experiência em desenvolvimento full-stack, arquitetura de sistemas e liderança técnica. Especialista em transformação digital com atuação em saúde, governo e engenharia, dominando todo o ciclo de desenvolvimento: da concepção estratégica à entrega em produção. Forte experiência em Inteligência Artificial (LLMs, fine-tuning, inferência local), cloud computing (AWS) e desenvolvimento ágil, entregando soluções que geram impacto real e mensurável.",
};

export const projectCases: ProjectCase[] = [
  {
    id: "llamagov",
    name: "LLaMAGov - Framework para LLMs em Ambientes Governamentais",
    context:
      "Framework para implantação local de LLMs em ambientes governamentais restritos. Solução containerizada com Ollama para processamento offline de documentos sensíveis.",
    audience: "Órgãos governamentais que precisam processar documentos sensíveis com IA sem expor dados.",
    responsibilities: [
      "Desenvolvimento de framework containerizado com Ollama para processamento offline.",
      "Arquitetura para ambientes restritos sem acesso à internet.",
      "Otimização de inferência local de LLMs.",
      "Processamento seguro de documentos sensíveis.",
    ],
    techStack: {
      frontend: ["React", "TypeScript"],
      backend: ["Python", "Ollama", "FastAPI"],
      infra: ["Docker", "Kubernetes"],
      data: ["PostgreSQL"],
    },
    architecturalDecisions: [
      "Containerização completa para facilitar deploy em ambientes restritos.",
      "Processamento offline garantindo segurança de dados sensíveis.",
      "Otimização de modelos para inferência local eficiente.",
    ],
    impact: {
      summary: "80% de redução no tempo de processamento de documentos governamentais.",
      metrics: [
        "Processamento de 10.000+ documentos/mês offline",
        "Redução de 80% no tempo de análise (de 2h para 24min)",
        "100% de segurança - zero exposição de dados sensíveis",
        "Suporte a múltiplos modelos LLM (Llama, Mistral, etc.)",
      ],
    },
    links: [],
  },
  {
    id: "nucleus",
    name: "Nucleus - Biblioteca de Componentes Next.js",
    context:
      "Biblioteca interna de componentes para Next.js com TypeScript. Sistema de design system com mais de 50 componentes acessíveis, testes automatizados e documentação interativa.",
    audience: "Equipes de desenvolvimento frontend que precisam de componentes padronizados e acessíveis.",
    responsibilities: [
      "Desenvolvimento de mais de 50 componentes acessíveis.",
      "Sistema de design system completo.",
      "Testes automatizados com Jest.",
      "Documentação interativa usando Storybook.",
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Storybook"],
      backend: [],
      infra: ["Jest", "CI/CD"],
      data: [],
    },
    architecturalDecisions: [
      "Foco em acessibilidade e padrões WCAG.",
      "Componentes reutilizáveis e testáveis.",
      "Documentação interativa para facilitar adoção.",
    ],
    impact: {
      summary: "Redução de 40% no tempo de desenvolvimento frontend.",
      metrics: [
        "50+ componentes acessíveis prontos para uso",
        "Redução de 40% no tempo de desenvolvimento (de 5 dias para 3 dias por feature)",
        "100% de cobertura de testes automatizados",
        "Adotado por 8+ projetos internos",
      ],
    },
    links: [],
  },
  {
    id: "xvia-gov",
    name: "XVIA-GOV.BR - Portal de Governo Digital ES",
    context:
      "Desenvolvimento de portal de governo digital para o Estado do Espírito Santo. Arquitetura e implementação de soluções digitais para serviços públicos com integração a sistemas governamentais.",
    audience: "Cidadãos e empresas do Espírito Santo que precisam acessar serviços públicos digitais.",
    responsibilities: [
      "Desenvolvimento frontend com React.",
      "Arquitetura backend em NestJS.",
      "Integração com sistemas governamentais e APIs públicas.",
      "Gerenciamento de bancos de dados PostgreSQL e MariaDB.",
      "Configuração de autenticação com Keycloak.",
      "Deploy em Docker e Kubernetes com Rancher.",
    ],
    techStack: {
      frontend: ["React", "TypeScript"],
      backend: ["NestJS", "Node.js"],
      infra: ["Docker", "Kubernetes", "Rancher", "Keycloak"],
      data: ["PostgreSQL", "MariaDB"],
    },
    architecturalDecisions: [
      "Arquitetura microserviços para escalabilidade.",
      "Autenticação centralizada com Keycloak (SSO).",
      "Containerização completa para facilitar deploy.",
      "Integração segura com APIs governamentais.",
    ],
    impact: {
      summary: "Portal digital moderno para serviços públicos do ES.",
      metrics: [
        "Mais de 50.000 cidadãos atendidos mensalmente",
        "Redução de 60% no tempo de acesso a serviços públicos",
        "99.9% de uptime com arquitetura escalável",
        "Integração com 15+ sistemas governamentais",
      ],
    },
    links: [
      {
        label: "Portal ES Gov",
        href: "https://portal.es.gov.br/",
        type: "live",
      },
    ],
  },
  {
    id: "easyerp",
    name: "EasyERP - Sistema ERP para Logística",
    context:
      "Sistema ERP completo para logística em Portugal desenvolvido com PHP, JavaScript e Scriptcase. Arquitetura modular para gestão de frota, inventário e supply chain.",
    audience: "Empresas de logística em Portugal que precisam de gestão integrada.",
    responsibilities: [
      "Desenvolvimento completo do sistema ERP.",
      "Arquitetura modular para diferentes módulos.",
      "Integração em tempo real com sistemas fiscais portugueses.",
      "Gestão de frota, inventário e supply chain.",
    ],
    techStack: {
      frontend: ["JavaScript", "Scriptcase"],
      backend: ["PHP"],
      infra: [],
      data: ["MySQL"],
    },
    architecturalDecisions: [
      "Arquitetura modular para facilitar manutenção.",
      "Integração em tempo real com sistemas externos.",
      "Processamento eficiente de grandes volumes de dados.",
    ],
    impact: {
      summary: "Sistema processando mais de 5.000 transações diárias.",
      metrics: [
        "Gestão completa de logística.",
        "Integração eficiente com sistemas fiscais.",
        "Alta performance em processamento de transações.",
      ],
    },
    links: [],
  },
  {
    id: "elegebr",
    name: "ElegeBR - Plataforma CRM Político",
    context:
      "Plataforma CRM político desenvolvida com React, Node.js e MongoDB para campanhas eleitorais. Inclui análise de perfil eleitoral, automação de marketing político e dashboard em tempo real.",
    audience: "Candidatos e equipes de campanha eleitoral.",
    responsibilities: [
      "Desenvolvimento frontend com React.",
      "Backend em Node.js com MongoDB.",
      "Módulos de análise de perfil eleitoral.",
      "Automação de marketing político.",
      "Dashboard de acompanhamento em tempo real.",
    ],
    techStack: {
      frontend: ["React", "TypeScript"],
      backend: ["Node.js", "Express"],
      infra: [],
      data: ["MongoDB"],
    },
    architecturalDecisions: [
      "Arquitetura orientada a dados para análise.",
      "Processamento em tempo real de dados eleitorais.",
      "Automação inteligente de campanhas.",
    ],
    impact: {
      summary: "Plataforma completa para gestão de campanhas eleitorais.",
      metrics: [
        "Análise de 100.000+ perfis eleitorais em tempo real",
        "Automação de marketing político.",
        "Dashboard em tempo real para tomada de decisão.",
      ],
    },
    links: [],
  },
  {
    id: "investplus",
    name: "Invest Plus",
    context:
      "Através de nossa plataforma, estamos dando acesso a um mercado que há poucos anos era restrito a grandes fundos.",
    audience: "Investidores e empresas que buscam financiamento alternativo.",
    responsibilities: [
      "Desenvolvimento frontend com Angular e PrimeNG.",
      "Backend em Spring Boot com NestJS.",
      "Gerenciamento de migrações de banco de dados com Liquibase.",
      "Configuração e deploy na AWS usando Amplify e EC2.",
      "Implementação de autenticação com AWS Cognito.",
      "Armazenamento de arquivos com AWS S3 Bucket.",
      "Integração com ClickSign para assinatura digital de documentos.",
    ],
    techStack: {
      frontend: ["Angular", "TypeScript", "PrimeNG"],
      backend: ["Spring Boot", "NestJS", "Node.js"],
      infra: ["AWS Amplify", "AWS EC2", "AWS Cognito", "AWS S3"],
      data: ["PostgreSQL", "Liquibase"],
    },
    architecturalDecisions: [
      "Arquitetura cloud-native na AWS com múltiplos serviços integrados.",
      "Autenticação e autorização gerenciadas pelo AWS Cognito.",
      "Migrações de banco de dados versionadas com Liquibase.",
      "Integração com ClickSign para fluxos de assinatura digital.",
      "Armazenamento escalável de arquivos no S3.",
    ],
    impact: {
      summary: "Democratização do acesso a investimentos alternativos antes restritos a grandes fundos.",
      metrics: [
        "R$ 50M+ em investimentos processados na plataforma",
        "1.000+ investidores cadastrados",
        "Redução de 70% no tempo de onboarding de investidores",
        "100% de documentos assinados digitalmente via ClickSign",
      ],
    },
    links: [
      { label: "Plataforma", href: "https://investplus.vc/#ofertas", type: "live" },
    ],
  },
  {
    id: "bsid",
    name: "BSID - Aplicativo Android para Leitura de Ultrassom",
    context:
      "Aplicativo Android nativo (Kotlin) para leitura de ultrassom e frequências não audíveis. Converte padrões de frequência em dados estruturados com notificações em tempo real.",
    audience: "Profissionais de saúde que precisam analisar dados de ultrassom.",
    responsibilities: [
      "Desenvolvimento Android nativo em Kotlin.",
      "Algoritmos de processamento de sinal digital (FFT).",
      "Conversão de frequências em dados estruturados.",
      "Notificações em tempo real.",
    ],
    techStack: {
      frontend: ["Kotlin", "Android"],
      backend: [],
      infra: [],
      data: [],
    },
    architecturalDecisions: [
      "Processamento local de sinais para baixa latência.",
      "Algoritmos FFT para análise de frequências.",
      "Notificações em tempo real para alertas.",
    ],
    impact: {
      summary: "Aplicativo para análise de ultrassom em tempo real.",
      metrics: [
        "Processamento de sinais em < 50ms (tempo real)",
        "Precisão de 95%+ na conversão de frequências",
        "Suporte a múltiplas frequências simultâneas",
        "Notificações instantâneas para alertas críticos",
      ],
    },
    links: [],
  },
  {
    id: "saudehd-platform",
    name: "Plataforma SaúdeHD - Sistema de Gestão em Saúde",
    context:
      "Plataforma completa de gestão para o setor de saúde, incluindo frontend em Next.js/TypeScript, backend em Node.js/NestJS, integração com IA para chatbots, aplicativo mobile em React Native e soluções de IA em Python com TensorFlow.",
    audience: "Profissionais de saúde, pacientes e organizações do setor de saúde.",
    responsibilities: [
      "Desenvolvimento frontend com Next.js e TypeScript utilizando biblioteca própria Nucleus e integração com Zod.",
      "Arquitetura backend robusta em Node.js e NestJS.",
      "Integração de chatbots com IA e desenvolvimento de aplicativo React Native com funcionalidades de IA.",
      "Implementação de soluções de IA em Python usando TensorFlow.",
      "Gerenciamento de banco de dados PostgreSQL e configuração de infraestrutura AWS (Cognito, Route53).",
      "Criação de landing pages em WordPress.",
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Nucleus", "Zod"],
      backend: ["Node.js", "NestJS", "Python", "TensorFlow"],
      infra: ["AWS", "Cognito", "Route53", "PostgreSQL"],
      data: ["PostgreSQL"],
    },
    architecturalDecisions: [
      "Uso de biblioteca própria Nucleus para padronização de componentes e melhor manutenibilidade.",
      "Integração de IA em múltiplas camadas (chatbots, mobile, backend) para melhorar experiência do usuário.",
      "Arquitetura modular permitindo escalabilidade e manutenção eficiente.",
    ],
    impact: {
      summary:
        "Modernização e eficiência dos serviços de saúde através de tecnologia inovadora.",
      metrics: [
        "5.000+ profissionais de saúde cadastrados",
        "30.000+ pacientes atendidos pela plataforma",
        "Chatbot com IA atendendo 80% das consultas iniciais",
        "Redução de 45% no tempo de agendamento de consultas",
      ],
    },
    links: [
      { label: "Site Oficial", href: "https://saudehd.com.br/", type: "live" },
      { label: "Cadastro", href: "https://saudehd.com.br/cadastro-sistema-gestao-de-clinicas/", type: "live" },
    ],
  },
  {
    id: "mpro-assistencia-saude",
    name: "Assistência Saúde - Ministério Público de Rondônia",
    context:
      "Projeto crucial para o Ministério Público de Rondônia, desenvolvendo sistema completo com frontend em Angular/TypeScript e backend em Java/Spring Framework.",
    audience: "Ministério Público de Rondônia e profissionais do setor de saúde.",
    responsibilities: [
      "Desenvolvimento frontend em Angular e TypeScript com estilização SCSS (SASS).",
      "Implementação de testes unitários robustos com Karma e Jasmine.",
      "Desenvolvimento backend em Java com Spring Framework.",
      "Gerenciamento e criação de entidades no banco de dados Oracle.",
      "Configuração e gerenciamento de migrações com Liquibase.",
      "Gerenciamento de dependências com Maven.",
      "Testes backend com JUnit, Mockito e Spring Test, incluindo testes de integração com PostgreSQL em Docker.",
    ],
    techStack: {
      frontend: ["Angular", "TypeScript", "SCSS", "Karma", "Jasmine"],
      backend: ["Java", "Spring Framework", "JUnit", "Mockito"],
      infra: ["Oracle", "PostgreSQL", "Docker", "Liquibase", "Maven"],
      data: ["Oracle", "PostgreSQL"],
    },
    architecturalDecisions: [
      "Separação clara entre camadas de frontend e backend para facilitar manutenção.",
      "Uso de testes unitários e de integração para garantir qualidade do código.",
      "Migrações controladas com Liquibase para versionamento do banco de dados.",
    ],
    impact: {
      summary:
        "Sistema robusto e confiável para gestão de assistência à saúde no MPRO.",
      metrics: [
        "95%+ de cobertura de testes (unitários e integração)",
        "Sistema processando 2.000+ requisições diárias",
        "Zero downtime desde o lançamento",
        "Arquitetura escalável suportando crescimento de 300%",
      ],
    },
    links: [
      {
        label: "Sistema PASS",
        href: "https://pass.mpro.mp.br",
        type: "live",
      },
      {
        label: "Notícias MPRO",
        href: "https://www.mpro.mp.br/pages/comunicacao/noticias/view-noticias/1983808",
        type: "doc",
      },
    ],
  },
  {
    id: "s4s-tech-leadership",
    name: "S4S - Liderança Técnica e Soluções Multi-projeto",
    context:
      "Atuação como sócio e líder técnico em múltiplos projetos, desde soluções em Angular/Spring até ReactJS/NodeJS, proporcionando as melhores escolhas técnicas e gerenciais.",
    audience: "Múltiplos clientes e projetos da S4S.",
    responsibilities: [
      "Liderança técnica da equipe proporcionando as melhores escolhas técnicas e gerenciais.",
      "Desenvolvimento de soluções em Angular com Spring Framework.",
      "Desenvolvimento de soluções em ReactJS com NodeJS.",
      "Ampliação da eficiência das soluções de Software em múltiplos projetos.",
    ],
    techStack: {
      frontend: ["Angular", "React", "TypeScript"],
      backend: ["Spring Framework", "Node.js"],
      infra: ["CI/CD", "AWS"],
      data: ["PostgreSQL", "Oracle"],
    },
    architecturalDecisions: [
      "Escolha adequada de tecnologias baseada no contexto de cada projeto.",
      "Foco em eficiência e escalabilidade das soluções.",
      "Liderança técnica garantindo qualidade e boas práticas.",
    ],
    impact: {
      summary:
        "Ampliação da eficiência das soluções de Software através de liderança técnica e escolhas adequadas.",
      metrics: [
        "12+ projetos entregues com sucesso em 2 anos",
        "Aumento de 35% na produtividade das equipes",
        "Redução de 50% no tempo de code review",
        "Arquiteturas escaláveis suportando 10x crescimento",
      ],
    },
    links: [
      { label: "S4S.tech", href: "https://s4s.tech", type: "live" },
    ],
  },
  {
    id: "hackathon-crea",
    name: "Hackathons IA CREA-CE e CREA-MA - Campeão",
    context:
      "Desenvolvimento de plataforma inovadora para unificar registros profissionais de engenheiros, agrônomos e geocientistas em todo o Brasil, utilizando SAP Business Suite, RPA e IA. Conquistou o 1º lugar em ambos os hackathons (CREA-CE e CREA-MA), resultando na contratação para desenvolvimento do projeto.",
    audience: "CONFEA, CREAs regionais e profissionais registrados.",
    responsibilities: [
      "Liderança da equipe durante os hackathons.",
      "Desenvolvimento da solução integrada utilizando SAP Business Suite e RPA.",
      "Incorporação de inteligência artificial para simplificar emissão de ARTs.",
      "Apresentação do pitch destacando funcionalidades e benefícios.",
      "Desenvolvimento do projeto após vitória nos hackathons.",
    ],
    techStack: {
      frontend: ["SAP Business Suite"],
      backend: ["RPA", "IA"],
      infra: ["SAP"],
      data: ["SAP"],
    },
    architecturalDecisions: [
      "Integração de SAP Business Suite com RPA para monitoramento contínuo.",
      "Uso de IA para automação de processos complexos.",
      "Solução focada em conformidade e eficiência.",
    ],
    impact: {
      summary:
        "1º lugar em ambos os hackathons (CREA-CE e CREA-MA) demonstrando capacidade de liderança e desenvolvimento de soluções inovadoras, resultando na contratação para desenvolvimento do projeto.",
      metrics: [
        "🏆 1º lugar no Hackathon IA CREA-CE",
        "🏆 1º lugar no Hackathon IA CREA-MA",
        "Projeto contratado após vitória nos hackathons",
        "Solução para 500.000+ profissionais registrados no Brasil",
        "Redução de 90% no tempo de emissão de ARTs com IA",
        "Reconhecimento da banca técnica e empresarial",
      ],
    },
    links: [],
  },
];

export const expertiseDomains: ExpertiseDomain[] = [
  {
    id: "frontend-engineering",
    title: "Frontend Engineering - Multi-framework",
    description:
      "Experiência profunda em Next.js/React, Angular e React Native, com foco em arquitetura, performance e UX funcional.",
    primaryTools: ["Next.js", "React", "Angular", "TypeScript", "React Native"],
    depthLevel: "leading",
  },
  {
    id: "backend-and-apis",
    title: "Backend & APIs - Full Stack",
    description:
      "Estruturação de serviços em Node.js/NestJS e Java/Spring Framework, alinhados a regras de negócio e segurança.",
    primaryTools: ["Node.js", "NestJS", "Java", "Spring", "PostgreSQL"],
    depthLevel: "leading",
  },
  {
    id: "ai-and-machine-learning",
    title: "Inteligência Artificial & Machine Learning",
    description:
      "Desenvolvimento de soluções de IA em Python com TensorFlow, integração de chatbots e funcionalidades inteligentes.",
    primaryTools: ["Python", "TensorFlow", "IA", "Chatbots"],
    depthLevel: "expert",
  },
  {
    id: "cloud-infrastructure",
    title: "Infraestrutura em nuvem e DevOps",
    description:
      "Configuração e gerenciamento de infraestrutura AWS (Cognito, Route53), CI/CD, Docker e bancos de dados relacionais.",
    primaryTools: ["AWS", "Docker", "CI/CD", "PostgreSQL", "Oracle"],
    depthLevel: "expert",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "itia",
    company: "ITIA - Instituto de Tecnologia e Inteligência Artificial",
    role: "Desenvolvedor Full Stack",
    period: "Out 2024 - Mar 2025",
    location: "Remoto",
    isCurrent: true,
    responsibilities: [
      "Desenvolvimento de soluções de software.",
      "Implementação de testes unitários e integração.",
      "Gerenciamento de banco de dados Oracle.",
    ],
    technicalHighlights: [
      "Angular, Spring, NodeJS, Oracle, Liquibase, Maven, JUnit, Mockito, PostgreSQL.",
    ],
    companyUrl: "https://itia.org.br/",
  },
  {
    id: "s4s-socio",
    company: "s4S",
    role: "Desenvolvedor",
    period: "Fev 2023 - Mar 2025",
    location: "Fortaleza, CE",
    isCurrent: false,
    responsibilities: [
      "Desenvolvimento de interface com Angular e TypeScript.",
      "Implementação de testes unitários com Karma e Jasmine.",
      "Desenvolvimento backend com Java e Spring Framework.",
    ],
    technicalHighlights: [
      "Angular, TypeScript, SCSS, Karma, Jasmine, Java, Spring Framework, Liquibase, Maven, JUnit, Mockito, PostgreSQL.",
    ],
    companyUrl: "https://s4s.tech",
  },
  {
    id: "xvia-gov",
    company: "XVIA - GOV.BR ES",
    role: "Desenvolvedor Full Stack Sênior",
    period: "Dez 2024 - Nov 2025",
    location: "Remoto",
    isCurrent: false,
    responsibilities: [
      "Desenvolvimento de portal de governo digital para o Estado do Espírito Santo.",
      "Arquitetura e implementação de soluções digitais para serviços públicos.",
      "Integração com sistemas governamentais e APIs públicas.",
    ],
    technicalHighlights: [
      "React, Rancher, NestJS, PostgreSQL, MariaDB, Keycloak, WebGate, Docker, Kubernetes.",
    ],
  },
  {
    id: "saudehd-dev",
    company: "SaúdeHD",
    role: "Desenvolvedor",
    period: "Set 2021 - Mar 2025",
    location: "Fortaleza, CE",
    isCurrent: false,
    responsibilities: [
      "Desenvolvimento frontend com Next.js e TypeScript.",
      "Integração de chatbots com IA.",
      "Desenvolvimento de aplicativo em React Native.",
      "Implementação de soluções de IA em Python.",
    ],
    technicalHighlights: [
      "Next.js, TypeScript, Node.js, Nest, React Native, TensorFlow, PostgreSQL, AWS, Cognito, Route53, WordPress.",
    ],
  },
  {
    id: "healthdev",
    company: "HealthDev",
    role: "Desenvolvedor full stack",
    period: "Set 2018 - Mar 2025",
    location: "Fortaleza, CE",
    isCurrent: false,
    responsibilities: [
      "Desenvolvimento de soluções HealthTech para clínicas e hospitais.",
      "Arquitetura de sistemas com Next.js e Node.js.",
      "Implementação de módulos HL7/FHIR para interoperabilidade.",
    ],
    technicalHighlights: [
      "Next.js, Node.js, TypeScript, PostgreSQL, MongoDB.",
    ],
  },
  {
    id: "vipps-internship",
    company: "Vipps",
    role: "Estagiário",
    period: "Mai 2022 - Dez 2022",
    location: "Noruega",
    isCurrent: false,
    responsibilities: [
      "Desenvolvimento de funcionalidades para aplicativo móvel de transferências instantâneas.",
      "Implementação de APIs backend com Kotlin e Ktor.",
      "Contribuição para sistema de pagamentos instantâneos.",
    ],
    technicalHighlights: [
      "Kotlin, Ktor, APIs RESTful, Sistemas de pagamento.",
    ],
    companyUrl: "https://www.vipps.no/",
  },
  {
    id: "rmssystems-junior",
    company: "RMSSYSTEMS",
    role: "Desenvolvedor de software júnior",
    period: "Mai 2022 - Jan 2023",
    location: "Portugal - Remoto",
    isCurrent: false,
    responsibilities: [
      "Desenvolvimento de sistema ERP.",
      "Contribuição para projeto KTOK.",
      "Utilização de PHP, JavaScript e Scriptcase.",
    ],
    technicalHighlights: [
      "PHP, JavaScript, Scriptcase.",
    ],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    id: "ifce",
    institution: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
    degree:
      "Engenharia de Telecomunicações, Tecnologia em Tecnologia da Informação/ Sistemas da Informação",
    period: "Nov 2023",
    location: "Fortaleza, CE",
    description: "Concluído em Novembro de 2023.",
  },
];

export const achievementEntries: AchievementEntry[] = [
  {
    id: "cert-alura-arquitetura",
    title: "Formação Arquitetura de Software",
    issuer: "Alura",
    date: "",
    description: "Formação completa em arquitetura de software, design patterns, SOLID, DDD e arquitetura de microsserviços.",
    type: "certification",
  },
  {
    id: "cert-alura-devops",
    title: "Formação DevOps & Cloud",
    issuer: "Alura",
    date: "",
    description: "Formação em DevOps, CI/CD, Docker, Kubernetes, AWS e infraestrutura como código.",
    type: "certification",
  },
  {
    id: "cert-alura-nodejs",
    title: "Formação Node.js com TypeScript",
    issuer: "Alura",
    date: "",
    description: "Formação avançada em Node.js, TypeScript, NestJS, APIs RESTful, GraphQL e testes automatizados.",
    type: "certification",
  },
  {
    id: "cert-dio-fullstack",
    title: "Bootcamp Fullstack Developer",
    issuer: "DIO",
    date: "",
    description: "Bootcamp completo em desenvolvimento fullstack com React, Node.js, TypeScript, bancos de dados e arquitetura de software.",
    type: "certification",
  },
  {
    id: "cert-dio-cloud",
    title: "Bootcamp Cloud Computing",
    issuer: "DIO",
    date: "",
    description: "Bootcamp em cloud computing com AWS, Azure, containers, orquestração e arquitetura de soluções escaláveis.",
    type: "certification",
  },
  {
    id: "cert-alura-react",
    title: "Formação React com TypeScript",
    issuer: "Alura",
    date: "",
    description: "Formação avançada em React, TypeScript, Next.js, testes, performance e arquitetura de componentes escaláveis.",
    type: "certification",
  },
];



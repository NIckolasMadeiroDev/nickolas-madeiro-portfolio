import { Translations } from "../types";

export const pt: Translations = {
  nav: {
    projects: "Projetos",
    stack: "Stack",
    experience: "Experiência",
    education: "Formação",
    achievements: "Conquistas",
    about: "Sobre",
    contact: "Contato",
    availability: "Ver disponibilidade",
  },
  hero: {
    headline:
      "Profissional multidisciplinar em desenvolvimento full-stack, arquitetura de sistemas, IA e liderança técnica, com atuação em saúde, governo e engenharia.",
    description:
      "Profissional focado em sistemas críticos em produção, arquitetura clara e decisões técnicas que podem ser defendidas em qualquer code review sênior.",
    location: "Fortaleza, Ceará, Brasil · Disponibilidade para regime híbrido",
    valueProposition: "Como posso gerar valor",
    viewProjects: "Ver projetos em produção",
    contact: "Entrar em contato",
  },
  sections: {
    projects: {
      title: "Projetos",
      subtitle: "Casos reais com foco em contexto, decisões técnicas e impacto.",
    },
    stack: {
      title: "Stack e Expertise",
      subtitle: "Organizado por domínio técnico, com ênfase em profundidade e contexto de uso.",
      pageTitle: "Stack & Expertise",
      pageDescription: "Organizado por domínio técnico, com ênfase em profundidade e contexto de uso. Explore tecnologias, tempo de experiência e projetos relacionados.",
      backToHome: "Voltar ao início",
      exploreDescription: "Explore tecnologias detalhadas com tempo de experiência e projetos relacionados",
      viewFullStack: "Ver Stack Completo",
      mainStack: "Stack principal",
      searchPlaceholder: "Ex: React, Node.js...",
      searchLabel: "Buscar tecnologia",
      categoryLabel: "Categoria",
      proficiencyLabel: "Proficiência",
      domainLabel: "Domínio",
      clearFilters: "Limpar filtros",
      noResults: "Nenhuma tecnologia encontrada",
      allCategories: "Todas",
      allProficiencies: "Todas",
      allDomains: "Todos",
      technologiesFound: "tecnologias encontradas",
      technologyFound: "tecnologia encontrada",
      experienceLabel: "de experiência",
      project: "projeto",
      projects: "projetos",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        infra: "Infraestrutura",
        data: "Banco de Dados",
        mobile: "Mobile",
        ai: "IA & ML",
        testing: "Testes",
        other: "Outros",
      },
      proficiencies: {
        beginner: "Iniciante",
        intermediate: "Intermediário",
        advanced: "Avançado",
        expert: "Expert",
        leading: "Líder",
      },
    },
    experience: {
      title: "Experiência profissional",
      subtitle: "Atuação em produtos digitais com responsabilidade direta sobre código em produção.",
    },
    education: {
      title: "Formação Acadêmica",
      subtitle: "Educação formal e cursos técnicos que fundamentam minha atuação profissional.",
    },
    achievements: {
      title: "Conquistas & Certificações",
      subtitle: "Reconhecimentos, premiações e certificações que validam minha expertise técnica.",
    },
    about: {
      title: "Sobre",
      subtitle: "Como eu enxergo engenharia de software e onde costumo gerar mais valor.",
      summary:
        "Profissional multidisciplinar com mais de 8 anos de experiência em desenvolvimento full-stack, arquitetura de sistemas e liderança técnica. Especialista em transformação digital com atuação em saúde, governo e engenharia, dominando todo o ciclo de desenvolvimento: da concepção estratégica à entrega em produção. Forte experiência em Inteligência Artificial (LLMs, fine-tuning, inferência local), cloud computing (AWS) e desenvolvimento ágil, entregando soluções que geram impacto real e mensurável.",
      paragraph2:
        "Ao longo da minha carreira atuei em saúde, governo e engenharia, sempre com foco em soluções que gerem impacto real e mensurável.",
      paragraph3:
        "Se você busca alguém para ajudar a desenhar, construir ou escalar sistemas críticos, vale a pena conversar comigo (Nickolas Madeiro).",
    },
    contact: {
      title: "Contato",
      subtitle: "Contexto técnico primeiro, depois ferramentas. Me envie o cenário que você precisa destravar.",
      description:
        "Se você enxerga aderência entre o que eu faço e os desafios do seu produto, o próximo passo é simples: me envie contexto técnico e de negócio que precisa de reforço.",
      suggestion:
        "Sugestão: inclua no contato o contexto do sistema, principais restrições técnicas e expectativas de atuação.",
    },
    chatbot: {
      title: "Assistente Virtual",
      subtitle: "Converse sobre Nickolas Madeiro",
      welcomeMessage: "Olá! 👋 Sou um assistente virtual para ajudar você a conhecer melhor Nickolas Madeiro. Posso responder perguntas sobre sua experiência profissional, projetos desenvolvidos, habilidades técnicas, formação acadêmica e muito mais. O que você gostaria de saber?",
      inputPlaceholder: "Digite sua pergunta...",
      listeningPlaceholder: "🎤 Ouvindo...",
      inputHint: "Pressione Enter para enviar, Shift+Enter para nova linha",
      sendButton: "Enviar mensagem",
      toggleButton: "Abrir/fechar chatbot",
      clearChat: "Limpar conversa",
      startRecording: "Iniciar gravação de voz",
      stopRecording: "Parar gravação",
      errorMessage: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.",
    },
  },
  projects: {
    llamagov: {
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
      architecturalDecisions: [
        "Containerização completa para facilitar deploy em ambientes restritos.",
        "Processamento offline garantindo segurança de dados sensíveis.",
        "Otimização de modelos para inferência local eficiente.",
      ],
      impact: {
        summary: "80% de redução no tempo de processamento de documentos governamentais.",
        metrics: [
          "Processamento offline de documentos sensíveis.",
          "Redução significativa no tempo de análise.",
          "Segurança garantida sem exposição de dados.",
        ],
      },
    },
    nucleus: {
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
      architecturalDecisions: [
        "Foco em acessibilidade e padrões WCAG.",
        "Componentes reutilizáveis e testáveis.",
        "Documentação interativa para facilitar adoção.",
      ],
      impact: {
        summary: "Redução de 40% no tempo de desenvolvimento frontend.",
        metrics: [
          "Mais de 50 componentes prontos para uso.",
          "Padronização visual e funcional.",
          "Melhoria na velocidade de desenvolvimento.",
        ],
      },
    },
    xviaGov: {
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
      architecturalDecisions: [
        "Arquitetura microserviços para escalabilidade.",
        "Autenticação centralizada com Keycloak (SSO).",
        "Containerização completa para facilitar deploy.",
        "Integração segura com APIs governamentais.",
      ],
      impact: {
        summary: "Portal digital moderno para serviços públicos do ES.",
        metrics: [
          "Acesso simplificado a serviços públicos.",
          "Integração eficiente com sistemas existentes.",
          "Arquitetura escalável e segura.",
        ],
      },
    },
    easyerp: {
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
    },
    elegebr: {
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
      architecturalDecisions: [
        "Arquitetura orientada a dados para análise.",
        "Processamento em tempo real de dados eleitorais.",
        "Automação inteligente de campanhas.",
      ],
      impact: {
        summary: "Plataforma completa para gestão de campanhas eleitorais.",
        metrics: [
          "Análise eficiente de perfis eleitorais.",
          "Automação de marketing político.",
          "Dashboard em tempo real para tomada de decisão.",
        ],
      },
    },
    investplus: {
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
          "Plataforma completa para investimentos alternativos.",
          "Integração segura com serviços AWS.",
          "Assinatura digital de documentos integrada.",
          "Experiência de usuário moderna com Angular e PrimeNG.",
        ],
      },
    },
    bsid: {
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
      architecturalDecisions: [
        "Processamento local de sinais para baixa latência.",
        "Algoritmos FFT para análise de frequências.",
        "Notificações em tempo real para alertas.",
      ],
      impact: {
        summary: "Aplicativo para análise de ultrassom em tempo real.",
        metrics: [
          "Processamento eficiente de sinais.",
          "Conversão precisa de frequências.",
          "Notificações em tempo real.",
        ],
      },
    },
    saudehdPlatform: {
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
      architecturalDecisions: [
        "Uso de biblioteca própria Nucleus para padronização de componentes e melhor manutenibilidade.",
        "Integração de IA em múltiplas camadas (chatbots, mobile, backend) para melhorar experiência do usuário.",
        "Arquitetura modular permitindo escalabilidade e manutenção eficiente.",
      ],
      impact: {
        summary: "Modernização e eficiência dos serviços de saúde através de tecnologia inovadora.",
        metrics: [
          "Melhoria na conexão entre profissionais, pacientes e organizações.",
          "Automação de processos através de IA.",
          "Experiência mobile completa com funcionalidades inteligentes.",
        ],
      },
    },
    mproAssistencia: {
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
      architecturalDecisions: [
        "Separação clara entre camadas de frontend e backend para facilitar manutenção.",
        "Uso de testes unitários e de integração para garantir qualidade do código.",
        "Migrações controladas com Liquibase para versionamento do banco de dados.",
      ],
      impact: {
        summary: "Sistema robusto e confiável para gestão de assistência à saúde no MPRO.",
        metrics: [
          "Cobertura de testes garantindo qualidade e confiabilidade.",
          "Arquitetura escalável e manutenível.",
          "Integração eficiente entre frontend e backend.",
        ],
      },
    },
    s4sLeadership: {
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
      architecturalDecisions: [
        "Escolha adequada de tecnologias baseada no contexto de cada projeto.",
        "Foco em eficiência e escalabilidade das soluções.",
        "Liderança técnica garantindo qualidade e boas práticas.",
      ],
      impact: {
        summary:
          "Ampliação da eficiência das soluções de Software através de liderança técnica e escolhas adequadas.",
        metrics: [
          "Múltiplos projetos entregues com sucesso.",
          "Melhoria na eficiência das equipes.",
          "Escolhas técnicas que resultam em soluções escaláveis.",
        ],
      },
    },
    hackathonCreaMa: {
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
    },
  },
  experience: {
    xviaGov: {
      company: "XVIA-GOV.BR",
      role: "Desenvolvedor Full Stack Sênior",
      responsibilities: [
        "Desenvolvimento de portal de governo digital para o Estado do Espírito Santo.",
        "Arquitetura e implementação de soluções digitais para serviços públicos.",
        "Integração com sistemas governamentais e APIs públicas.",
      ],
      technicalHighlights: [
        "React, NestJS, PostgreSQL, MariaDB, Keycloak, Docker, Kubernetes, Rancher.",
        "Arquitetura de soluções digitais para serviços públicos.",
        "Integração eficiente com sistemas governamentais.",
      ],
    },
    itia: {
      company: "ITIA - Instituto de Tecnologia e Inteligência Artificial",
      role: "Diretor de Tecnologia",
      responsibilities: [
        "Liderança técnica e estratégica do instituto, definindo roadmap tecnológico.",
        "Implementação de arquiteturas escaláveis para soluções de IA, incluindo integração de LLMs (LLaMA, GPT) em ambientes governamentais.",
        "Otimização de processos de MLOps e estabelecimento de pipelines de dados para treinamento de modelos personalizados.",
        "Desenvolvimento de soluções de software com Angular, Spring, Node.js, Oracle e PostgreSQL.",
        "Implementação de testes unitários e integração com JUnit e Mockito.",
      ],
      technicalHighlights: [
        "Liderança técnica em soluções de IA para governo.",
        "Integração de LLMs em ambientes restritos.",
        "MLOps e pipelines de dados para modelos personalizados.",
      ],
    },
    saudehdPleno: {
      company: "SaúdeHD",
      role: "Desenvolvedor de Software Pleno",
      responsibilities: [
        "Desenvolvimento frontend com Next.js + TypeScript utilizando biblioteca própria (Nucleus) e validação com Zod.",
        "Arquitetura backend em Node.js/NestJS com integração de chatbots de IA e processamento multimodal.",
        "Modelagem de dados em PostgreSQL e configuração de infraestrutura AWS (Cognito, Route53, EC2, S3).",
        "Desenvolvimento de aplicativo mobile com React Native + IA para triagem médica.",
        "Integração de chatbots com IA e implementação de soluções de IA em Python com TensorFlow.",
      ],
      technicalHighlights: [
        "Next.js, TypeScript, Nucleus, Zod, Node.js, NestJS, PostgreSQL, AWS, React Native, Python, TensorFlow.",
        "Integração completa de IA em múltiplas camadas.",
        "Experiência completa desde frontend até infraestrutura AWS.",
      ],
    },
    s4sSocio: {
      company: "s4S",
      role: "Sócio e Líder Técnico",
      responsibilities: [
        "Liderança do projeto para o Ministério Público de Rondônia: arquitetura de sistema em Angular + Spring com Oracle DB.",
        "Implementação de testes robustos (Karma, Jasmine, JUnit) e gerenciamento de migrações com Liquibase.",
        "Desenvolvimento de microsserviços em Java com testes de integração em PostgreSQL em containers Docker.",
        "Estratégia de CI/CD e mentoria técnica para equipe de 8 desenvolvedores.",
        "Desenvolvimento de aplicativo de mobilidade urbana com Java Nativo e Ktor, focado em baixa latência e arquitetura escalável.",
        "Liderança por 2 anos do desenvolvimento de aplicação Kotlin para broker de pagamentos digitais, com integrações de gateways, antifraude, mensageria Kafka, microsserviços, OAuth2, Postgres/Mongo e pipelines CI/CD.",
        "Implementação completa de Keycloak para SSO, OAuth2, OpenID Connect e RBAC, integração com Spring Security.",
        "Governança técnica com SonarQube, quality gates, pipelines CI/CD com GitHub Actions e GitLab CI.",
      ],
      technicalHighlights: [
        "Angular, Spring, Java, Kotlin, Oracle, PostgreSQL, MongoDB, Docker, Kafka, Keycloak, CI/CD.",
        "Liderança técnica de equipe de 8 desenvolvedores.",
        "Arquitetura de microsserviços e sistemas de pagamento.",
      ],
    },
    healthdev: {
      company: "HealthDev",
      role: "Desenvolvedor Full Stack",
      responsibilities: [
        "Desenvolvimento de soluções HealthTech para clínicas e hospitais utilizando ecossistema JavaScript/TypeScript.",
        "Arquitetura de sistemas com Next.js (frontend) e Express/Node.js (backend) para aplicações médicas de alta disponibilidade.",
        "Implementação de módulos HL7/FHIR para interoperabilidade entre sistemas de saúde.",
        "Integração com dispositivos médicos IoT e bancos de dados clínicos (PostgreSQL, MongoDB).",
        "Desenvolvimento de APIs RESTful seguras para processamento de dados sensíveis em saúde.",
      ],
      technicalHighlights: [
        "Next.js, Express, Node.js, TypeScript, PostgreSQL, MongoDB, HL7/FHIR, IoT.",
        "Soluções HealthTech de alta disponibilidade.",
        "Interoperabilidade entre sistemas de saúde.",
      ],
    },
    rmssystems: {
      company: "RMSSYSTEMS",
      role: "Desenvolvedor de Software Júnior",
      responsibilities: [
        "Desenvolvimento de sistema ERP completo e revolucionário.",
        "Contribuição para o projeto KTOK, plataforma inovadora de gerenciamento de conhecimento.",
        "Desenvolvimento utilizando PHP, JavaScript e Scriptcase.",
        "Trabalho com bancos de dados relacionais de alto desempenho.",
      ],
      technicalHighlights: [
        "Desenvolvimento de sistemas ERP complexos.",
        "Experiência com ferramentas RAD (Scriptcase).",
        "Trabalho remoto internacional com equipe em Portugal.",
      ],
    },
  },
  education: {
    ifce: {
      institution: "Instituto Federal do Ceará",
      degree:
        "Técnico em Tecnologia da Informação/Sistemas da Informação e Engenharia de Telecomunicações",
      description:
        "Bolsista do laboratório GDESTE, atuando em pesquisa especializada para o laboratório.",
    },
    pixels: {
      institution: "Pixels - Escola de Design e Tecnologia",
      degree: "Técnico em Robótica",
      description:
        "Carga horária total de 169 horas/aulas. Desenvolvimento de habilidades técnicas em Eletrônica Básica, Programação Arduino, Controle Via App, Desenho Técnico, Projeto 3D, Impressão 3D, Carro Automatizado, Articulações Robótica, Projeto Rover, Eletrônica Inteligentes, Casa Inteligente, Sistemas Integrados e Mostras.",
    },
    institutoMix: {
      institution: "Instituto Mix Fortaleza",
      degree: "Profissional Digital - Informática",
      description: "",
    },
  },
  achievements: {
    hackathonCreaCe1: {
      title: "1º Lugar - Hackathon do CREA-CE",
      issuer: "Conselho Regional de Engenharia e Agronomia do Ceará",
      description:
        "Solução de IA para inspeções prediais. Equipe S4S conquistou o primeiro lugar no Demoday da 2ª fase do 1° Hackathon do Crea-CE.",
    },
    hackathonCreaCe2: {
      title: "2º Lugar - 1º Hackathon do CREA-CE",
      issuer: "Conselho Regional de Engenharia e Agronomia do Ceará",
      description:
        "Equipe S4S conquistou a segunda colocação no primeiro hackathon do CREA-CE, desenvolvendo solução inovadora para o formulário de preenchimento da ART.",
    },
    hackathonCreaMa: {
      title: "Campeão - Hackathon IA CREA-MA",
      issuer: "VOA Inovação",
      description:
        "Líder da equipe vencedora no hackathon do CONFEA OPEN DAY. Desenvolvimento de plataforma inovadora para unificar registros profissionais utilizando SAP Business Suite, RPA e IA.",
    },
    hackathonConfea: {
      title: "Líder de Equipe de Inovação - Hackathon CONFEA",
      issuer: "CONFEA OPEN DAY",
      description:
        "Liderança da equipe que conquistou o segundo lugar no hackathon do CONFEA em Brasília. Desenvolvimento de plataforma para unificar registros profissionais de engenheiros, agrônomos e geocientistas.",
    },
    hackathonSecitece: {
      title: "2º Lugar - 4º Hackathon da Feira do Conhecimento",
      issuer: "SECITECE",
      description:
        "Equipe coordenada por mim desenvolveu solução de tecnologia em React Native em 48 horas intensas. Projeto Smart Education recebeu premiação.",
    },
    certAluraArquitetura: {
      title: "Formação Arquitetura de Software",
      issuer: "Alura",
      description: "Formação completa em arquitetura de software, design patterns, SOLID, DDD e arquitetura de microsserviços.",
    },
    certAluraDevops: {
      title: "Formação DevOps & Cloud",
      issuer: "Alura",
      description: "Formação em DevOps, CI/CD, Docker, Kubernetes, AWS e infraestrutura como código.",
    },
    certAluraNodejs: {
      title: "Formação Node.js com TypeScript",
      issuer: "Alura",
      description: "Formação avançada em Node.js, TypeScript, NestJS, APIs RESTful, GraphQL e testes automatizados.",
    },
    certDioFullstack: {
      title: "Bootcamp Fullstack Developer",
      issuer: "DIO",
      description: "Bootcamp completo em desenvolvimento fullstack com React, Node.js, TypeScript, bancos de dados e arquitetura de software.",
    },
    certDioCloud: {
      title: "Bootcamp Cloud Computing",
      issuer: "DIO",
      description: "Bootcamp em cloud computing com AWS, Azure, containers, orquestração e arquitetura de soluções escaláveis.",
    },
    certAluraReact: {
      title: "Formação React com TypeScript",
      issuer: "Alura",
      description: "Formação avançada em React, TypeScript, Next.js, testes, performance e arquitetura de componentes escaláveis.",
    },
  },
  contact: {
    form: {
      name: "Nome completo",
      email: "E-mail",
      contactType: "Tipo de contato",
      workMode: "Modalidade de trabalho",
      interest: "Área de interesse",
      message: "Mensagem / Contexto",
      submit: "Enviar por E-mail",
      submitting: "Enviando...",
      whatsapp: "Abrir WhatsApp",
      orSendTo: "Ou envie diretamente para",
      selectOption: "Selecione uma opção",
      selectOptional: "Selecione (opcional)",
      contactTypeOptions: {
        consultoria: "Consultoria Técnica",
        processoSeletivo: "Processo Seletivo",
        entrevista: "Entrevista",
        projeto: "Projeto Específico",
        parceria: "Parceria / Colaboração",
        outro: "Outro",
      },
      workModeOptions: {
        pj: "PJ (Pessoa Jurídica)",
        clt: "CLT",
        freelance: "Freelance",
        estagio: "Estágio",
        indiferente: "Indiferente",
      },
      interestOptions: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        fullstack: "Full Stack Development",
        mobile: "Mobile Development",
        devops: "DevOps / Infraestrutura",
        ia: "Inteligência Artificial",
        arquitetura: "Arquitetura de Software",
        lideranca: "Liderança Técnica",
        outro: "Outro",
      },
      placeholders: {
        name: "Seu nome completo",
        email: "seu.email@exemplo.com",
        message:
          "Descreva seu projeto, desafio técnico, oportunidade de colaboração ou contexto da proposta...",
      },
      errors: {
        nameRequired: "Por favor, informe seu nome.",
        emailRequired: "Por favor, informe um e-mail válido.",
        emailInvalid: "Por favor, informe um e-mail válido.",
        contactTypeRequired: "Por favor, selecione o tipo de contato.",
        messageRequired: "Por favor, escreva uma mensagem com pelo menos 10 caracteres.",
        messageMinLength: "Por favor, escreva uma mensagem com pelo menos 10 caracteres.",
        submitError: "Erro ao enviar mensagem. Tente novamente.",
        connectionError:
          "Erro de conexão. Verifique sua internet e tente novamente.",
      },
      success: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    },
  },
  common: {
    context: "Contexto",
    audience: "Cenário de uso",
    responsibilities: "Responsabilidades diretas",
    technicalHighlights: "Destaques técnicos",
    stack: "Stack utilizada",
    architecturalDecisions: "Decisões arquiteturais",
    impact: "Impacto",
    depth: "Profundidade",
    leading: "Líder",
    expert: "Expert",
    practical: "Prático",
    current: "Atual",
    period: "Período",
    viewMore: "Ver mais",
    viewProject: "Ver projeto",
    resume: "Currículo",
    downloadPDF: "Baixar PDF",
    print: "Imprimir",
    downloadResume: "Baixar Currículo",
  },
};


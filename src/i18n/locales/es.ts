import { Translations } from "../types";

export const es: Translations = {
  nav: {
    projects: "Proyectos",
    stack: "Stack",
    experience: "Experiencia",
    education: "Educación",
    achievements: "Logros",
    about: "Acerca de",
    contact: "Contacto",
    availability: "Ver disponibilidad",
  },
  hero: {
    headline:
      "Profesional multidisciplinario en desarrollo full-stack, arquitectura de sistemas, IA y liderazgo técnico, con experiencia en salud, gobierno e ingeniería.",
    description:
      "Profesional enfocado en sistemas críticos en producción, arquitectura clara y decisiones técnicas que pueden defenderse en cualquier revisión de código senior.",
    location: "Fortaleza, Ceará, Brasil · Disponible para trabajo híbrido",
    valueProposition: "Cómo puedo generar valor",
    viewProjects: "Ver proyectos en producción",
    contact: "Ponerse en contacto",
  },
  sections: {
    projects: {
      title: "Proyectos",
      subtitle: "Casos reales enfocados en contexto, decisiones técnicas e impacto.",
    },
    stack: {
      title: "Stack y Experiencia",
      subtitle: "Organizado por dominio técnico, enfatizando profundidad y contexto de uso.",
      pageTitle: "Stack y Experiencia",
      pageDescription: "Organizado por dominio técnico, enfatizando profundidad y contexto de uso. Explore tecnologías, tiempo de experiencia y proyectos relacionados.",
      backToHome: "Volver al inicio",
      exploreDescription: "Explore tecnologías detalladas con tiempo de experiencia y proyectos relacionados",
      viewFullStack: "Ver Stack Completo",
      mainStack: "Stack principal",
      searchPlaceholder: "Ej: React, Node.js...",
      searchLabel: "Buscar tecnología",
      categoryLabel: "Categoría",
      proficiencyLabel: "Competencia",
      domainLabel: "Dominio",
      clearFilters: "Limpiar filtros",
      noResults: "No se encontraron tecnologías",
      allCategories: "Todas",
      allProficiencies: "Todas",
      allDomains: "Todos",
      technologiesFound: "tecnologías encontradas",
      technologyFound: "tecnología encontrada",
      experienceLabel: "de experiencia",
      project: "proyecto",
      projects: "proyectos",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        infra: "Infraestructura",
        data: "Base de Datos",
        mobile: "Móvil",
        ai: "IA y ML",
        testing: "Pruebas",
        other: "Otros",
      },
      proficiencies: {
        beginner: "Principiante",
        intermediate: "Intermedio",
        advanced: "Avanzado",
        expert: "Experto",
        leading: "Líder",
      },
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Trabajo en productos digitales con responsabilidad directa sobre código en producción.",
    },
    education: {
      title: "Formación Académica",
      subtitle: "Educación formal y cursos técnicos que fundamentan mi trabajo profesional.",
    },
    achievements: {
      title: "Logros y Certificaciones",
      subtitle: "Reconocimientos, premios y certificaciones que validan mi experiencia técnica.",
    },
    about: {
      title: "Acerca de",
      subtitle: "Cómo veo la ingeniería de software y dónde suelo generar más valor.",
      summary:
        "Profesional multidisciplinario con más de 8 años de experiencia en desarrollo full-stack, arquitectura de sistemas y liderazgo técnico. Especialista en transformación digital con experiencia en salud, gobierno e ingeniería, dominando todo el ciclo de desarrollo: desde la concepción estratégica hasta la entrega en producción. Fuerte experiencia en Inteligencia Artificial (LLMs, fine-tuning, inferencia local), computación en la nube (AWS) y desarrollo ágil, entregando soluciones que generan impacto real y medible.",
      paragraph2:
        "A lo largo de mi carrera he trabajado en salud, gobierno e ingeniería, siempre enfocándome en soluciones que generen impacto real y medible.",
      paragraph3:
        "Si buscas a alguien para ayudar a diseñar, construir o escalar sistemas críticos, vale la pena hablar conmigo (Nickolas Madeiro).",
    },
    contact: {
      title: "Contacto",
      subtitle: "Contexto técnico primero, luego herramientas. Envíame el escenario que necesitas desbloquear.",
      description:
        "Si ves alineación entre lo que hago y los desafíos de tu producto, el siguiente paso es simple: envíame el contexto técnico y de negocio que necesita refuerzo.",
      suggestion:
        "Sugerencia: incluye en el contacto el contexto del sistema, principales restricciones técnicas y expectativas para el rol.",
    },
    chatbot: {
      title: "Asistente Virtual",
      subtitle: "Conversa sobre Nickolas Madeiro",
      welcomeMessage: "¡Hola! 👋 Soy un asistente virtual para ayudarte a conocer mejor a Nickolas Madeiro. Puedo responder preguntas sobre su experiencia profesional, proyectos desarrollados, habilidades técnicas, formación académica y mucho más. ¿Qué te gustaría saber?",
      inputPlaceholder: "Escribe tu pregunta...",
      listeningPlaceholder: "🎤 Escuchando...",
      inputHint: "Presiona Enter para enviar, Shift+Enter para nueva línea",
      sendButton: "Enviar mensaje",
      toggleButton: "Abrir/cerrar chatbot",
      clearChat: "Limpiar conversación",
      startRecording: "Iniciar grabación de voz",
      stopRecording: "Detener grabación",
      errorMessage: "Lo siento, ocurrió un error al procesar tu mensaje. Por favor, intenta de nuevo.",
    },
  },
  projects: {
    llamagov: {
      name: "LLaMAGov - Framework para LLMs en Entornos Gubernamentales",
      context:
        "Framework para despliegue local de LLMs en entornos gubernamentales restringidos. Solución containerizada con Ollama para procesamiento offline de documentos sensibles.",
      audience: "Agencias gubernamentales que necesitan procesar documentos sensibles con IA sin exponer datos.",
      responsibilities: [
        "Desarrollo de framework containerizado con Ollama para procesamiento offline.",
        "Arquitectura para entornos restringidos sin acceso a internet.",
        "Optimización de inferencia local de LLMs.",
        "Procesamiento seguro de documentos sensibles.",
      ],
      architecturalDecisions: [
        "Containerización completa para facilitar despliegue en entornos restringidos.",
        "Procesamiento offline garantizando seguridad de datos sensibles.",
        "Optimización de modelos para inferencia local eficiente.",
      ],
      impact: {
        summary: "80% de reducción en tiempo de procesamiento de documentos gubernamentales.",
        metrics: [
          "Procesamiento offline de documentos sensibles.",
          "Reducción significativa en tiempo de análisis.",
          "Seguridad garantizada sin exposición de datos.",
        ],
      },
    },
    nucleus: {
      name: "Nucleus - Biblioteca de Componentes Next.js",
      context:
        "Biblioteca interna de componentes para Next.js con TypeScript. Sistema de diseño con más de 50 componentes accesibles, pruebas automatizadas y documentación interactiva.",
      audience: "Equipos de desarrollo frontend que necesitan componentes estandarizados y accesibles.",
      responsibilities: [
        "Desarrollo de más de 50 componentes accesibles.",
        "Sistema de diseño completo.",
        "Pruebas automatizadas con Jest.",
        "Documentación interactiva usando Storybook.",
      ],
      architecturalDecisions: [
        "Enfoque en accesibilidad y estándares WCAG.",
        "Componentes reutilizables y probables.",
        "Documentación interactiva para facilitar adopción.",
      ],
      impact: {
        summary: "Reducción del 40% en tiempo de desarrollo frontend.",
        metrics: [
          "Más de 50 componentes listos para usar.",
          "Estandarización visual y funcional.",
          "Mejora en velocidad de desarrollo.",
        ],
      },
    },
    xviaGov: {
      name: "XVIA-GOV.BR - Portal de Gobierno Digital ES",
      context:
        "Desarrollo de portal de gobierno digital para el Estado de Espírito Santo. Arquitectura e implementación de soluciones digitales para servicios públicos con integración a sistemas gubernamentales.",
      audience: "Ciudadanos y empresas de Espírito Santo que necesitan acceder a servicios públicos digitales.",
      responsibilities: [
        "Desarrollo frontend con React.",
        "Arquitectura backend en NestJS.",
        "Integración con sistemas gubernamentales y APIs públicas.",
        "Gestión de bases de datos PostgreSQL y MariaDB.",
        "Configuración de autenticación con Keycloak.",
        "Despliegue en Docker y Kubernetes con Rancher.",
      ],
      architecturalDecisions: [
        "Arquitectura de microservicios para escalabilidad.",
        "Autenticación centralizada con Keycloak (SSO).",
        "Containerización completa para facilitar despliegue.",
        "Integración segura con APIs gubernamentales.",
      ],
      impact: {
        summary: "Portal digital moderno para servicios públicos de ES.",
        metrics: [
          "Acceso simplificado a servicios públicos.",
          "Integración eficiente con sistemas existentes.",
          "Arquitectura escalable y segura.",
        ],
      },
    },
    easyerp: {
      name: "EasyERP - Sistema ERP para Logística",
      context:
        "Sistema ERP completo para logística en Portugal desarrollado con PHP, JavaScript y Scriptcase. Arquitectura modular para gestión de flota, inventario y cadena de suministro.",
      audience: "Empresas de logística en Portugal que necesitan gestión integrada.",
      responsibilities: [
        "Desarrollo completo del sistema ERP.",
        "Arquitectura modular para diferentes módulos.",
        "Integración en tiempo real con sistemas fiscales portugueses.",
        "Gestión de flota, inventario y cadena de suministro.",
      ],
      architecturalDecisions: [
        "Arquitectura modular para facilitar mantenimiento.",
        "Integración en tiempo real con sistemas externos.",
        "Procesamiento eficiente de grandes volúmenes de datos.",
      ],
      impact: {
        summary: "Sistema procesando más de 5.000 transacciones diarias.",
        metrics: [
          "Gestión completa de logística.",
          "Integración eficiente con sistemas fiscales.",
          "Alto rendimiento en procesamiento de transacciones.",
        ],
      },
    },
    elegebr: {
      name: "ElegeBR - Plataforma CRM Político",
      context:
        "Plataforma CRM político desarrollada con React, Node.js y MongoDB para campañas electorales. Incluye análisis de perfil electoral, automatización de marketing político y dashboard en tiempo real.",
      audience: "Candidatos y equipos de campaña electoral.",
      responsibilities: [
        "Desarrollo frontend con React.",
        "Backend en Node.js con MongoDB.",
        "Módulos de análisis de perfil electoral.",
        "Automatización de marketing político.",
        "Dashboard de seguimiento en tiempo real.",
      ],
      architecturalDecisions: [
        "Arquitectura orientada a datos para análisis.",
        "Procesamiento en tiempo real de datos electorales.",
        "Automatización inteligente de campañas.",
      ],
      impact: {
        summary: "Plataforma completa para gestión de campañas electorales.",
        metrics: [
          "Análisis eficiente de perfiles electorales.",
          "Automatización de marketing político.",
          "Dashboard en tiempo real para toma de decisiones.",
        ],
      },
    },
    investplus: {
      name: "Invest Plus",
      context:
        "A través de nuestra plataforma, estamos brindando acceso a un mercado que hace pocos años estaba restringido a grandes fondos.",
      audience: "Inversores y empresas que buscan financiamiento alternativo.",
      responsibilities: [
        "Desarrollo frontend con Angular y PrimeNG.",
        "Backend en Spring Boot con NestJS.",
        "Gestión de migraciones de base de datos con Liquibase.",
        "Configuración y despliegue en AWS usando Amplify y EC2.",
        "Implementación de autenticación con AWS Cognito.",
        "Almacenamiento de archivos con AWS S3 Bucket.",
        "Integración con ClickSign para firma digital de documentos.",
      ],
      architecturalDecisions: [
        "Arquitectura cloud-native en AWS con múltiples servicios integrados.",
        "Autenticación y autorización gestionadas por AWS Cognito.",
        "Migraciones de base de datos versionadas con Liquibase.",
        "Integración con ClickSign para flujos de firma digital.",
        "Almacenamiento escalable de archivos en S3.",
      ],
      impact: {
        summary: "Democratización del acceso a inversiones alternativas anteriormente restringidas a grandes fondos.",
        metrics: [
          "Plataforma completa para inversiones alternativas.",
          "Integración segura con servicios AWS.",
          "Firma digital de documentos integrada.",
          "Experiencia de usuario moderna con Angular y PrimeNG.",
        ],
      },
    },
    bsid: {
      name: "BSID - Aplicación Android para Lectura de Ultrasonido",
      context:
        "Aplicación Android nativa (Kotlin) para lectura de ultrasonido y frecuencias no audibles. Convierte patrones de frecuencia en datos estructurados con notificaciones en tiempo real.",
      audience: "Profesionales de salud que necesitan analizar datos de ultrasonido.",
      responsibilities: [
        "Desarrollo Android nativo en Kotlin.",
        "Algoritmos de procesamiento de señal digital (FFT).",
        "Conversión de frecuencias en datos estructurados.",
        "Notificaciones en tiempo real.",
      ],
      architecturalDecisions: [
        "Procesamiento local de señales para baja latencia.",
        "Algoritmos FFT para análisis de frecuencias.",
        "Notificaciones en tiempo real para alertas.",
      ],
      impact: {
        summary: "Aplicación para análisis de ultrasonido en tiempo real.",
        metrics: [
          "Procesamiento eficiente de señales.",
          "Conversión precisa de frecuencias.",
          "Notificaciones en tiempo real.",
        ],
      },
    },
    saudehdPlatform: {
      name: "Plataforma SaúdeHD - Sistema de Gestión en Salud",
      context:
        "Plataforma completa de gestión para el sector de salud, incluyendo frontend en Next.js/TypeScript, backend en Node.js/NestJS, integración con IA para chatbots, aplicación móvil en React Native y soluciones de IA en Python con TensorFlow.",
      audience: "Profesionales de salud, pacientes y organizaciones del sector de salud.",
      responsibilities: [
        "Desarrollo frontend con Next.js y TypeScript utilizando biblioteca propia Nucleus e integración con Zod.",
        "Arquitectura backend robusta en Node.js y NestJS.",
        "Integración de chatbots con IA y desarrollo de aplicación React Native con funcionalidades de IA.",
        "Implementación de soluciones de IA en Python usando TensorFlow.",
        "Gestión de base de datos PostgreSQL y configuración de infraestructura AWS (Cognito, Route53).",
        "Creación de landing pages en WordPress.",
      ],
      architecturalDecisions: [
        "Uso de biblioteca propia Nucleus para estandarización de componentes y mejor mantenibilidad.",
        "Integración de IA en múltiples capas (chatbots, móvil, backend) para mejorar experiencia del usuario.",
        "Arquitectura modular permitiendo escalabilidad y mantenimiento eficiente.",
      ],
      impact: {
        summary: "Modernización y eficiencia de servicios de salud a través de tecnología innovadora.",
        metrics: [
          "Mejora en conexión entre profesionales, pacientes y organizaciones.",
          "Automatización de procesos a través de IA.",
          "Experiencia móvil completa con funcionalidades inteligentes.",
        ],
      },
    },
    mproAssistencia: {
      name: "Asistencia Salud - Ministerio Público de Rondônia",
      context:
        "Proyecto crucial para el Ministerio Público de Rondônia, desarrollando sistema completo con frontend en Angular/TypeScript y backend en Java/Spring Framework.",
      audience: "Ministerio Público de Rondônia y profesionales del sector de salud.",
      responsibilities: [
        "Desarrollo frontend en Angular y TypeScript con estilización SCSS (SASS).",
        "Implementación de pruebas unitarias robustas con Karma y Jasmine.",
        "Desarrollo backend en Java con Spring Framework.",
        "Gestión y creación de entidades en base de datos Oracle.",
        "Configuración y gestión de migraciones con Liquibase.",
        "Gestión de dependencias con Maven.",
        "Pruebas backend con JUnit, Mockito y Spring Test, incluyendo pruebas de integración con PostgreSQL en Docker.",
      ],
      architecturalDecisions: [
        "Separación clara entre capas de frontend y backend para facilitar mantenimiento.",
        "Uso de pruebas unitarias y de integración para garantizar calidad del código.",
        "Migraciones controladas con Liquibase para versionamiento de base de datos.",
      ],
      impact: {
        summary: "Sistema robusto y confiable para gestión de asistencia a la salud en MPRO.",
        metrics: [
          "Cobertura de pruebas garantizando calidad y confiabilidad.",
          "Arquitectura escalable y mantenible.",
          "Integración eficiente entre frontend y backend.",
        ],
      },
    },
    s4sLeadership: {
      name: "S4S - Liderazgo Técnico y Soluciones Multi-proyecto",
      context:
        "Actuación como socio y líder técnico en múltiples proyectos, desde soluciones en Angular/Spring hasta ReactJS/NodeJS, proporcionando las mejores elecciones técnicas y gerenciales.",
      audience: "Múltiples clientes y proyectos de S4S.",
      responsibilities: [
        "Liderazgo técnico del equipo proporcionando las mejores elecciones técnicas y gerenciales.",
        "Desarrollo de soluciones en Angular con Spring Framework.",
        "Desarrollo de soluciones en ReactJS con NodeJS.",
        "Ampliación de eficiencia de soluciones de Software en múltiples proyectos.",
      ],
      architecturalDecisions: [
        "Elección adecuada de tecnologías basada en contexto de cada proyecto.",
        "Enfoque en eficiencia y escalabilidad de soluciones.",
        "Liderazgo técnico garantizando calidad y buenas prácticas.",
      ],
      impact: {
        summary:
          "Ampliación de eficiencia de soluciones de Software a través de liderazgo técnico y elecciones adecuadas.",
        metrics: [
          "Múltiples proyectos entregados con éxito.",
          "Mejora en eficiencia de equipos.",
          "Elecciones técnicas que resultan en soluciones escalables.",
        ],
      },
    },
    hackathonCreaMa: {
      name: "Hackathons IA CREA-CE y CREA-MA - Campeón",
      context:
        "Desarrollo de plataforma innovadora para unificar registros profesionales de ingenieros, agrónomos y geocientíficos en todo Brasil, utilizando SAP Business Suite, RPA e IA. Ganó el 1º lugar en ambos hackathons (CREA-CE y CREA-MA), resultando en la contratación para desarrollo del proyecto.",
      audience: "CONFEA, CREAs regionales y profesionales registrados.",
      responsibilities: [
        "Liderazgo del equipo durante los hackathons.",
        "Desarrollo de solución integrada utilizando SAP Business Suite y RPA.",
        "Incorporación de inteligencia artificial para simplificar emisión de ARTs.",
        "Presentación del pitch destacando funcionalidades y beneficios.",
        "Desarrollo del proyecto después de las victorias en los hackathons.",
      ],
      architecturalDecisions: [
        "Integración de SAP Business Suite con RPA para monitoreo continuo.",
        "Uso de IA para automatización de procesos complejos.",
        "Solución enfocada en conformidad y eficiencia.",
      ],
      impact: {
        summary:
          "1º lugar en ambos hackathons (CREA-CE y CREA-MA) demostrando capacidad de liderazgo y desarrollo de soluciones innovadoras, resultando en la contratación para desarrollo del proyecto.",
        metrics: [
          "🏆 1º lugar en Hackathon IA CREA-CE",
          "🏆 1º lugar en Hackathon IA CREA-MA",
          "Proyecto contratado después de las victorias en los hackathons",
          "Solución para 500.000+ profesionales registrados en Brasil",
          "Reducción del 90% en tiempo de emisión de ARTs con IA",
          "Reconocimiento del panel técnico y empresarial",
        ],
      },
    },
  },
  experience: {
    xviaGov: {
      company: "XVIA-GOV.BR",
      role: "Desarrollador Full Stack Senior",
      responsibilities: [
        "Desarrollo de portal de gobierno digital para el Estado de Espírito Santo.",
        "Arquitectura e implementación de soluciones digitales para servicios públicos.",
        "Integración con sistemas gubernamentales y APIs públicas.",
      ],
      technicalHighlights: [
        "React, NestJS, PostgreSQL, MariaDB, Keycloak, Docker, Kubernetes, Rancher.",
        "Arquitectura de soluciones digitales para servicios públicos.",
        "Integración eficiente con sistemas gubernamentales.",
      ],
    },
    itia: {
      company: "ITIA - Instituto de Tecnología e Inteligencia Artificial",
      role: "Director de Tecnología",
      responsibilities: [
        "Liderazgo técnico y estratégico del instituto, definiendo roadmap tecnológico.",
        "Implementación de arquitecturas escalables para soluciones de IA, incluyendo integración de LLMs (LLaMA, GPT) en entornos gubernamentales.",
        "Optimización de procesos de MLOps y establecimiento de pipelines de datos para entrenamiento de modelos personalizados.",
        "Desarrollo de soluciones de software con Angular, Spring, Node.js, Oracle y PostgreSQL.",
        "Implementación de pruebas unitarias e integración con JUnit y Mockito.",
      ],
      technicalHighlights: [
        "Liderazgo técnico en soluciones de IA para gobierno.",
        "Integración de LLMs en entornos restringidos.",
        "MLOps y pipelines de datos para modelos personalizados.",
      ],
    },
    saudehdPleno: {
      company: "SaúdeHD",
      role: "Desarrollador de Software Pleno",
      responsibilities: [
        "Desarrollo frontend con Next.js + TypeScript utilizando biblioteca propia (Nucleus) y validación con Zod.",
        "Arquitectura backend en Node.js/NestJS con integración de chatbots de IA y procesamiento multimodal.",
        "Modelado de datos en PostgreSQL y configuración de infraestructura AWS (Cognito, Route53, EC2, S3).",
        "Desarrollo de aplicación móvil con React Native + IA para triaje médico.",
        "Integración de chatbots con IA e implementación de soluciones de IA en Python con TensorFlow.",
      ],
      technicalHighlights: [
        "Next.js, TypeScript, Nucleus, Zod, Node.js, NestJS, PostgreSQL, AWS, React Native, Python, TensorFlow.",
        "Integración completa de IA en múltiples capas.",
        "Experiencia completa desde frontend hasta infraestructura AWS.",
      ],
    },
    s4sSocio: {
      company: "s4S",
      role: "Socio y Líder Técnico",
      responsibilities: [
        "Liderazgo del proyecto para el Ministerio Público de Rondônia: arquitectura de sistema en Angular + Spring con Oracle DB.",
        "Implementación de pruebas robustas (Karma, Jasmine, JUnit) y gestión de migraciones con Liquibase.",
        "Desarrollo de microservicios en Java con pruebas de integración en PostgreSQL en contenedores Docker.",
        "Estrategia de CI/CD y mentoría técnica para equipo de 8 desarrolladores.",
        "Desarrollo de aplicación de movilidad urbana con Java Nativo y Ktor, enfocado en baja latencia y arquitectura escalable.",
        "Liderazgo por 2 años del desarrollo de aplicación Kotlin para broker de pagos digitales, con integraciones de gateways, antifraude, mensajería Kafka, microservicios, OAuth2, Postgres/Mongo y pipelines CI/CD.",
        "Implementación completa de Keycloak para SSO, OAuth2, OpenID Connect y RBAC, integración con Spring Security.",
        "Gobernanza técnica con SonarQube, quality gates, pipelines CI/CD con GitHub Actions y GitLab CI.",
      ],
      technicalHighlights: [
        "Angular, Spring, Java, Kotlin, Oracle, PostgreSQL, MongoDB, Docker, Kafka, Keycloak, CI/CD.",
        "Liderazgo técnico de equipo de 8 desarrolladores.",
        "Arquitectura de microservicios y sistemas de pago.",
      ],
    },
    healthdev: {
      company: "HealthDev",
      role: "Desarrollador Full Stack",
      responsibilities: [
        "Desarrollo de soluciones HealthTech para clínicas y hospitales utilizando ecosistema JavaScript/TypeScript.",
        "Arquitectura de sistemas con Next.js (frontend) y Express/Node.js (backend) para aplicaciones médicas de alta disponibilidad.",
        "Implementación de módulos HL7/FHIR para interoperabilidad entre sistemas de salud.",
        "Integración con dispositivos médicos IoT y bases de datos clínicas (PostgreSQL, MongoDB).",
        "Desarrollo de APIs RESTful seguras para procesamiento de datos sensibles en salud.",
      ],
      technicalHighlights: [
        "Next.js, Express, Node.js, TypeScript, PostgreSQL, MongoDB, HL7/FHIR, IoT.",
        "Soluciones HealthTech de alta disponibilidad.",
        "Interoperabilidad entre sistemas de salud.",
      ],
    },
    rmssystems: {
      company: "RMSSYSTEMS",
      role: "Desarrollador de Software Junior",
      responsibilities: [
        "Desarrollo de sistema ERP completo y revolucionario.",
        "Contribución al proyecto KTOK, plataforma innovadora de gestión de conocimiento.",
        "Desarrollo utilizando PHP, JavaScript y Scriptcase.",
        "Trabajo con bases de datos relacionales de alto rendimiento.",
      ],
      technicalHighlights: [
        "Desarrollo de sistemas ERP complejos.",
        "Experiencia con herramientas RAD (Scriptcase).",
        "Trabajo remoto internacional con equipo en Portugal.",
      ],
    },
  },
  education: {
    ifce: {
      institution: "Instituto Federal de Ceará",
      degree: "Técnico en Tecnología de la Información/Sistemas de Información e Ingeniería de Telecomunicaciones",
      description:
        "Becario del laboratorio GDESTE, trabajando en investigación especializada para el laboratorio.",
    },
    pixels: {
      institution: "Pixels - Escuela de Diseño y Tecnología",
      degree: "Técnico en Robótica",
      description:
        "Carga horaria total de 169 horas/aula. Desarrollo de habilidades técnicas en Electrónica Básica, Programación Arduino, Control Via App, Dibujo Técnico, Proyecto 3D, Impresión 3D, Carro Automatizado, Articulaciones Robótica, Proyecto Rover, Electrónica Inteligentes, Casa Inteligente, Sistemas Integrados y Muestras.",
    },
    institutoMix: {
      institution: "Instituto Mix Fortaleza",
      degree: "Profesional Digital - Informática",
      description: "",
    },
  },
  achievements: {
    hackathonCreaCe1: {
      title: "1º Lugar - Hackathon del CREA-CE",
      issuer: "Consejo Regional de Ingeniería y Agronomía de Ceará",
      description:
        "Solución de IA para inspecciones de edificios. Equipo S4S ganó el primer lugar en el Demo Day de la 2ª fase del 1° Hackathon del CREA-CE.",
    },
    hackathonCreaCe2: {
      title: "2º Lugar - 1º Hackathon del CREA-CE",
      issuer: "Consejo Regional de Ingeniería y Agronomía de Ceará",
      description:
        "Equipo S4S ganó el segundo lugar en el primer hackathon del CREA-CE, desarrollando solución innovadora para el formulario de llenado de ART.",
    },
    hackathonCreaMa: {
      title: "Campeón - Hackathon IA CREA-MA",
      issuer: "VOA Innovación",
      description:
        "Líder del equipo ganador en el hackathon del CONFEA OPEN DAY. Desarrollo de plataforma innovadora para unificar registros profesionales utilizando SAP Business Suite, RPA e IA.",
    },
    hackathonConfea: {
      title: "Líder de Equipo de Innovación - Hackathon CONFEA",
      issuer: "CONFEA OPEN DAY",
      description:
        "Liderazgo del equipo que ganó el segundo lugar en el hackathon del CONFEA en Brasília. Desarrollo de plataforma para unificar registros profesionales de ingenieros, agrónomos y geocientíficos.",
    },
    hackathonSecitece: {
      title: "2º Lugar - 4º Hackathon de la Feria del Conocimiento",
      issuer: "SECITECE",
      description:
        "Equipo coordinado por mí desarrolló solución tecnológica en React Native en 48 horas intensas. Proyecto Smart Education recibió premio.",
    },
    certAluraArquitetura: {
      title: "Formación Arquitectura de Software",
      issuer: "Alura",
      description: "Formación completa en arquitectura de software, design patterns, SOLID, DDD y arquitectura de microservicios.",
    },
    certAluraDevops: {
      title: "Formación DevOps & Cloud",
      issuer: "Alura",
      description: "Formación en DevOps, CI/CD, Docker, Kubernetes, AWS e infraestructura como código.",
    },
    certAluraNodejs: {
      title: "Formación Node.js con TypeScript",
      issuer: "Alura",
      description: "Formación avanzada en Node.js, TypeScript, NestJS, APIs RESTful, GraphQL y pruebas automatizadas.",
    },
    certDioFullstack: {
      title: "Bootcamp Fullstack Developer",
      issuer: "DIO",
      description: "Bootcamp completo en desarrollo fullstack con React, Node.js, TypeScript, bases de datos y arquitectura de software.",
    },
    certDioCloud: {
      title: "Bootcamp Cloud Computing",
      issuer: "DIO",
      description: "Bootcamp en cloud computing con AWS, Azure, contenedores, orquestración y arquitectura de soluciones escalables.",
    },
    certAluraReact: {
      title: "Formación React con TypeScript",
      issuer: "Alura",
      description: "Formación avanzada en React, TypeScript, Next.js, pruebas, rendimiento y arquitectura de componentes escalables.",
    },
  },
  contact: {
    form: {
      name: "Nombre completo",
      email: "Correo electrónico",
      contactType: "Tipo de contacto",
      workMode: "Modalidad de trabajo",
      interest: "Área de interés",
      message: "Mensaje / Contexto",
      submit: "Enviar por Correo",
      submitting: "Enviando...",
      whatsapp: "Abrir WhatsApp",
      orSendTo: "O enviar directamente a",
      selectOption: "Seleccione una opción",
      selectOptional: "Seleccione (opcional)",
      contactTypeOptions: {
        consultoria: "Consultoría Técnica",
        processoSeletivo: "Proceso de Selección",
        entrevista: "Entrevista",
        projeto: "Proyecto Específico",
        parceria: "Asociación / Colaboración",
        outro: "Otro",
      },
      workModeOptions: {
        pj: "PJ (Persona Jurídica)",
        clt: "CLT",
        freelance: "Freelance",
        estagio: "Pasantía",
        indiferente: "Indiferente",
      },
      interestOptions: {
        frontend: "Desarrollo Frontend",
        backend: "Desarrollo Backend",
        fullstack: "Desarrollo Full Stack",
        mobile: "Desarrollo Móvil",
        devops: "DevOps / Infraestructura",
        ia: "Inteligencia Artificial",
        arquitetura: "Arquitectura de Software",
        lideranca: "Liderazgo Técnico",
        outro: "Otro",
      },
      placeholders: {
        name: "Su nombre completo",
        email: "su.correo@ejemplo.com",
        message:
          "Describa su proyecto, desafío técnico, oportunidad de colaboración o contexto de la propuesta...",
      },
      errors: {
        nameRequired: "Por favor, proporcione su nombre.",
        emailRequired: "Por favor, proporcione un correo válido.",
        emailInvalid: "Por favor, proporcione un correo válido.",
        contactTypeRequired: "Por favor, seleccione el tipo de contacto.",
        messageRequired: "Por favor, escriba un mensaje con al menos 10 caracteres.",
        messageMinLength: "Por favor, escriba un mensaje con al menos 10 caracteres.",
        submitError: "Error al enviar mensaje. Por favor, intente nuevamente.",
        connectionError: "Error de conexión. Verifique su internet e intente nuevamente.",
      },
      success: "¡Mensaje enviado con éxito! Me pondré en contacto pronto.",
    },
  },
  common: {
    context: "Contexto",
    audience: "Escenario de uso",
    responsibilities: "Responsabilidades directas",
    technicalHighlights: "Destacados técnicos",
    stack: "Stack utilizada",
    architecturalDecisions: "Decisiones arquitectónicas",
    impact: "Impacto",
    depth: "Profundidad",
    leading: "Líder",
    expert: "Experto",
    practical: "Práctico",
    current: "Actual",
    period: "Período",
    viewMore: "Ver más",
    viewProject: "Ver proyecto",
    resume: "Currículum",
    downloadPDF: "Descargar PDF",
    print: "Imprimir",
    downloadResume: "Descargar Currículum",
  },
  footer: {
    copyright: "Nickolas Madeiro. Todos los derechos reservados.",
    rights: "Todos los derechos reservados",
    poweredBy: "Desarrollado por",
  },
};


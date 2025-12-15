import { Translations } from "../types";

export const en: Translations = {
  nav: {
    projects: "Projects",
    stack: "Stack",
    experience: "Experience",
    education: "Education",
    achievements: "Achievements",
    about: "About",
    contact: "Contact",
    availability: "View availability",
  },
  hero: {
    headline:
      "Multidisciplinary professional in full-stack development, system architecture, AI and technical leadership, with experience in healthcare, government and engineering.",
    description:
      "Professional focused on critical production systems, clear architecture and technical decisions that can be defended in any senior code review.",
    location: "Fortaleza, Ceará, Brazil · Available for hybrid work",
    valueProposition: "How I can generate value",
    viewProjects: "View projects in production",
    contact: "Get in touch",
  },
  sections: {
    projects: {
      title: "Projects",
      subtitle: "Real cases focusing on context, technical decisions and impact.",
    },
    stack: {
      title: "Stack & Expertise",
      subtitle: "Organized by technical domain, emphasizing depth and usage context.",
      pageTitle: "Stack & Expertise",
      pageDescription: "Organized by technical domain, emphasizing depth and usage context. Explore technologies, experience time and related projects.",
      backToHome: "Back to home",
      exploreDescription: "Explore detailed technologies with experience time and related projects",
      viewFullStack: "View Full Stack",
      mainStack: "Main stack",
      searchPlaceholder: "E.g: React, Node.js...",
      searchLabel: "Search technology",
      categoryLabel: "Category",
      proficiencyLabel: "Proficiency",
      domainLabel: "Domain",
      clearFilters: "Clear filters",
      noResults: "No technologies found",
      allCategories: "All",
      allProficiencies: "All",
      allDomains: "All",
      technologiesFound: "technologies found",
      technologyFound: "technology found",
      experienceLabel: "of experience",
      project: "project",
      projects: "projects",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        infra: "Infrastructure",
        data: "Database",
        mobile: "Mobile",
        ai: "AI & ML",
        testing: "Testing",
        other: "Other",
      },
      proficiencies: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        expert: "Expert",
        leading: "Leading",
      },
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Work on digital products with direct responsibility for production code.",
    },
    education: {
      title: "Academic Background",
      subtitle: "Formal education and technical courses that support my professional work.",
    },
    achievements: {
      title: "Achievements & Certifications",
      subtitle: "Recognition, awards and certifications that validate my technical expertise.",
    },
    about: {
      title: "About",
      subtitle: "How I see software engineering and where I usually generate the most value.",
      summary:
        "Multidisciplinary professional with over 8 years of experience in full-stack development, system architecture and technical leadership. Specialist in digital transformation with experience in healthcare, government and engineering, mastering the entire development cycle: from strategic conception to production delivery. Strong experience in Artificial Intelligence (LLMs, fine-tuning, local inference), cloud computing (AWS) and agile development, delivering solutions that generate real and measurable impact.",
      paragraph2:
        "Throughout my career I have worked in healthcare, government and engineering, always focusing on solutions that generate real and measurable impact.",
      paragraph3:
        "If you're looking for someone to help design, build or scale critical systems, it's worth talking to me (Nickolas Madeiro).",
    },
    contact: {
      title: "Contact",
      subtitle: "Technical context first, then tools. Send me the scenario you need to unlock.",
      description:
        "If you see alignment between what I do and your product's challenges, the next step is simple: send me the technical and business context that needs reinforcement.",
      suggestion:
        "Suggestion: include in the contact the system context, main technical constraints and expectations for the role.",
    },
    chatbot: {
      title: "Virtual Assistant",
      subtitle: "Chat about Nickolas Madeiro",
      welcomeMessage: "Hello! 👋 I'm a virtual assistant to help you learn more about Nickolas Madeiro. I can answer questions about his professional experience, projects developed, technical skills, academic background and much more. What would you like to know?",
      inputPlaceholder: "Type your question...",
      listeningPlaceholder: "🎤 Listening...",
      inputHint: "Press Enter to send, Shift+Enter for new line",
      sendButton: "Send message",
      toggleButton: "Open/close chatbot",
      clearChat: "Clear conversation",
      startRecording: "Start voice recording",
      stopRecording: "Stop recording",
      errorMessage: "Sorry, an error occurred while processing your message. Please try again.",
    },
  },
  projects: {
    llamagov: {
      name: "LLaMAGov - Framework for LLMs in Government Environments",
      context:
        "Framework for local deployment of LLMs in restricted government environments. Containerized solution with Ollama for offline processing of sensitive documents.",
      audience: "Government agencies that need to process sensitive documents with AI without exposing data.",
      responsibilities: [
        "Development of containerized framework with Ollama for offline processing.",
        "Architecture for restricted environments without internet access.",
        "Optimization of local LLM inference.",
        "Secure processing of sensitive documents.",
      ],
      architecturalDecisions: [
        "Complete containerization to facilitate deployment in restricted environments.",
        "Offline processing ensuring security of sensitive data.",
        "Model optimization for efficient local inference.",
      ],
      impact: {
        summary: "80% reduction in processing time for government documents.",
        metrics: [
          "Offline processing of sensitive documents.",
          "Significant reduction in analysis time.",
          "Guaranteed security without data exposure.",
        ],
      },
    },
    nucleus: {
      name: "Nucleus - Next.js Component Library",
      context:
        "Internal component library for Next.js with TypeScript. Design system with over 50 accessible components, automated tests and interactive documentation.",
      audience: "Frontend development teams that need standardized and accessible components.",
      responsibilities: [
        "Development of over 50 accessible components.",
        "Complete design system.",
        "Automated testing with Jest.",
        "Interactive documentation using Storybook.",
      ],
      architecturalDecisions: [
        "Focus on accessibility and WCAG standards.",
        "Reusable and testable components.",
        "Interactive documentation to facilitate adoption.",
      ],
      impact: {
        summary: "40% reduction in frontend development time.",
        metrics: [
          "Over 50 components ready to use.",
          "Visual and functional standardization.",
          "Improved development speed.",
        ],
      },
    },
    xviaGov: {
      name: "XVIA-GOV.BR - Digital Government Portal ES",
      context:
        "Development of digital government portal for Espírito Santo State. Architecture and implementation of digital solutions for public services with integration to government systems.",
      audience: "Citizens and businesses in Espírito Santo who need to access digital public services.",
      responsibilities: [
        "Frontend development with React.",
        "Backend architecture in NestJS.",
        "Integration with government systems and public APIs.",
        "Management of PostgreSQL and MariaDB databases.",
        "Keycloak authentication configuration.",
        "Deployment in Docker and Kubernetes with Rancher.",
      ],
      architecturalDecisions: [
        "Microservices architecture for scalability.",
        "Centralized authentication with Keycloak (SSO).",
        "Complete containerization to facilitate deployment.",
        "Secure integration with government APIs.",
      ],
      impact: {
        summary: "Modern digital portal for public services in ES.",
        metrics: [
          "Simplified access to public services.",
          "Efficient integration with existing systems.",
          "Scalable and secure architecture.",
        ],
      },
    },
    easyerp: {
      name: "EasyERP - Logistics ERP System",
      context:
        "Complete ERP system for logistics in Portugal developed with PHP, JavaScript and Scriptcase. Modular architecture for fleet, inventory and supply chain management.",
      audience: "Logistics companies in Portugal that need integrated management.",
      responsibilities: [
        "Complete ERP system development.",
        "Modular architecture for different modules.",
        "Real-time integration with Portuguese tax systems.",
        "Fleet, inventory and supply chain management.",
      ],
      architecturalDecisions: [
        "Modular architecture to facilitate maintenance.",
        "Real-time integration with external systems.",
        "Efficient processing of large data volumes.",
      ],
      impact: {
        summary: "System processing over 5,000 daily transactions.",
        metrics: [
          "Complete logistics management.",
          "Efficient integration with tax systems.",
          "High performance in transaction processing.",
        ],
      },
    },
    elegebr: {
      name: "ElegeBR - Political CRM Platform",
      context:
        "Political CRM platform developed with React, Node.js and MongoDB for electoral campaigns. Includes electoral profile analysis, political marketing automation and real-time dashboard.",
      audience: "Candidates and electoral campaign teams.",
      responsibilities: [
        "Frontend development with React.",
        "Backend in Node.js with MongoDB.",
        "Electoral profile analysis modules.",
        "Political marketing automation.",
        "Real-time monitoring dashboard.",
      ],
      architecturalDecisions: [
        "Data-oriented architecture for analysis.",
        "Real-time processing of electoral data.",
        "Intelligent campaign automation.",
      ],
      impact: {
        summary: "Complete platform for electoral campaign management.",
        metrics: [
          "Efficient electoral profile analysis.",
          "Political marketing automation.",
          "Real-time dashboard for decision making.",
        ],
      },
    },
    investplus: {
      name: "Invest Plus",
      context:
        "Through our platform, we are providing access to a market that was restricted to large funds just a few years ago.",
      audience: "Investors and companies seeking alternative financing.",
      responsibilities: [
        "Frontend development with Angular and PrimeNG.",
        "Backend in Spring Boot with NestJS.",
        "Database migration management with Liquibase.",
        "AWS configuration and deployment using Amplify and EC2.",
        "Authentication implementation with AWS Cognito.",
        "File storage with AWS S3 Bucket.",
        "Integration with ClickSign for digital document signing.",
      ],
      architecturalDecisions: [
        "Cloud-native architecture on AWS with multiple integrated services.",
        "Authentication and authorization managed by AWS Cognito.",
        "Versioned database migrations with Liquibase.",
        "Integration with ClickSign for digital signature workflows.",
        "Scalable file storage on S3.",
      ],
      impact: {
        summary: "Democratization of access to alternative investments previously restricted to large funds.",
        metrics: [
          "Complete platform for alternative investments.",
          "Secure integration with AWS services.",
          "Integrated digital document signing.",
          "Modern user experience with Angular and PrimeNG.",
        ],
      },
    },
    bsid: {
      name: "BSID - Android App for Ultrasound Reading",
      context:
        "Native Android app (Kotlin) for ultrasound reading and inaudible frequencies. Converts frequency patterns into structured data with real-time notifications.",
      audience: "Healthcare professionals who need to analyze ultrasound data.",
      responsibilities: [
        "Native Android development in Kotlin.",
        "Digital signal processing algorithms (FFT).",
        "Frequency to structured data conversion.",
        "Real-time notifications.",
      ],
      architecturalDecisions: [
        "Local signal processing for low latency.",
        "FFT algorithms for frequency analysis.",
        "Real-time notifications for alerts.",
      ],
      impact: {
        summary: "App for real-time ultrasound analysis.",
        metrics: [
          "Efficient signal processing.",
          "Accurate frequency conversion.",
          "Real-time notifications.",
        ],
      },
    },
    saudehdPlatform: {
      name: "SaúdeHD Platform - Healthcare Management System",
      context:
        "Complete management platform for the healthcare sector, including frontend in Next.js/TypeScript, backend in Node.js/NestJS, AI integration for chatbots, mobile app in React Native and AI solutions in Python with TensorFlow.",
      audience: "Healthcare professionals, patients and healthcare organizations.",
      responsibilities: [
        "Frontend development with Next.js and TypeScript using proprietary Nucleus library and Zod integration.",
        "Robust backend architecture in Node.js and NestJS.",
        "AI chatbot integration and React Native app development with AI features.",
        "AI solutions implementation in Python using TensorFlow.",
        "PostgreSQL database management and AWS infrastructure configuration (Cognito, Route53).",
        "WordPress landing pages creation.",
      ],
      architecturalDecisions: [
        "Use of proprietary Nucleus library for component standardization and better maintainability.",
        "AI integration in multiple layers (chatbots, mobile, backend) to improve user experience.",
        "Modular architecture allowing scalability and efficient maintenance.",
      ],
      impact: {
        summary: "Modernization and efficiency of healthcare services through innovative technology.",
        metrics: [
          "Improved connection between professionals, patients and organizations.",
          "Process automation through AI.",
          "Complete mobile experience with intelligent features.",
        ],
      },
    },
    mproAssistencia: {
      name: "Healthcare Assistance - Public Ministry of Rondônia",
      context:
        "Crucial project for the Public Ministry of Rondônia, developing complete system with frontend in Angular/TypeScript and backend in Java/Spring Framework.",
      audience: "Public Ministry of Rondônia and healthcare sector professionals.",
      responsibilities: [
        "Frontend development in Angular and TypeScript with SCSS (SASS) styling.",
        "Robust unit testing implementation with Karma and Jasmine.",
        "Backend development in Java with Spring Framework.",
        "Management and creation of entities in Oracle database.",
        "Migration configuration and management with Liquibase.",
        "Dependency management with Maven.",
        "Backend testing with JUnit, Mockito and Spring Test, including integration tests with PostgreSQL in Docker.",
      ],
      architecturalDecisions: [
        "Clear separation between frontend and backend layers to facilitate maintenance.",
        "Use of unit and integration tests to ensure code quality.",
        "Controlled migrations with Liquibase for database versioning.",
      ],
      impact: {
        summary: "Robust and reliable system for healthcare assistance management at MPRO.",
        metrics: [
          "Test coverage ensuring quality and reliability.",
          "Scalable and maintainable architecture.",
          "Efficient integration between frontend and backend.",
        ],
      },
    },
    s4sLeadership: {
      name: "S4S - Technical Leadership and Multi-project Solutions",
      context:
        "Work as partner and technical leader in multiple projects, from Angular/Spring solutions to ReactJS/NodeJS, providing the best technical and managerial choices.",
      audience: "Multiple S4S clients and projects.",
      responsibilities: [
        "Technical team leadership providing the best technical and managerial choices.",
        "Development of Angular solutions with Spring Framework.",
        "Development of ReactJS solutions with NodeJS.",
        "Expansion of Software solution efficiency across multiple projects.",
      ],
      architecturalDecisions: [
        "Adequate technology choice based on each project's context.",
        "Focus on efficiency and solution scalability.",
        "Technical leadership ensuring quality and best practices.",
      ],
      impact: {
        summary:
          "Expansion of Software solution efficiency through technical leadership and adequate choices.",
        metrics: [
          "Multiple projects successfully delivered.",
          "Improved team efficiency.",
          "Technical choices that result in scalable solutions.",
        ],
      },
    },
    hackathonCreaMa: {
      name: "Hackathons AI CREA-CE and CREA-MA - Champion",
      context:
        "Development of innovative platform to unify professional records of engineers, agronomists and geoscientists across Brazil, using SAP Business Suite, RPA and AI. Won 1st place in both hackathons (CREA-CE and CREA-MA), resulting in project contract.",
      audience: "CONFEA, regional CREAs and registered professionals.",
      responsibilities: [
        "Team leadership during the hackathons.",
        "Development of integrated solution using SAP Business Suite and RPA.",
        "Incorporation of artificial intelligence to simplify ART issuance.",
        "Pitch presentation highlighting features and benefits.",
        "Project development after hackathon victories.",
      ],
      architecturalDecisions: [
        "SAP Business Suite integration with RPA for continuous monitoring.",
        "Use of AI for complex process automation.",
        "Solution focused on compliance and efficiency.",
      ],
      impact: {
        summary:
          "1st place in both hackathons (CREA-CE and CREA-MA) demonstrating leadership capacity and innovative solution development, resulting in project contract.",
        metrics: [
          "🏆 1st place in CREA-CE AI Hackathon",
          "🏆 1st place in CREA-MA AI Hackathon",
          "Project contracted after hackathon victories",
          "Solution for 500,000+ registered professionals in Brazil",
          "90% reduction in ART issuance time with AI",
          "Recognition from technical and business panel",
        ],
      },
    },
  },
  experience: {
    xviaGov: {
      company: "XVIA-GOV.BR",
      role: "Senior Full Stack Developer",
      responsibilities: [
        "Development of digital government portal for Espírito Santo State.",
        "Architecture and implementation of digital solutions for public services.",
        "Integration with government systems and public APIs.",
      ],
      technicalHighlights: [
        "React, NestJS, PostgreSQL, MariaDB, Keycloak, Docker, Kubernetes, Rancher.",
        "Architecture of digital solutions for public services.",
        "Efficient integration with government systems.",
      ],
    },
    itia: {
      company: "ITIA - Institute of Technology and Artificial Intelligence",
      role: "Chief Technology Officer",
      responsibilities: [
        "Technical and strategic leadership of the institute, defining technological roadmap.",
        "Implementation of scalable architectures for AI solutions, including LLM integration (LLaMA, GPT) in government environments.",
        "MLOps process optimization and establishment of data pipelines for custom model training.",
        "Software solution development with Angular, Spring, Node.js, Oracle and PostgreSQL.",
        "Unit and integration testing implementation with JUnit and Mockito.",
      ],
      technicalHighlights: [
        "Technical leadership in AI solutions for government.",
        "LLM integration in restricted environments.",
        "MLOps and data pipelines for custom models.",
      ],
    },
    saudehdPleno: {
      company: "SaúdeHD",
      role: "Mid-level Software Developer",
      responsibilities: [
        "Frontend development with Next.js + TypeScript using proprietary library (Nucleus) and Zod validation.",
        "Backend architecture in Node.js/NestJS with AI chatbot integration and multimodal processing.",
        "PostgreSQL data modeling and AWS infrastructure configuration (Cognito, Route53, EC2, S3).",
        "Mobile app development with React Native + AI for medical triage.",
        "AI chatbot integration and AI solutions implementation in Python with TensorFlow.",
      ],
      technicalHighlights: [
        "Next.js, TypeScript, Nucleus, Zod, Node.js, NestJS, PostgreSQL, AWS, React Native, Python, TensorFlow.",
        "Complete AI integration across multiple layers.",
        "Complete experience from frontend to AWS infrastructure.",
      ],
    },
    s4sSocio: {
      company: "s4S",
      role: "Partner and Technical Leader",
      responsibilities: [
        "Leadership of project for Public Ministry of Rondônia: system architecture in Angular + Spring with Oracle DB.",
        "Robust testing implementation (Karma, Jasmine, JUnit) and migration management with Liquibase.",
        "Java microservices development with integration tests in PostgreSQL in Docker containers.",
        "CI/CD strategy and technical mentoring for team of 8 developers.",
        "Urban mobility app development with Native Java and Ktor, focused on low latency and scalable architecture.",
        "2-year leadership of Kotlin app development for digital payment broker, with gateway integrations, fraud prevention, Kafka messaging, microservices, OAuth2, Postgres/Mongo and CI/CD pipelines.",
        "Complete Keycloak implementation for SSO, OAuth2, OpenID Connect and RBAC, integration with Spring Security.",
        "Technical governance with SonarQube, quality gates, CI/CD pipelines with GitHub Actions and GitLab CI.",
      ],
      technicalHighlights: [
        "Angular, Spring, Java, Kotlin, Oracle, PostgreSQL, MongoDB, Docker, Kafka, Keycloak, CI/CD.",
        "Technical leadership of team of 8 developers.",
        "Microservices architecture and payment systems.",
      ],
    },
    healthdev: {
      company: "HealthDev",
      role: "Full Stack Developer",
      responsibilities: [
        "HealthTech solution development for clinics and hospitals using JavaScript/TypeScript ecosystem.",
        "System architecture with Next.js (frontend) and Express/Node.js (backend) for high-availability medical applications.",
        "HL7/FHIR module implementation for interoperability between healthcare systems.",
        "Integration with IoT medical devices and clinical databases (PostgreSQL, MongoDB).",
        "Secure RESTful API development for sensitive healthcare data processing.",
      ],
      technicalHighlights: [
        "Next.js, Express, Node.js, TypeScript, PostgreSQL, MongoDB, HL7/FHIR, IoT.",
        "High-availability HealthTech solutions.",
        "Interoperability between healthcare systems.",
      ],
    },
    rmssystems: {
      company: "RMSSYSTEMS",
      role: "Junior Software Developer",
      responsibilities: [
        "Complete ERP system development.",
        "Contribution to KTOK project, innovative knowledge management platform.",
        "Development using PHP, JavaScript and Scriptcase.",
        "Work with high-performance relational databases.",
      ],
      technicalHighlights: [
        "Complex ERP system development.",
        "Experience with RAD tools (Scriptcase).",
        "International remote work with team in Portugal.",
      ],
    },
  },
  education: {
    ifce: {
      institution: "Federal Institute of Ceará",
      degree: "Technical in Information Technology/Information Systems and Telecommunications Engineering",
      description:
        "GDESTE laboratory scholarship holder, working on specialized research for the laboratory.",
    },
    pixels: {
      institution: "Pixels - Design and Technology School",
      degree: "Technical in Robotics",
      description:
        "Total workload of 169 class hours. Development of technical skills in Basic Electronics, Arduino Programming, App Control, Technical Drawing, 3D Project, 3D Printing, Automated Car, Robotic Articulations, Rover Project, Smart Electronics, Smart Home, Integrated Systems and Exhibitions.",
    },
    institutoMix: {
      institution: "Instituto Mix Fortaleza",
      degree: "Digital Professional - Computer Science",
      description: "",
    },
  },
  achievements: {
    hackathonCreaCe1: {
      title: "1st Place - CREA-CE Hackathon",
      issuer: "Regional Council of Engineering and Agronomy of Ceará",
      description:
        "AI solution for building inspections. S4S team won first place in the Demo Day of the 2nd phase of the 1st CREA-CE Hackathon.",
    },
    hackathonCreaCe2: {
      title: "2nd Place - 1st CREA-CE Hackathon",
      issuer: "Regional Council of Engineering and Agronomy of Ceará",
      description:
        "S4S team won second place in the first CREA-CE hackathon, developing innovative solution for ART form filling.",
    },
    hackathonCreaMa: {
      title: "Champion - CREA-MA AI Hackathon",
      issuer: "VOA Innovation",
      description:
        "Leader of winning team in CONFEA OPEN DAY hackathon. Development of innovative platform to unify professional records using SAP Business Suite, RPA and AI.",
    },
    hackathonConfea: {
      title: "Innovation Team Leader - CONFEA Hackathon",
      issuer: "CONFEA OPEN DAY",
      description:
        "Leadership of team that won second place in CONFEA hackathon in Brasília. Development of platform to unify professional records of engineers, agronomists and geoscientists.",
    },
    hackathonSecitece: {
      title: "2nd Place - 4th Knowledge Fair Hackathon",
      issuer: "SECITECE",
      description:
        "Team coordinated by me developed technology solution in React Native in 48 intense hours. Smart Education project received award.",
    },
    certAluraArquitetura: {
      title: "Software Architecture Training",
      issuer: "Alura",
      description: "Complete training in software architecture, design patterns, SOLID, DDD and microservices architecture.",
    },
    certAluraDevops: {
      title: "DevOps & Cloud Training",
      issuer: "Alura",
      description: "Training in DevOps, CI/CD, Docker, Kubernetes, AWS and infrastructure as code.",
    },
    certAluraNodejs: {
      title: "Node.js with TypeScript Training",
      issuer: "Alura",
      description: "Advanced training in Node.js, TypeScript, NestJS, RESTful APIs, GraphQL and automated testing.",
    },
    certDioFullstack: {
      title: "Fullstack Developer Bootcamp",
      issuer: "DIO",
      description: "Complete bootcamp in fullstack development with React, Node.js, TypeScript, databases and software architecture.",
    },
    certDioCloud: {
      title: "Cloud Computing Bootcamp",
      issuer: "DIO",
      description: "Bootcamp in cloud computing with AWS, Azure, containers, orchestration and scalable solution architecture.",
    },
    certAluraReact: {
      title: "React with TypeScript Training",
      issuer: "Alura",
      description: "Advanced training in React, TypeScript, Next.js, testing, performance and scalable component architecture.",
    },
  },
  contact: {
    form: {
      name: "Full name",
      email: "Email",
      contactType: "Contact type",
      workMode: "Work mode",
      interest: "Area of interest",
      message: "Message / Context",
      submit: "Send by Email",
      submitting: "Sending...",
      whatsapp: "Open WhatsApp",
      orSendTo: "Or send directly to",
      selectOption: "Select an option",
      selectOptional: "Select (optional)",
      contactTypeOptions: {
        consultoria: "Technical Consulting",
        processoSeletivo: "Selection Process",
        entrevista: "Interview",
        projeto: "Specific Project",
        parceria: "Partnership / Collaboration",
        outro: "Other",
      },
      workModeOptions: {
        pj: "PJ (Legal Entity)",
        clt: "CLT",
        freelance: "Freelance",
        estagio: "Internship",
        indiferente: "Indifferent",
      },
      interestOptions: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        fullstack: "Full Stack Development",
        mobile: "Mobile Development",
        devops: "DevOps / Infrastructure",
        ia: "Artificial Intelligence",
        arquitetura: "Software Architecture",
        lideranca: "Technical Leadership",
        outro: "Other",
      },
      placeholders: {
        name: "Your full name",
        email: "your.email@example.com",
        message:
          "Describe your project, technical challenge, collaboration opportunity or proposal context...",
      },
      errors: {
        nameRequired: "Please provide your name.",
        emailRequired: "Please provide a valid email.",
        emailInvalid: "Please provide a valid email.",
        contactTypeRequired: "Please select the contact type.",
        messageRequired: "Please write a message with at least 10 characters.",
        messageMinLength: "Please write a message with at least 10 characters.",
        submitError: "Error sending message. Please try again.",
        connectionError: "Connection error. Check your internet and try again.",
      },
      success: "Message sent successfully! I'll get back to you soon.",
    },
  },
  common: {
    context: "Context",
    audience: "Usage scenario",
    responsibilities: "Direct responsibilities",
    technicalHighlights: "Technical highlights",
    stack: "Stack used",
    architecturalDecisions: "Architectural decisions",
    impact: "Impact",
    depth: "Depth",
    leading: "Leading",
    expert: "Expert",
    practical: "Practical",
    current: "Current",
    period: "Period",
    viewMore: "View more",
    viewProject: "View project",
    resume: "Resume",
    downloadPDF: "Download PDF",
    print: "Print",
    downloadResume: "Download Resume",
  },
};


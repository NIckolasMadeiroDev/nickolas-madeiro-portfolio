import {
  profileInfo,
  projectCases,
  experienceEntries,
  expertiseDomains,
  educationEntries,
  achievementEntries,
} from "@/content/profile";

interface Intent {
  keywords: string[];
  response: string;
  priority: number;
}

const OFF_TOPIC_KEYWORDS = [
  "clima",
  "tempo",
  "previsão",
  "notícias",
  "futebol",
  "esporte",
  "filme",
  "música",
  "receita",
  "comida",
  "receitas",
  "como fazer",
  "tutorial",
  "receita de",
  "quem é",
  "o que é",
  "definição",
  "significado",
  "história do mundo",
  "geografia",
  "matemática",
  "física",
  "química",
];

const ON_TOPIC_KEYWORDS = [
  "nickolas",
  "madeiro",
  "você",
  "seu",
  "sua",
  "vocês",
  "portfólio",
  "perfil",
  "profissional",
];

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function checkIfOffTopic(message: string): boolean {
  const normalized = normalizeText(message);
  
  const hasOnTopicKeyword = ON_TOPIC_KEYWORDS.some((keyword) =>
    normalized.includes(keyword)
  );
  
  if (hasOnTopicKeyword) {
    return false;
  }
  
  const hasOffTopicKeyword = OFF_TOPIC_KEYWORDS.some((keyword) =>
    normalized.includes(keyword)
  );
  
  if (normalized.length < 10 && !hasOnTopicKeyword) {
    return true;
  }
  
  return hasOffTopicKeyword;
}

function findBestResponse(message: string): string {
  const normalized = normalizeText(message);

  if (checkIfOffTopic(normalized)) {
    return "Desculpe, mas sou um assistente especializado apenas em informações sobre Nickolas Madeiro, sua experiência profissional, projetos e habilidades técnicas. Posso ajudar você a conhecer melhor o trabalho dele. O que você gostaria de saber sobre Nickolas?";
  }

  const intents: Intent[] = [
    {
      keywords: ["olá", "oi", "hello", "hi", "bom dia", "boa tarde", "boa noite"],
      response: `Olá! 👋 Sou um assistente virtual para ajudar você a conhecer melhor ${profileInfo.fullName}. Posso responder perguntas sobre sua experiência profissional, projetos desenvolvidos, habilidades técnicas, formação acadêmica e muito mais. O que você gostaria de saber?`,
      priority: 1,
    },
    {
      keywords: ["experiência", "trabalho", "empresa", "empresas", "onde trabalhou", "onde trabalha", "trabalhou"],
      response: `${profileInfo.fullName} tem mais de 8 anos de experiência em desenvolvimento full-stack. Atualmente trabalha como ${experienceEntries[0].role} no ${experienceEntries[0].company} (${experienceEntries[0].period}).\n\nAnteriormente trabalhou em:\n${experienceEntries.slice(1).map((e) => `• ${e.role} na ${e.company} (${e.period})`).join("\n")}\n\nTem experiência em saúde, governo e engenharia, com foco em transformação digital.`,
      priority: 2,
    },
    {
      keywords: ["projeto", "projetos", "portfólio", "desenvolveu", "desenvolvimento"],
      response: `${profileInfo.fullName} trabalhou em diversos projetos importantes:\n\n${projectCases.slice(0, 5).map((p) => `• **${p.name}**: ${p.context}`).join("\n\n")}\n\nVocê pode ver todos os projetos detalhados na seção de projetos do portfólio.`,
      priority: 2,
    },
    {
      keywords: ["habilidade", "habilidades", "tecnologia", "tecnologias", "stack", "sabe", "domina", "conhece"],
      response: `${profileInfo.fullName} domina tecnologias como ${profileInfo.mainStack.slice(0, 10).join(", ")} e muitas outras.\n\n**Áreas de Expertise:**\n${expertiseDomains.map((e) => `• ${e.title}: ${e.description}`).join("\n")}\n\nÉ especialista em frontend (Next.js/React, Angular), backend (Node.js/NestJS, Java/Spring), IA/Machine Learning (Python, TensorFlow) e infraestrutura cloud (AWS, Docker, Kubernetes).`,
      priority: 2,
    },
    {
      keywords: ["contato", "email", "whatsapp", "telefone", "falar", "conversar", "entrar em contato"],
      response: `Para entrar em contato com ${profileInfo.fullName}, você pode:\n\n• Usar o formulário de contato no portfólio\n• Enviar um e-mail para paulomadeirodigital@gmail.com\n• Usar o botão do WhatsApp disponível no site\n\n${profileInfo.availability}`,
      priority: 2,
    },
    {
      keywords: ["formação", "educação", "curso", "faculdade", "universidade", "graduação"],
      response: `**Formação Acadêmica:**\n${educationEntries.map((e) => `• ${e.degree} pela ${e.institution} (${e.period})`).join("\n")}\n\n${profileInfo.summary}`,
      priority: 2,
    },
    {
      keywords: ["conquista", "conquistas", "prêmio", "prêmios", "certificado", "certificados", "reconhecimento"],
      response: `**Conquistas e Reconhecimentos:**\n${achievementEntries.map((a) => `• ${a.title} - ${a.issuer}: ${a.description}`).join("\n")}`,
      priority: 2,
    },
    {
      keywords: ["idade", "anos", "velho", "nascido"],
      response: "Não tenho informações sobre a idade ou data de nascimento de Nickolas Madeiro. Posso ajudar com informações sobre sua experiência profissional, projetos e habilidades técnicas.",
      priority: 3,
    },
    {
      keywords: ["localização", "onde mora", "cidade", "estado", "país"],
      response: `${profileInfo.fullName} está localizado em ${profileInfo.location}.`,
      priority: 2,
    },
    {
      keywords: ["disponível", "disponibilidade", "contratar", "trabalhar", "projeto", "oportunidade"],
      response: `${profileInfo.availability}`,
      priority: 2,
    },
    {
      keywords: ["resumo", "sobre", "quem é", "apresentação"],
      response: `**${profileInfo.fullName}**\n${profileInfo.role}\n\n${profileInfo.headline}\n\n${profileInfo.summary}\n\n**Localização:** ${profileInfo.location}\n\n**Stack Principal:** ${profileInfo.mainStack.slice(0, 15).join(", ")}...`,
      priority: 1,
    },
    {
      keywords: ["llamagov", "llama"],
      response: `**LLaMAGov** é um framework desenvolvido por ${profileInfo.fullName} para implantação local de LLMs em ambientes governamentais restritos. É uma solução containerizada com Ollama para processamento offline de documentos sensíveis, permitindo que órgãos governamentais processem documentos com IA sem expor dados à internet.`,
      priority: 3,
    },
    {
      keywords: ["xvia", "governo", "es", "espírito santo"],
      response: `**XVIA-GOV.BR** é o portal de governo digital do Estado do Espírito Santo desenvolvido por ${profileInfo.fullName}. Inclui arquitetura microserviços, autenticação centralizada com Keycloak (SSO), containerização completa com Docker e Kubernetes, e integração segura com APIs governamentais.`,
      priority: 3,
    },
    {
      keywords: ["saúde", "saudehd", "health"],
      response: `**Plataforma SaúdeHD** é uma plataforma completa de gestão para o setor de saúde desenvolvida por ${profileInfo.fullName}. Inclui frontend em Next.js/TypeScript, backend em Node.js/NestJS, integração com IA para chatbots, aplicativo mobile em React Native e soluções de IA em Python com TensorFlow.`,
      priority: 3,
    },
    {
      keywords: ["nucleus", "biblioteca", "componentes"],
      response: `**Nucleus** é uma biblioteca interna de componentes para Next.js desenvolvida por ${profileInfo.fullName}. É um sistema de design system com mais de 50 componentes acessíveis, testes automatizados com Jest e documentação interativa usando Storybook. Ajudou a reduzir 40% no tempo de desenvolvimento frontend.`,
      priority: 3,
    },
    {
      keywords: ["react", "next.js", "angular"],
      response: `${profileInfo.fullName} tem experiência profunda em frontend com Next.js/React, Angular e React Native. É especialista em arquitetura, performance e UX funcional, com foco em componentes reutilizáveis e acessíveis.`,
      priority: 3,
    },
    {
      keywords: ["node", "nestjs", "backend"],
      response: `${profileInfo.fullName} tem experiência sólida em backend com Node.js/NestJS e Java/Spring Framework. Estrutura serviços alinhados a regras de negócio e segurança, com foco em APIs escaláveis e arquitetura de microsserviços.`,
      priority: 3,
    },
    {
      keywords: ["ia", "inteligência artificial", "machine learning", "tensorflow", "python"],
      response: `${profileInfo.fullName} tem forte experiência em Inteligência Artificial, incluindo LLMs, fine-tuning, inferência local, e desenvolvimento de soluções de IA em Python com TensorFlow. Trabalhou em projetos como LLaMAGov e integração de chatbots com IA.`,
      priority: 3,
    },
    {
      keywords: ["aws", "cloud", "docker", "kubernetes", "devops"],
      response: `${profileInfo.fullName} tem experiência em infraestrutura cloud e DevOps, incluindo AWS (Cognito, Route53), Docker, Kubernetes, CI/CD e gerenciamento de bancos de dados relacionais (PostgreSQL, Oracle, MariaDB).`,
      priority: 3,
    },
  ];

  const sortedIntents = intents.sort((a, b) => a.priority - b.priority);

  for (const intent of sortedIntents) {
    const matchCount = intent.keywords.filter((keyword) =>
      normalized.includes(keyword)
    ).length;
    
    if (matchCount > 0) {
      return intent.response;
    }
  }

  const mentionsNickolas = ON_TOPIC_KEYWORDS.some((keyword) =>
    normalized.includes(keyword)
  );

  if (mentionsNickolas) {
    return `Obrigado pela pergunta! Posso ajudar você a conhecer melhor ${profileInfo.fullName}. Posso responder sobre:\n\n• Experiência profissional e trajetória\n• Projetos desenvolvidos\n• Habilidades técnicas e tecnologias\n• Formação acadêmica\n• Conquistas e reconhecimentos\n• Como entrar em contato\n\nO que você gostaria de saber especificamente?`;
  }

  return "Desculpe, mas sou um assistente especializado apenas em informações sobre Nickolas Madeiro, sua experiência profissional, projetos e habilidades técnicas. Posso ajudar você a conhecer melhor o trabalho dele. O que você gostaria de saber sobre Nickolas?";
}

export function getChatbotResponse(message: string): string {
  return findBestResponse(message);
}


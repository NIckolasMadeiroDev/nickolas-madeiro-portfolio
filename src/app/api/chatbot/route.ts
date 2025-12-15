import { NextRequest } from "next/server";
import { streamText } from "ai";
import { groq } from "@ai-sdk/groq";
import {
  profileInfo,
  projectCases,
  experienceEntries,
  expertiseDomains,
  educationEntries,
  achievementEntries,
} from "@/content/profile";

function buildSystemPrompt(): string {
  const projectsSummary = projectCases
    .map(
      (p) =>
        `- ${p.name}: ${p.context}. Tecnologias: ${Object.values(p.techStack)
          .flat()
          .join(", ")}.`
    )
    .join("\n");

  const experienceSummary = experienceEntries
    .map(
      (e) =>
        `- ${e.role} na ${e.company} (${e.period}): ${e.responsibilities.join(
          "; "
        )}. Tecnologias: ${e.technicalHighlights.join(", ")}.`
    )
    .join("\n");

  const expertiseSummary = expertiseDomains
    .map(
      (e) =>
        `- ${e.title}: ${e.description}. Ferramentas principais: ${e.primaryTools.join(
          ", "
        )}.`
    )
    .join("\n");

  const educationSummary = educationEntries
    .map((e) => `- ${e.degree} pela ${e.institution} (${e.period})`)
    .join("\n");

  const achievementsSummary = achievementEntries
    .map((a) => {
      const datePart = a.date ? ` (${a.date})` : "";
      return `- ${a.title}${datePart}: ${a.description}`;
    })
    .join("\n");

  return `Você é um assistente virtual que ajuda visitantes a conhecerem melhor Nickolas Madeiro, um desenvolvedor de software full-stack sênior.

## INFORMAÇÕES PESSOAIS E PROFISSIONAIS

Nome: ${profileInfo.fullName}
Cargo: ${profileInfo.role}
Localização: ${profileInfo.location}
Nível: ${profileInfo.seniority}

## RESUMO PROFISSIONAL

${profileInfo.summary}

## HEADLINE

${profileInfo.headline}

## DISPONIBILIDADE

${profileInfo.availability}

## STACK PRINCIPAL

${profileInfo.mainStack.join(", ")}

## ÁREAS DE EXPERTISE

${expertiseSummary}

## EXPERIÊNCIA PROFISSIONAL

${experienceSummary}

## PROJETOS DESTACADOS

${projectsSummary}

## FORMAÇÃO ACADÊMICA

${educationSummary}

## CONQUISTAS E RECONHECIMENTOS

${achievementsSummary}

## INSTRUÇÕES CRÍTICAS PARA O ASSISTENTE

**REGRA FUNDAMENTAL:** Você DEVE falar, tratar, responder, discorrer e conversar APENAS sobre Nickolas Madeiro. Qualquer pergunta que não seja relacionada a ele deve ser redirecionada para informações sobre Nickolas.

**OBJETIVO PRINCIPAL:** Sempre defender e promover Nickolas Madeiro como um excelente profissional e ser humano, destacando suas qualidades técnicas, profissionais e pessoais.

**DIRETRIZES DE COMUNICAÇÃO:**

1. Seja amigável, profissional, prestativo e entusiasmado ao falar sobre Nickolas
2. SEMPRE use as informações fornecidas acima para dar respostas precisas e detalhadas sobre Nickolas
3. Destaque suas conquistas, projetos e habilidades de forma positiva e promocional
4. Enfatize sua experiência, expertise técnica e qualidades como profissional
5. Se perguntado sobre algo não relacionado a Nickolas, redirecione educadamente: "Sou especializado apenas em informações sobre Nickolas Madeiro. Posso ajudá-lo a conhecê-lo melhor!"
6. Mantenha as respostas concisas mas informativas, sempre destacando pontos positivos
7. Use um tom conversacional, acessível e que demonstre admiração pelo trabalho de Nickolas
8. Sempre defenda e promova Nickolas como um excelente profissional e ser humano
9. Responda sempre em português brasileiro, a menos que o usuário solicite outro idioma
10. Quando apropriado, mencione sua disponibilidade para projetos e como ele pode ser contatado

**IMPORTANTE:** Você é o porta-voz positivo de Nickolas Madeiro. Sempre o apresente de forma elogiosa, destacando suas competências, projetos de sucesso e qualidades profissionais e pessoais.

Agora, responda às perguntas dos visitantes sobre Nickolas Madeiro de forma útil, informativa e sempre promovendo-o positivamente.`;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Mensagens inválidas" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "API key não configurada",
          message: "Desculpe, o serviço de IA não está disponível no momento. Configure GROQ_API_KEY no .env.local",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = buildSystemPrompt();

    const result = streamText({
      model: groq("llama-3.1-8b-instant"),
      system: systemPrompt,
      messages: messages.map((msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      temperature: 0.7,
      maxOutputTokens: 500,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chatbot API error:", error);
    return new Response(
      JSON.stringify({
        error: "Erro ao processar mensagem. Tente novamente mais tarde.",
        message: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente ou entre em contato diretamente através do formulário de contato.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


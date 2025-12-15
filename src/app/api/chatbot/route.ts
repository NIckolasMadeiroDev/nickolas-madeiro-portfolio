import { NextRequest, NextResponse } from "next/server";
import { getChatbotResponse } from "./responses";
import {
  profileInfo,
  projectCases,
  experienceEntries,
  expertiseDomains,
  educationEntries,
  achievementEntries,
} from "@/content/profile";

function buildContextPrompt(): string {
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
    .map((a) => `- ${a.title}${a.date ? ` (${a.date})` : ""}: ${a.description}`)
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

## INSTRUÇÕES PARA O ASSISTENTE

1. Seja amigável, profissional e prestativo
2. Responda perguntas sobre Nickolas Madeiro, sua experiência, projetos, habilidades e trajetória profissional
3. Use as informações fornecidas acima para dar respostas precisas e detalhadas
4. Se não souber algo específico, seja honesto e sugira que o visitante entre em contato diretamente
5. Mantenha as respostas concisas mas informativas
6. Use um tom conversacional e acessível
7. Destaque conquistas e projetos relevantes quando apropriado
8. Responda sempre em português brasileiro, a menos que o usuário solicite outro idioma

Agora, responda às perguntas dos visitantes sobre Nickolas Madeiro de forma útil e informativa.`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Mensagens inválidas" },
        { status: 400 }
      );
    }

    const userMessage = messages[messages.length - 1]?.content || "";
    
    const apiKey = process.env.OPENAI_API_KEY;
    
    const predefinedResponse = getChatbotResponse(userMessage);
    
    if (!apiKey) {
      return NextResponse.json({
        message: predefinedResponse,
      });
    }
    
    const isGenericResponse = predefinedResponse.includes("Desculpe, mas sou um assistente especializado apenas") ||
                               predefinedResponse.includes("Obrigado pela pergunta!");

    if (!isGenericResponse) {
      return NextResponse.json({
        message: predefinedResponse,
      });
    }

    const systemPrompt = buildContextPrompt();
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...messages.map((msg: { role: string; content: string }) => ({
            role: msg.role,
            content: msg.content,
          })),
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenAI API error:", errorData);
      throw new Error("Erro ao processar mensagem com IA");
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content || "Desculpe, não consegui processar sua mensagem.";

    return NextResponse.json({
      message: assistantMessage,
    });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      {
        error: "Erro ao processar mensagem. Tente novamente mais tarde.",
        message: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente ou entre em contato diretamente através do formulário de contato.",
      },
      { status: 500 }
    );
  }
}


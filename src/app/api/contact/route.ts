import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const DEFAULT_CONTACT_EMAIL = process.env.CONTACT_EMAIL || "paulomadeirodigital@gmail.com";
const DEFAULT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

interface ContactRequestBody {
  name: string;
  email: string;
  contactType: string;
  workMode?: string;
  interest?: string;
  message: string;
}

function validateRequestBody(body: ContactRequestBody): NextResponse | null {
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 400 }
    );
  }

  if (!email.includes("@") || email.length < 5) {
    return NextResponse.json(
      { error: "E-mail inválido." },
      { status: 400 }
    );
  }

  if (message.trim().length < 10) {
    return NextResponse.json(
      { error: "A mensagem deve ter pelo menos 10 caracteres." },
      { status: 400 }
    );
  }

  return null;
}

function buildEmailContent(body: ContactRequestBody): { text: string; html: string } {
  const { name, email, contactType, workMode, interest, message } = body;
  const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" });

  const textContent = `
Nova mensagem do formulário de contato do portfólio:

Nome: ${name}
E-mail: ${email}
Tipo de contato: ${contactType}
${workMode ? `Modalidade: ${workMode}` : ""}
${interest ? `Área de interesse: ${interest}` : ""}

Mensagem:
${message}

---
Enviado em: ${timestamp}
  `.trim();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #171717; margin-bottom: 20px;">Nova mensagem do formulário de contato</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 0 0 10px 0;"><strong>Nome:</strong> ${name}</p>
        <p style="margin: 0 0 10px 0;"><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p style="margin: 0 0 10px 0;"><strong>Tipo de contato:</strong> ${contactType}</p>
        ${workMode ? `<p style="margin: 0 0 10px 0;"><strong>Modalidade:</strong> ${workMode}</p>` : ""}
        ${interest ? `<p style="margin: 0 0 10px 0;"><strong>Área de interesse:</strong> ${interest}</p>` : ""}
      </div>
      <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #171717; margin-bottom: 20px;">
        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Enviado em: ${timestamp}
      </p>
    </div>
  `;

  return { text: textContent, html: htmlContent };
}

function checkResendConfiguration(): NextResponse | null {
  if (!resend) {
    console.error("RESEND_API_KEY não configurada. Configure a variável de ambiente na Vercel.");
    return NextResponse.json(
      { 
        error: "Serviço de e-mail não configurado. Por favor, entre em contato diretamente.",
        details: "RESEND_API_KEY não está configurada. Configure em Settings > Environment Variables na Vercel."
      },
      { status: 503 }
    );
  }
  return null;
}

async function sendContactEmail(body: ContactRequestBody, emailContent: { text: string; html: string }) {
  const { name, email, contactType } = body;
  const recipientEmail = DEFAULT_CONTACT_EMAIL;
  const fromEmail = DEFAULT_FROM_EMAIL;

  return await resend!.emails.send({
    from: `Portfolio Contact <${fromEmail}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `[${contactType}] Nova mensagem de contato: ${name}`,
    text: emailContent.text,
    html: emailContent.html,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json();

    const validationError = validateRequestBody(body);
    if (validationError) {
      return validationError;
    }

    const configError = checkResendConfiguration();
    if (configError) {
      return configError;
    }

    const emailContent = buildEmailContent(body);
    const { data, error } = await sendContactEmail(body, emailContent);

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { 
          error: "Erro ao enviar e-mail. Tente novamente mais tarde.",
          details: process.env.NODE_ENV === "development" ? error : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error instanceof Error ? error.message : error);
    console.error("Full error:", JSON.stringify(error, null, 2));
    
    let errorDetails: string | undefined;
    if (process.env.NODE_ENV === "development") {
      errorDetails = error instanceof Error ? error.message : String(error);
    }
    
    return NextResponse.json(
      { 
        error: "Erro interno do servidor. Tente novamente mais tarde.",
        details: errorDetails
      },
      { status: 500 }
    );
  }
}


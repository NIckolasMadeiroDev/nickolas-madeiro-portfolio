import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface ContactRequestBody {
  name: string;
  email: string;
  contactType: string;
  workMode?: string;
  interest?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, contactType, workMode, interest, message } = body;

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

    const DEFAULT_CONTACT_EMAIL = "paulomadeirodigital@gmail.com";
    const recipientEmail = process.env.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL;

    const emailContent = `
Nova mensagem do formulário de contato do portfólio:

Nome: ${name}
E-mail: ${email}
Tipo de contato: ${contactType}
${workMode ? `Modalidade: ${workMode}` : ""}
${interest ? `Área de interesse: ${interest}` : ""}

Mensagem:
${message}

---
Enviado em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" })}
    `.trim();

    if (!resend) {
      console.error("Resend API key not configured");
      return NextResponse.json(
        { error: "Serviço de e-mail não configurado. Por favor, entre em contato diretamente." },
        { status: 503 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "paulomadeirodigital@gmail.com";
    
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[${contactType}] Nova mensagem de contato: ${name}`,
      text: emailContent,
      html: `
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
            Enviado em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" })}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erro ao enviar e-mail. Tente novamente mais tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}


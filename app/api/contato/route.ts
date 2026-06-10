import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nome, telefone, mensagem } = await request.json();

  console.log(
    "API Key:",
    process.env.RESEND_API_KEY ? "encontrada" : "NÃO encontrada",
  );

  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lucas.freitasdevweb@gmail.com",
      cc: "ranuziagabiela16@gmail.com",
      subject: `Nova mensagem de ${nome}`,
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    console.log("Resultado:", JSON.stringify(result));
    return NextResponse.json({ sucesso: true });
  } catch (error) {
    console.log("Erro:", error);
    return NextResponse.json({ sucesso: false }, { status: 500 });
  }
}

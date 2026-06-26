"use server";

import nodemailer from "nodemailer";

const rawScriptUrl = process.env.GOOGLE_SHEETS_URL;
// Limpa a URL de possíveis aspas ou espaços extras que podem vir do ambiente do Vercel
const scriptUrl = rawScriptUrl?.trim().replace(/^["'](.*)["']$/, '$1');

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

const transporter = gmailUser && gmailAppPassword
  ? nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    })
  : null;

interface ContactFormData {
  nome: string;
  empresa: string;
  email: string;
  mensagem: string;
  hp_field?: string;
  loadTime?: number;
}

async function sendToGoogleSheets(data: ContactFormData) {
  if (!scriptUrl || !scriptUrl.startsWith("http")) {
    console.error(`ERRO: GOOGLE_SHEETS_URL ausente ou inválida: "${scriptUrl}"`);
    return false;
  }

  try {
    // Usando text/plain para evitar problemas de pré-vôo (preflight) do CORS
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        nome: data.nome,
        empresa: data.empresa,
        email: data.email,
        mensagem: data.mensagem,
      }),
      redirect: "follow",
    });

    if (response.status === 200 || response.status === 201 || (response.status === 0 && response.type === 'opaque')) {
      return true;
    }

    const responseBody = await response.text().catch(() => "N/A");
    console.error(`Erro do Google Sheets: Status ${response.status}`, responseBody);
    return false;
  } catch (error) {
    console.error("Erro ao enviar para o Google Sheets:", error);
    return false;
  }
}

const LOGO_URL = "https://www.dobrasilgroup.com.br/images/DOBRASIL%20-%20original.png";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildReplyMailto(data: ContactFormData) {
  const subject = "Re: Contato com a DO Brasil";
  const body = `Olá ${data.nome},\n\nObrigado por entrar em contato com a DO Brasil!\n\nRecebemos sua mensagem sobre ${data.empresa} e em breve um de nossos consultores vai te responder com mais detalhes.\n\nQualquer dúvida, é só responder este e-mail.\n\nAtenciosamente,\nEquipe DO Brasil`;
  return `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildNotificationEmailHtml(data: ContactFormData) {
  const nome = escapeHtml(data.nome);
  const empresa = escapeHtml(data.empresa);
  const email = escapeHtml(data.email);
  const mensagem = escapeHtml(data.mensagem).replace(/\n/g, "<br>");
  const replyHref = buildReplyMailto(data);

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');</style>
</head>
<body style="margin:0;padding:0;background-color:#f0e9db;font-family:'Inter',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0e9db;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(17,24,39,0.08);">
          <tr>
            <td align="center" style="background-color:#111827;padding:28px 24px;">
              <img src="${LOGO_URL}" alt="DO Brasil" height="40" style="height:40px;display:block;">
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px 8px 40px;">
              <p style="margin:0 0 6px 0;font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#a26107;">Novo lead pelo site</p>
              <h1 style="margin:0;font-family:'Playfair Display',Georgia,serif;font-size:24px;font-weight:700;color:#111827;">Você recebeu um novo contato</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0e9db;">
                    <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9a8b78;">Nome</p>
                    <p style="margin:2px 0 0 0;font-size:15px;color:#111827;font-weight:600;">${nome}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0e9db;">
                    <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9a8b78;">Empresa</p>
                    <p style="margin:2px 0 0 0;font-size:15px;color:#111827;font-weight:600;">${empresa}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9a8b78;">E-mail</p>
                    <p style="margin:2px 0 0 0;font-size:15px;color:#111827;font-weight:600;">${email}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px 0 40px;">
              <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9a8b78;">Mensagem</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0e9db;border-radius:12px;">
                <tr>
                  <td style="padding:16px 18px;font-size:15px;line-height:1.6;color:#3f2d22;">${mensagem}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:32px 40px 36px 40px;">
              <a href="${replyHref}" style="display:inline-block;background-color:#a26107;color:#ffffff;font-family:'Inter',Arial,sans-serif;font-size:15px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:12px;">Responder agora</a>
            </td>
          </tr>
          <tr>
            <td align="center" style="background-color:#f0e9db;padding:16px 24px;">
              <p style="margin:0;font-size:12px;color:#9a8b78;">Enviado automaticamente pelo formulário de contato — dobrasilgroup.com.br</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendNotificationEmail(data: ContactFormData) {
  if (!transporter || !gmailUser) {
    console.error("ERRO: GMAIL_USER ou GMAIL_APP_PASSWORD não estão definidos no ambiente!");
    return false;
  }

  try {
    await transporter.sendMail({
      from: `"Site DO Brasil" <${gmailUser}>`,
      to: gmailUser,
      replyTo: data.email,
      subject: `[DO Brasil] Novo contato — ${data.nome} (${data.empresa})`,
      text: `Nome: ${data.nome}\nEmpresa: ${data.empresa}\nE-mail: ${data.email}\n\nMensagem:\n${data.mensagem}\n\nResponder: ${buildReplyMailto(data)}`,
      html: buildNotificationEmailHtml(data),
    });
    return true;
  } catch (error) {
    console.error("Erro ao enviar e-mail de notificação:", error);
    return false;
  }
}

export async function submitContactForm(data: ContactFormData) {
  if (!scriptUrl && !transporter) {
    console.error("ERRO: Nenhum destino configurado (GOOGLE_SHEETS_URL e GMAIL_USER/GMAIL_APP_PASSWORD ausentes).");
    return { success: false, error: "Configuração do servidor incompleta." };
  }

  // 1. Proteção Honeypot (Se preenchido, é bot)
  if (data.hp_field) {
    return { success: true }; // Descarte silencioso (fingimos que deu certo)
  }

  // 2. Proteção de Tempo (Preenchido em menos de 3 segundos? Provável bot)
  const timeTaken = Date.now() - (data.loadTime || 0);

  if (timeTaken < 3000) {
    return { success: false, error: "Envio muito rápido. Tente novamente em alguns segundos." };
  }

  // 3. Validação Básica de Dados
  if (!data.email.includes("@") || data.mensagem.length < 5) {
    return { success: false, error: "Dados inválidos." };
  }

  if (data.mensagem.length > 5000) {
    return { success: false, error: "Mensagem muito longa." };
  }

  const [sheetsOk, emailOk] = await Promise.all([
    sendToGoogleSheets(data),
    sendNotificationEmail(data),
  ]);

  if (!sheetsOk && !emailOk) {
    return { success: false, error: "Falha ao enviar a mensagem. Tente novamente mais tarde." };
  }

  return { success: true };
}

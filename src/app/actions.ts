"use server";

const scriptUrl = process.env.GOOGLE_SHEETS_URL!;

export async function submitContactForm(data: { 
  nome: string; 
  empresa: string; 
  email: string; 
  mensagem: string;
  hp_field?: string;
  loadTime?: number;
}) {
  try {
    // 1. Proteção Honeypot (Se preenchido, é bot)
    if (data.hp_field) {
      console.warn("Spam detectado via Honeypot.");
      return { success: true }; // Descarte silencioso (fingimos que deu certo)
    }

    // 2. Proteção de Tempo (Preenchido em menos de 3 segundos? Provável bot)
    const timeTaken = Date.now() - (data.loadTime || 0);
    if (timeTaken < 3000) {
      console.warn(`Envio suspeito rápido demais (${timeTaken}ms).`);
      return { success: false, error: "Envio muito rápido. Tente novamente em alguns segundos." };
    }

    // 3. Validação Básica de Dados
    if (!data.email.includes("@") || data.mensagem.length < 5) {
      return { success: false, error: "Dados inválidos." };
    }

    if (data.mensagem.length > 5000) {
      return { success: false, error: "Mensagem muito longa." };
    }

    console.log("Iniciando envio para o Google Sheets...");
    
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
        mensagem: data.mensagem
      }),
      redirect: "follow",
    });

    console.log("Status da resposta do Google:", response.status);

    if (response.status === 200 || response.status === 0 || response.type === 'opaque') {
      return { success: true };
    }

    return { success: false, error: `Status: ${response.status}` };
  } catch (error) {
    console.error("Erro Crítico no Servidor:", error);
    return { success: false, error: "Falha na conexão interna." };
  }
}

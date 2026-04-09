"use server";

const rawScriptUrl = process.env.GOOGLE_SHEETS_URL;
// Limpa a URL de possíveis aspas ou espaços extras que podem vir do ambiente do Vercel
const scriptUrl = rawScriptUrl?.trim().replace(/^["'](.*)["']$/, '$1');

export async function submitContactForm(data: { 
  nome: string; 
  empresa: string; 
  email: string; 
  mensagem: string;
  hp_field?: string;
  loadTime?: number;
}) {
    if (!scriptUrl) {
      console.error("ERRO: GOOGLE_SHEETS_URL não está definida no ambiente!");
      return { success: false, error: "Configuração do servidor incompleta. (Env Var ausente)" };
    }

    if (!scriptUrl.startsWith("http")) {
      console.error(`ERRO: GOOGLE_SHEETS_URL inválida: "${scriptUrl}"`);
      return { success: false, error: "URL de destino inválida." };
    }

    try {
      
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

    if (response.status === 200 || response.status === 201 || (response.status === 0 && response.type === 'opaque')) {
      return { success: true };
    }

    const responseBody = await response.text().catch(() => "N/A");
    console.error(`Erro do Google Sheets: Status ${response.status}`, responseBody);
    return { success: false, error: `Erro na API do Sheets (${response.status})` };
  } catch (error) {
    console.error("Erro Crítico no Servidor durante envio do form:", error);
    return { success: false, error: `Falha na conexão interna: ${error instanceof Error ? error.message : String(error)}` };
  }
}

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
      console.log(`Recebido formulário de: ${data.email}. Validando...`);
      
      // 1. Proteção Honeypot (Se preenchido, é bot)
    if (data.hp_field) {
      console.warn("Spam detectado via Honeypot.");
      return { success: true }; // Descarte silencioso (fingimos que deu certo)
    }

    // 2. Proteção de Tempo (Preenchido em menos de 3 segundos? Provável bot)
    const timeTaken = Date.now() - (data.loadTime || 0);
    console.log(`Tempo para preenchimento: ${timeTaken}ms`);
    
    if (timeTaken < 3000) {
      console.warn(`Envio suspeito rápido demais (${timeTaken}ms).`);
      return { success: false, error: "Envio muito rápido. Tente novamente em alguns segundos." };
    }

    // 3. Validação Básica de Dados
    if (!data.email.includes("@") || data.mensagem.length < 5) {
      console.warn("Dados inválidos (email ou mensagem curta).");
      return { success: false, error: "Dados inválidos." };
    }

    if (data.mensagem.length > 5000) {
      console.warn("Mensagem excessivamente longa.");
      return { success: false, error: "Mensagem muito longa." };
    }

    console.log(`Iniciando fetch para Google Sheets URL (${scriptUrl.substring(0, 30)}...)`);
    
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

    console.log(`Resposta do Sheets status: ${response.status}`);

    if (response.status === 200 || response.status === 201 || (response.status === 0 && response.type === 'opaque')) {
      console.log("Envio realizado com sucesso!");
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

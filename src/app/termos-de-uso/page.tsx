"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function TermosUso() {
  return (
    <main className="min-h-screen bg-background">
      <Header isProductPage={true} />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader 
            label="Jurídico"
            title="Termos de Uso"
            center={false}
          />
          
          <div className="mt-12 space-y-8 text-primary/70 font-sans font-light leading-relaxed">
            <p className="text-lg">
              Bem-vindo ao portal da **DO Brasil Distribuidora**. Ao utilizar nossos serviços digitais, você concorda com as diretrizes aqui estabelecidas.
            </p>
            
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h3 className="text-xl font-serif text-primary mb-4">Portal em Evolução</h3>
              <p>
                Este site é uma ferramenta de comunicação corporativa e comercial. Os termos de uso completos e detalhados estão sendo revisados por nosso conselho jurídico para garantir a melhor experiência e segurança jurídica para todas as partes.
              </p>
            </div>

            <section>
              <h4 className="text-xl font-serif text-primary mb-4">Uso Permitido</h4>
              <ul className="list-disc pl-6 space-y-4">
                <li>Consulta de informações sobre produtos e logística.</li>
                <li>Uso de ferramentas de contato comercial para fins profissionais.</li>
                <li>Compartilhamento de conteúdo com atribuição devida à marca.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-xl font-serif text-primary mb-4">Restrições</h4>
              <p>
                É proibido o uso deste portal para fins ilícitos, disseminação de spam ou tentativa de violação da integridade técnica de nossos servidores.
              </p>
            </section>

            <p>
              Qualquer dúvida sobre o uso de nossas ferramentas pode ser encaminhada para **contato@dobrasilgroup.com.br**.
            </p>
            
            <p className="text-sm opacity-50 pt-10 uppercase tracking-widest">
              Última atualização: Abril de 2026
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function PoliticaPrivacidade() {
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
            title="Política de Privacidade"
            center={false}
          />
          
          <div className="mt-12 space-y-8 text-primary/70 font-sans font-light leading-relaxed">
            <p className="text-lg">
              A **DO Brasil Distribuidora** reafirma seu compromisso com a transparência e a segurança dos seus dados. Esta página está sendo atualizada para refletir nossos novos processos digitais.
            </p>
            
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h3 className="text-xl font-serif text-primary mb-4">Informações em Processamento</h3>
              <p>
                Estamos finalizando os termos detalhados de nossa política de privacidade em conformidade com a LGPD (Lei Geral de Proteção de Dados). 
                Em breve, você poderá consultar aqui todos os detalhes sobre como protegemos e utilizamos suas informações.
              </p>
            </div>

            <section>
              <h4 className="text-xl font-serif text-primary mb-4">Nossos Princípios</h4>
              <ul className="list-disc pl-6 space-y-4">
                <li>Uso exclusivo para comunicação corporativa e logística.</li>
                <li>Não compartilhamento de dados com terceiros sem autorização expressa.</li>
                <li>Garantia de acesso e exclusão de dados mediante solicitação.</li>
              </ul>
            </section>

            <p>
              Caso tenha dúvidas imediatas sobre o tratamento de seus dados, entre em contato conosco através de **contato@dobrasilgroup.com.br**.
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

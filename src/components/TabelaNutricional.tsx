"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const nutritionalData = [
  { item: "Valor Energético", value: "320 kcal", dv: "16%" },
  { item: "Carboidratos", value: "60 g", dv: "20%" },
  { item: "Açúcares Totais", value: "50 g", dv: "**" },
  { item: "Açúcares Adicionados", value: "40 g", dv: "**" },
  { item: "Proteínas", value: "6.5 g", dv: "13%" },
  { item: "Gorduras Totais", value: "6.0 g", dv: "9%" },
  { item: "Gorduras Saturadas", value: "3.5 g", dv: "16%" },
  { item: "Gorduras Trans", value: "0 g", dv: "**" },
  { item: "Fibra Alimentar", value: "0 g", dv: "0%" },
  { item: "Sódio", value: "115 mg", dv: "6%" },
  { item: "Cálcio", value: "200 mg", dv: "20%" },
];

export default function TabelaNutricional() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader label="Informações Nutricionais" title="Transparência em cada porção" />

        <motion.div 
          {...fadeUp}
          className="mt-16 bg-[#faf7f2] rounded-4xl shadow-xl border border-primary/10 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-primary/20 pb-4 mb-6">
            <div>
              <h3 className="text-3xl font-serif text-primary font-bold">INFORMAÇÃO NUTRICIONAL</h3>
              <p className="text-primary/60 font-medium mt-1">Porção de 20g (1 colher de sopa)</p>
            </div>
            <p className="text-sm font-bold text-primary/80 mt-4 md:mt-0">%VD(*)</p>
          </div>

          <div className="space-y-0">
            {nutritionalData.map((row, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between py-3 border-b border-primary/10 hover:bg-primary/2 transition-colors px-2 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary/90">{row.item}</span>
                  {row.item === "Valor Energético" && <span className="text-xs text-primary/50 hidden sm:inline">(1344 kJ)</span>}
                </div>
                <div className="flex gap-10 md:gap-24 text-right">
                  <span className="w-16 font-medium text-primary/80">{row.value}</span>
                  <span className="w-10 font-bold text-primary text-right">{row.dv}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs text-primary/50 space-y-2 leading-relaxed">
            <p>* % Valores Diários com base em uma dieta de 2.000 kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.</p>
            <p>** Valor Diário não estabelecido.</p>
            <p className="font-bold text-primary/70 mt-4">ALÉRGICOS: CONTÉM LEITE. PODE CONTER TRAÇOS DE NOZES E AMENDOIM. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

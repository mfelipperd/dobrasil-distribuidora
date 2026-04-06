"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Card, { CardDivider } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote: "O Noble Leche transformou o cardápio do nosso café. Os clientes sempre perguntam de onde vem esse doce de leite.",
    author: "Ana Rodrigues",
    role: "Proprietária, Café Sabores do Norte",
    city: "Belém, PA",
  },
  {
    quote: "Parceria séria, entrega no prazo e qualidade impecável. Recomendo para qualquer estabelecimento premium.",
    author: "Carlos Mendes",
    role: "Chef Executivo, Hotel Gran Pará",
    city: "Belém, PA",
  },
  {
    quote: "Trabalhamos com vários distribuidores, mas a curadoria da DO Brasil é sem comparação. Produto artesanal de verdade.",
    author: "Fernanda Costa",
    role: "Gerente de Compras, Rede Savana Gourmet",
    city: "Ananindeua, PA",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true },
});

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-28 bg-[#EDE0CA]">
      <div className="section-container">
        <SectionHeader
          label="Quem já confia na DO Brasil"
          title="Parceiros que<br/>fazem a diferença."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp(i * 0.12)}>
              <Card className="flex flex-col h-full">
                <Quote size={28} className="text-[#7B3F21]/20 mb-4 shrink-0" />
                <p className="text-sm text-[#7B3F21]/75 font-sans font-light leading-relaxed italic flex-1">
                  "{t.quote}"
                </p>
                <CardDivider />
                <div>
                  <p className="font-serif text-[#7B3F21] font-semibold text-base">{t.author}</p>
                  <p className="text-sm text-[#7B3F21]/55 font-sans mt-1">{t.role}</p>
                  <p className="text-xs text-[#7B3F21]/35 font-sans mt-1 uppercase tracking-widest">{t.city}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

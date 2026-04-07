"use client";

import { motion } from "framer-motion";
import { Truck, Sparkles, HandshakeIcon, MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";

const b2bItems = [
  {
    title: "Logística Local",
    subtitle: "Belém / PA",
    description: "Nosso centro de distribuição no Norte garante que seu estoque esteja sempre fresco e entregue no prazo.",
    icon: <MapPin className="text-accent" size={32} />,
    size: "md:col-span-1",
  },
  {
    title: "Curadoria Artesanal",
    subtitle: "Seleção de Alto Padrão",
    description: "Cada produtor em nossa rede segue critérios artesanais rigorosos, garantindo um padrão premium constante.",
    icon: <Sparkles className="text-primary" size={32} />,
    size: "md:col-span-1",
  },
  {
    title: "Programa de Parceria",
    subtitle: "Cresça com a DO Brasil",
    description: "Oferecemos soluções B2B personalizadas, materiais de PDV e preços de atacado competitivos para varejistas, hotéis e chefs.",
    icon: <HandshakeIcon className="text-accent" size={32} />,
    size: "md:col-span-1 lg:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section id="b2b" className="py-16 lg:py-36 bg-secondary/30 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-sans uppercase tracking-[0.2em] text-primary/60 font-bold">Soluções para Negócios</span>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mt-4">Eleve seu Cardápio.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {b2bItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={item.size}
            >
              <Card className="h-full bg-background p-12 rounded-3xl border border-primary/10 flex flex-col justify-between group">
                <div className="mb-10 p-5 bg-primary/5 rounded-2xl w-fit shadow-inner group-hover:bg-primary/10 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-sans uppercase tracking-widest text-primary/40 transition-colors duration-300 font-bold mb-2">
                    {item.subtitle}
                  </h4>
                  <h3 className="text-3xl font-serif text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-primary/70 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

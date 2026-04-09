"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Truck, Sparkles, HandshakeIcon, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useRef } from "react";
import Image from "next/image";
import { InfoPopover } from "./ui/InfoPopover";

const features = [
  {
    icon: Truck,
    title: "Logística Local",
    subtitle: "Belém / PA",
    desc: "Hub de distribuição dedicado no Norte garante seus pedidos sempre frescos e no prazo.",
  },
  {
    icon: Sparkles,
    title: "Curadoria Artesanal",
    subtitle: "Seleção rigorosa",
    desc: "Cada produtor passa por critérios exigentes, garantindo padrão premium em todos os lotes.",
  },
  {
    icon: HandshakeIcon,
    title: "Programa de Parcerias",
    subtitle: "Cresça com a DO Brasil",
    desc: "Soluções B2B personalizadas, materiais de PDV e preços competitivos para atacado.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    subtitle: "Sem conservantes",
    desc: "Produtos 100% naturais, rastreáveis do produtor até a sua mesa.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true },
});

function FeatureCard({ f, i }: { f: typeof features[0], i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect: moves icon slightly at different rate than the card
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <motion.div {...fadeUp(i * 0.1)} transition={{ duration: 0.25 }}>
      <Card ref={ref} className="h-full p-8 rounded-3xl border-primary/5 hover:bg-primary/2 transition-all duration-500 overflow-hidden group">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div 
            style={{ y }}
            className="shrink-0 w-20 h-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-inner"
          >
            <f.icon size={42} strokeWidth={1.2} />
          </motion.div>
          
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-primary/40 mb-1">
                {f.subtitle}
              </p>
              <h3 className="text-2xl font-serif text-primary leading-tight">{f.title}</h3>
            </div>
            <p className="text-base text-primary/70 font-sans font-light leading-relaxed">
              {f.desc}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-16 lg:py-36 bg-white/50">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Por que DO Brasil?"
          title="Diferenciais que elevam<br/>o seu negócio."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {features.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </div>

        {/* Distributor Showcase Section */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-16 rounded-4xl bg-corporate px-8 md:px-16 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-corporate/30 border border-white/5 relative overflow-hidden group"
        >
          {/* Subtle Graphic Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors duration-700" />
          
          <div className="max-w-2xl relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="mb-6 relative w-48 h-20 bg-white p-4 rounded-xl shadow-sm">
              <Image 
                src="/images/DOBRASIL - original.png" 
                alt="DOBRASIL Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/50 text-[10px] font-sans font-bold uppercase tracking-[0.4em] mb-4">
              Distribuidora DO Brasil
            </p>
            <h4 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
              Infraestrutura de ponta para o seu negócio decolar.
            </h4>
            <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed max-w-xl">
              Mais que um fornecedor, somos o seu braço logístico no Norte. Atendimento personalizado, curadoria rigorosa e entrega garantida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0">
            <InfoPopover message="WhatsApp em atualização. Por favor, utilize o formulário de contato abaixo para falar com um consultor.">
              <Button size="lg" className="bg-white text-corporate hover:bg-[#FFB800] hover:text-corporate rounded-2xl h-16 px-10 text-lg font-bold shadow-xl transition-all duration-300">
                Falar com Consultor
              </Button>
            </InfoPopover>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

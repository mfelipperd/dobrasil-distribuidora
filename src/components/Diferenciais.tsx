"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Truck, Sparkles, HandshakeIcon, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useRef } from "react";

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
      <Card ref={ref} className="h-full p-8 rounded-3xl border-primary/5 hover:bg-primary/[0.02] transition-all duration-500 overflow-hidden group">
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

        {/* CTA Banner */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-16 rounded-[2rem] bg-corporate px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-corporate/20 border border-white/10"
        >
          <div className="max-w-xl">
            <p className="text-white/40 text-[10px] font-sans font-bold uppercase tracking-[0.3em] mb-3">
              Pronto para escalar?
            </p>
            <h4 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              Solicite nosso catálogo completo e comece hoje.
            </h4>
          </div>
          <Button asChild size="lg" className="shrink-0 bg-white text-corporate hover:bg-white/90 rounded-full h-16 px-10 text-lg shadow-xl">
            <Link href="#contato">Solicitar catálogo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

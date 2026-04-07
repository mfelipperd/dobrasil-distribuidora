"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Award, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useRef } from "react";

const values = [
  { icon: <MapPin size={22} />, label: "Origem Garantida", desc: "Produtores selecionados da região Norte do Brasil." },
  { icon: <Award size={22} />, label: "Qualidade Premium", desc: "Cada lote passa por rigoroso controle de qualidade artesanal." },
  { icon: <Leaf size={22} />, label: "Sem Conservantes", desc: "Ingredientes naturais, processo lento e tradicional." },
];

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true },
});

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for cards (faster movement for cards lower in the list)
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const transforms = [y1, y2, y3];

  return (
    <section id="sobre" className="py-16 lg:py-36 bg-background relative overflow-hidden" ref={containerRef}>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <SectionHeader
              label="Sobre a DO Brasil"
              title="Nascemos do coração<br/>do Brasil para o mundo."
              center={false}
            />
            <motion.p {...fadeUp(2)} className="text-base text-primary/70 font-sans font-light leading-relaxed mb-8">
              A DO Brasil é uma distribuidora Premium localizada em Belém do Pará, dedicada a levar o melhor da culinária artesanal brasileira para restaurantes, hotéis, cafeterias e varejistas exigentes.
            </motion.p>
            <motion.p {...fadeUp(3)} className="text-base text-primary/70 font-sans font-light leading-relaxed mb-10">
              Nosso trabalho começa na seleção cuidadosa de produtores que compartilham da mesma obsessão por qualidade. Somos o elo entre a tradição e os melhores estabelecimentos da região.
            </motion.p>
            <motion.div {...fadeUp(4)}>
              <Button asChild variant="outline">
                <Link href="#contato">Conheça nossa história</Link>
              </Button>
            </motion.div>
          </div>

          {/* Value Cards */}
          <div className="flex flex-col gap-4 relative">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                style={{ y: transforms[i] }}
                {...fadeUp(i + 2)}
                className="z-10"
              >
                <Card className="flex flex-row items-center gap-5 p-6 rounded-2xl hover:bg-primary/5 border-primary/10 transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary">{v.label}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

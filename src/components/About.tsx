"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Leaf } from "lucide-react";
import Card, { CardIcon, CardTitle, CardBody } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
  return (
    <section id="sobre" className="py-28 bg-[#F2E8D5]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <SectionHeader
              label="Sobre a DO Brasil"
              title="Nascemos do coração<br/>do Brasil para o mundo."
              center={false}
            />
            <motion.p {...fadeUp(2)} className="text-base text-[#7B3F21]/70 font-sans font-light leading-relaxed mb-5">
              A DO Brasil é uma distribuidora Premium localizada em Belém do Pará, dedicada a levar o melhor da culinária artesanal brasileira para restaurantes, hotéis, cafeterias e varejistas exigentes.
            </motion.p>
            <motion.p {...fadeUp(3)} className="text-base text-[#7B3F21]/70 font-sans font-light leading-relaxed mb-10">
              Nosso trabalho começa na seleção cuidadosa de produtores que compartilham da mesma obsessão por qualidade. Somos o elo entre a tradição e os melhores estabelecimentos da região.
            </motion.p>
            <motion.div {...fadeUp(4)}>
              <Button href="#contato" variant="outline">
                Conheça nossa história
              </Button>
            </motion.div>
          </div>

          {/* Value Cards */}
          <div className="flex flex-col gap-4">
            {values.map((v, i) => (
              <motion.div key={i} {...fadeUp(i + 2)}>
                <Card className="flex flex-row items-start gap-5">
                  <CardIcon>{v.icon}</CardIcon>
                  <div>
                    <CardTitle>{v.label}</CardTitle>
                    <CardBody>{v.desc}</CardBody>
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

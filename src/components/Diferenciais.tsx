"use client";

import { motion } from "framer-motion";
import { Truck, Sparkles, HandshakeIcon, ShieldCheck } from "lucide-react";
import Card, { CardIcon, CardLabel, CardTitle, CardBody } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    icon: <Truck size={22} />,
    color: "text-[#3A92CE]",
    bg: "bg-[#3A92CE]/10",
    title: "Logística Local",
    subtitle: "Belém / PA",
    desc: "Hub de distribuição dedicado no Norte garante seus pedidos sempre frescos e no prazo.",
  },
  {
    icon: <Sparkles size={22} />,
    color: "text-[#7B3F21]",
    bg: "bg-[#7B3F21]/10",
    title: "Curadoria Artesanal",
    subtitle: "Seleção rigorosa",
    desc: "Cada produtor passa por critérios exigentes, garantindo padrão premium em todos os lotes.",
  },
  {
    icon: <HandshakeIcon size={22} />,
    color: "text-[#3A92CE]",
    bg: "bg-[#3A92CE]/10",
    title: "Programa de Parcerias",
    subtitle: "Cresça com a DO Brasil",
    desc: "Soluções B2B personalizadas, materiais de PDV e preços competitivos para atacado.",
  },
  {
    icon: <ShieldCheck size={22} />,
    color: "text-[#7B3F21]",
    bg: "bg-[#7B3F21]/10",
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

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-28 bg-[#F2E8D5]">
      <div className="section-container">
        <SectionHeader
          label="Por que DO Brasil?"
          title="Diferenciais que elevam<br/>o seu negócio."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
              <Card className="h-full">
                <CardIcon color={f.color} bg={f.bg}>
                  {f.icon}
                </CardIcon>
                <CardLabel>{f.subtitle}</CardLabel>
                <CardTitle>{f.title}</CardTitle>
                <CardBody>{f.desc}</CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-12 rounded-2xl bg-[#7B3F21] px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="text-[#F2E8D5]/50 text-xs font-sans font-bold uppercase tracking-[0.2em] mb-2">
              Pronto para escalar?
            </p>
            <h4 className="text-2xl md:text-3xl font-serif text-[#F2E8D5]">
              Solicite nosso catálogo completo agora.
            </h4>
          </div>
          <Button href="#contato" variant="cream" size="md" className="shrink-0">
            Solicitar catálogo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

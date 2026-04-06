"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true },
});

const specs = [
  { label: "350g", desc: "Peso líquido por pote" },
  { label: "100%", desc: "Ingredientes naturais" },
  { label: "Slow Cook", desc: "Processo artesanal" },
  { label: "PA", desc: "Origem Belém do Pará" },
];

export default function ProductShowcase() {
  return (
    <section id="produto" className="py-28 bg-[#EDE0CA]">
      <div className="section-container">
        <SectionHeader label="Nosso Produto Estrela" title="Noble Leche" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-[#F2E8D5] shadow-xl"
          >
            <Image
              src="/images/noble-leche-jar.png"
              alt="Noble Leche — Doce de Leite Premium"
              fill priority
              className="object-contain p-12 drop-shadow-[0_30px_30px_rgba(123,63,33,0.25)] hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Copy */}
          <div className="flex flex-col gap-6">
            <motion.h3 {...fadeUp(0.1)} className="text-3xl md:text-5xl font-serif text-[#7B3F21] leading-tight">
              Paciência, Pureza <br /> e Perfeição.
            </motion.h3>
            <motion.p {...fadeUp(0.2)} className="text-base text-[#7B3F21]/70 font-sans font-light leading-relaxed">
              O Noble Leche é mais do que um produto — é o resultado de um processo artesanal ancestral. Leite fresco integral, açúcar de cana orgânico e horas de cozimento lento criam uma textura aveludada e um sabor que evoca o calor do campo brasileiro.
            </motion.p>
            <motion.p {...fadeUp(0.3)} className="text-base text-[#7B3F21]/70 font-sans font-light leading-relaxed">
              Sem conservantes, sem atalhos. Cada pote carrega a essência pura da tradição em cada colherada.
            </motion.p>

            {/* Specs Grid */}
            <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 gap-4">
              {specs.map((s, i) => (
                <div key={i} className="bg-[#F2E8D5]/70 rounded-xl px-6 py-5 border border-[#7B3F21]/10">
                  <p className="text-2xl font-serif font-bold text-[#7B3F21]">{s.label}</p>
                  <p className="text-xs text-[#7B3F21]/50 font-sans mt-2">{s.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button href="#contato" variant="primary" size="md">
                Solicitar catálogo
              </Button>
              <Button href="#contato" variant="outline" size="md">
                Pedir amostra grátis
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

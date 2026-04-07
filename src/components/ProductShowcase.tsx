"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useRef } from "react";

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
  const containerRef = useRef(null);
  const mobileRef = useRef(null);
  
  // Desktop Parallax
  const { scrollYProgress: deskProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(deskProgress, [0, 1], [40, -40]);

  // Mobile Overlays Custom Timing
  // Starts when top of image is near top of screen (fully visible), ends very quickly so text is readable
  const { scrollYProgress: mobProgress } = useScroll({
    target: mobileRef,
    offset: ["start 30%", "start 5%"]
  });
  const imageBlur = useTransform(mobProgress, [0, 1], ["blur(0px)", "blur(12px)"]);
  const overlayOpacity = useTransform(mobProgress, [0, 1], [0, 0.90]);
  const textOpacity = useTransform(mobProgress, [0, 1], [0, 1]);
  const textY = useTransform(mobProgress, [0, 1], [50, 0]);

  return (
    <section id="produto" className="py-16 lg:py-36 bg-secondary/20 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <SectionHeader label="Nosso Produto Estrela" title="Noble Leche" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-32 items-center">
          
          {/* MOBILE EXPERIENCE: Edge-to-Edge Image + Text */}
          <div ref={mobileRef} className="relative -mx-6 w-[calc(100%+3rem)] aspect-4/5 overflow-hidden shadow-2xl lg:hidden flex flex-col justify-center">
            <motion.div style={{ filter: imageBlur }} className="absolute inset-0 z-0">
              <Image
                src="/images/Gemini_Generated_Image_hgrowdhgrowdhgro (1).png"
                alt="Noble Leche — Doce de Leite Premium"
                fill priority
                className="object-cover"
              />
            </motion.div>
            
            {/* Dynamic Dark Brown Gradient triggered on scroll */}
            <motion.div 
               style={{ opacity: overlayOpacity }} 
               className="absolute inset-0 bg-linear-to-b from-primary/95 via-primary/80 to-primary/40 z-0" 
            />
            
            <motion.div 
              style={{ opacity: textOpacity, y: textY }} 
              className="relative z-10 flex flex-col gap-5 px-8 text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-serif text-background leading-tight drop-shadow-md">
                Paciência, Pureza <br /> e Perfeição.
              </h3>
              <p className="text-sm sm:text-base font-medium text-background/95 leading-relaxed drop-shadow-sm">
                O Noble Leche é mais do que um produto — é o resultado de um processo artesanal ancestral. Leite fresco integral, açúcar de cana orgânico e horas de cozimento lento criam uma textura aveludada e um sabor que evoca o calor do campo brasileiro.
              </p>
              <p className="text-sm sm:text-base font-medium text-background/95 leading-relaxed drop-shadow-sm">
                Sem conservantes, sem atalhos. Cada pote carrega a essência pura da tradição em cada colherada.
              </p>
            </motion.div>
          </div>

          {/* DESKTOP EXPERIENCE: Clean side-by-side Image */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden lg:block relative h-[500px] w-full rounded-3xl overflow-hidden bg-background shadow-xl border border-primary/5"
          >
            <Image
              src="/images/Gemini_Generated_Image_hgrowdhgrowdhgro (1).png"
              alt="Noble Leche — Doce de Leite Premium"
              fill priority
              className="object-cover hover:scale-105 transition-transform duration-700 hover:rotate-1"
            />
          </motion.div>

          {/* RIGHT COLUMN: Desktop Text + Global Specs & Buttons */}
          <div className="flex flex-col gap-6 mt-10 lg:mt-0">
            
            {/* Desktop Only Text */}
            <div className="hidden lg:flex flex-col gap-6">
              <motion.h3 {...fadeUp(0.1)} className="text-3xl md:text-5xl font-serif text-primary leading-tight">
                Paciência, Pureza <br /> e Perfeição.
              </motion.h3>
              <motion.p {...fadeUp(0.2)} className="text-base text-primary/70 font-sans font-light leading-relaxed">
                O Noble Leche é mais do que um produto — é o resultado de um processo artesanal ancestral. Leite fresco integral, açúcar de cana orgânico e horas de cozimento lento criam uma textura aveludada e um sabor que evoca o calor do campo brasileiro.
              </motion.p>
              <motion.p {...fadeUp(0.3)} className="text-base text-primary/70 font-sans font-light leading-relaxed">
                Sem conservantes, sem atalhos. Cada pote carrega a essência pura da tradição em cada colherada.
              </motion.p>
            </div>

            {/* Specs Grid (Visible Everywhere) */}
            <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 gap-4">
              {specs.map((s, i) => (
                <div key={i} className="bg-background/70 rounded-2xl px-6 py-5 border border-primary/10 shadow-sm">
                  <p className="text-2xl font-serif font-bold text-primary">{s.label}</p>
                  <p className="text-xs text-primary/50 font-sans mt-2">{s.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Buttons (Visible Everywhere) */}
            <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild variant="default" size="default">
                <Link href="#contato">Solicitar catálogo</Link>
              </Button>
              <Button asChild variant="outline" size="default">
                <Link href="#contato">Pedir amostra grátis</Link>
              </Button>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

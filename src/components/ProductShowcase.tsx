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
  const imageY = useTransform(deskProgress, [0, 1], [-50, 50]);

  // Mobile Overlays Custom Timing
  const { scrollYProgress: mobProgress } = useScroll({
    target: mobileRef,
    offset: ["start 30%", "start 5%"]
  });
  const mobImageY = useTransform(mobProgress, [0, 1], [-40, 40]);
  const imageBlur = useTransform(mobProgress, [0, 1], ["blur(0px)", "blur(12px)"]);
  const overlayOpacity = useTransform(mobProgress, [0, 1], [0, 0.90]);
  const textOpacity = useTransform(mobProgress, [0, 1], [0, 1]);
  const textY = useTransform(mobProgress, [0, 1], [50, 0]);

  return (
    <section id="produto" className="relative py-16 lg:py-12 bg-[#1a0f0a] overflow-hidden" ref={containerRef}>
      {/* DESKTOP BACKGROUND LAYER */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0">
          <Image
            src="/images/Gemini_Generated_Image_m2opfym2opfym2op.png"
            alt="Noble Leche Background"
            fill
            loading="lazy"
            quality={80}
            sizes="100vw"
            className="object-cover object-left scale-125"
          />
        </motion.div>
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Only show SectionHeader on mobile now */}
        <div className="lg:hidden">
          <SectionHeader label="Nosso Produto Estrela" title="Noble Leche" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center">
          
          {/* MOBILE EXPERIENCE: Edge-to-Edge Image + Text */}
          <div ref={mobileRef} className="relative -mx-6 w-[calc(100%+3rem)] aspect-4/5 overflow-hidden shadow-2xl lg:hidden flex flex-col justify-center">
            <motion.div style={{ filter: imageBlur, y: mobImageY }} className="absolute inset-0 z-0">
              <Image
                src="/images/Gemini_Generated_Image_hgrowdhgrowdhgro (1).png"
                alt="Noble Leche — Doce de Leite Premium"
                fill
                loading="lazy"
                quality={80}
                sizes="100vw"
                className="object-cover scale-150"
              />
            </motion.div>
            
            {/* Dynamic Dark Brown Gradient */}
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

          {/* LEFT COLUMN: Desktop Card + Global Specs & Buttons */}
          <div className="flex flex-col gap-6 mt-10 lg:mt-0 lg:bg-[#4a2c1d]/85 lg:backdrop-blur-xl lg:p-10 lg:rounded-[40px] lg:shadow-2xl lg:border lg:border-white/10 lg:max-w-xl lg:mr-auto">
            
            {/* Desktop Only Text */}
            <div className="hidden lg:flex flex-col gap-6">
              <motion.h3 {...fadeUp(0.1)} className="text-3xl md:text-5xl font-serif text-background leading-tight">
                Paciência, Pureza <br /> e Perfeição.
              </motion.h3>
              <motion.p {...fadeUp(0.2)} className="text-base text-background/90 font-sans font-light leading-relaxed">
                O Noble Leche é mais do que um produto — é o resultado de um processo artesanal ancestral. Leite fresco integral, açúcar de cana orgânico e horas de cozimento lento criam uma textura aveludada e um sabor que evoca o calor do campo brasileiro.
              </motion.p>
              <motion.p {...fadeUp(0.3)} className="text-base text-background/90 font-sans font-light leading-relaxed">
                Sem conservantes, sem atalhos. Cada pote carrega a essência pura da tradição em cada colherada.
              </motion.p>
            </div>

            {/* Specs Grid */}
            <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 gap-4">
              {specs.map((s, i) => (
                <div key={i} className="bg-background/70 lg:bg-white/10 lg:backdrop-blur-sm rounded-2xl px-6 py-5 border border-primary/10 lg:border-white/10 shadow-sm">
                  <p className="text-2xl font-serif font-bold text-primary lg:text-background">{s.label}</p>
                  <p className="text-xs text-primary/50 lg:text-background/60 font-sans mt-2">{s.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary lg:bg-[#633a28] text-white hover:bg-primary/90 lg:hover:bg-[#7a4933] rounded-2xl h-14 px-8 text-base font-bold shadow-lg transition-all duration-300">
                <Link href="#contato">Seja um parceiro</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl h-14 px-8 text-base font-bold lg:bg-[#f5e6d3] lg:text-[#4a2c1d] lg:border-none lg:hover:bg-[#e6d4bc] transition-all duration-300">
                <Link href="#contato">Pedir amostra grátis</Link>
              </Button>
            </motion.div>
            
          </div>

          {/* RIGHT SPACER: Room for the background focus */}
          <div className="hidden lg:block h-full min-h-[600px]" />
        </div>
      </div>
    </section>
  );
}

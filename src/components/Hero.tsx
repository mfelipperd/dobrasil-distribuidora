"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 h-[130%] -top-[15%]">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-doce-de-leite.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/40" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-background/70 mb-10"
        >
          Distribuidora Premium — Belém, PA
        </motion.p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-background mb-10 tracking-tight leading-[1.1]"
        >
          O Ouro da <br /> Tradição Brasileira.
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-background/80 font-sans font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Noble Leche — Doce de Leite Premium para distribuidores exigentes.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button asChild variant="cream" size="lg">
            <Link href="#contato">Quero ser parceiro</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-background border-background/20 hover:bg-background/10 hover:text-background">
            <Link href="#produto">Conhecer o produto</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: textOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#F2E8D5]/50"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}

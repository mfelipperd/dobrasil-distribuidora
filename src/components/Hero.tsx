"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-doce-de-leite.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#7B3F21]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#F2E8D5]/70 mb-6"
        >
          Distribuidora Premium — Belém, PA
        </motion.p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F2E8D5] mb-6 tracking-tight leading-[1.1]"
        >
          O Ouro da <br /> Tradição Brasileira.
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-[#F2E8D5]/80 font-sans font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Noble Leche — Doce de Leite Premium para distribuidores exigentes.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button href="#contato" variant="cream" size="lg">
            Quero ser parceiro
          </Button>
          <Button href="#produto" variant="ghost" size="lg">
            Conhecer o produto
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#F2E8D5]/50"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}

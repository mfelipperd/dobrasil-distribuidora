"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Construction, ArrowRight, Star } from "lucide-react";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-white font-sans relative overflow-hidden flex flex-col">
      {/* Decorative Brand Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-linear-to-r from-[#008444] via-[#FFB800] to-[#1D447E] z-50" />

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col justify-center py-16 lg:py-0">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl">
          
          {/* Left Side: Brand & Status */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <Image 
                src="/images/DOBRASIL - original.png" 
                alt="DO Brasil" 
                width={350} 
                height={110} 
                className="h-20 w-auto object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFB800]/10 text-[#FFB800] text-[10px] uppercase font-black tracking-widest mb-8 border border-[#FFB800]/20 shadow-[0_0_15px_rgba(255,184,0,0.1)]"
            >
              <Construction size={14} />
              Site em Construção
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl xl:text-6xl font-black text-[#111111] leading-[1.1] mb-6 tracking-tight"
            >
              Nosso novo portal <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#008444] to-[#1D447E]">está em construção.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base md:text-lg text-gray-400 font-light mb-10 leading-relaxed max-w-lg"
            >
              Estamos construindo uma plataforma completa para logística e curadoria de alimentos premium. O futuro da distribuição brasileira começa aqui.
            </motion.p>

            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "80px" }}
               transition={{ delay: 1, duration: 1 }}
               className="h-1.5 bg-[#FFB800] rounded-full hidden lg:block"
            />
          </div>

          {/* Right Side: Featured Product Highlight - Overlay Mode */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full flex justify-center lg:justify-end group"
          >
            <div className="relative w-full aspect-square shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] rounded-[3.5rem] overflow-hidden ring-1 ring-gray-100 max-w-[520px]">
              <Image 
                src="/images/Gemini_Generated_Image_hgrowdhgrowdhgro (1).png" 
                alt="Noble Leche" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay for Readability - Enhanced */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/95 via-black/50 to-transparent z-10" />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end items-center lg:items-start text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Star size={16} className="text-[#FFB800] fill-[#FFB800]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#FFB800]">Destaque Premium</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                    Noble Leche: <br /> Tradição e Pureza.
                  </h3>
                  
                  <p className="text-sm text-white/70 font-light mb-8 max-w-xs leading-relaxed">
                    Explore o doce de leite que está redefinindo o padrão de excelência artesanal no Brasil.
                  </p>

                  <Button asChild size="lg" className="bg-white text-[#1D447E] hover:bg-[#FFB800] hover:text-white rounded-full px-10 h-14 text-base font-black shadow-2xl transition-all duration-300 group">
                    <Link href="/doce-de-leite" className="flex items-center gap-2">
                      Ver detalhes
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simplified Footer */}
      <footer className="py-8 px-6 border-t border-gray-50 bg-white z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
           <p>DO BRASIL DISTRIBUIDORA &copy; {new Date().getFullYear()}</p>
           <div className="flex items-center gap-4 text-gray-400">
              <span>Belém</span>
              <div className="w-1 h-1 bg-[#FFB800] rounded-full" />
              <span>São Paulo</span>
              <div className="w-1 h-1 bg-[#1D447E] rounded-full" />
              <span>Brasil</span>
           </div>
        </div>
      </footer>
    </main>
  );
}

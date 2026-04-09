"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-12 h-12 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          
          <p className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-primary/40 mb-6">
            DO Brasil — Distribuidora & Logística
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight tracking-tight">
            Estamos preparando<br />algo excepcional.
          </h1>
          <p className="text-lg text-primary/60 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Nossa plataforma corporativa está em desenvolvimento para oferecer as melhores soluções em logística de alimentos premium no Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="rounded-full px-12">
              <Link href="#contato">Seja um fornecedor</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-12">
              <Link href="/doce-de-leite">Conheça nossos produtos</Link>
            </Button>
          </div>
        </motion.div>
        
        {/* Visual element */}
        <div className="relative w-full h-1 bg-primary/10 rounded-full overflow-hidden mb-12">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 h-full w-1/3 bg-primary"
          />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

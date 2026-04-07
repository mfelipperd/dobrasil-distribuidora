"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#faf7f2] text-primary pt-20 pb-10 border-t border-primary/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="mb-6 inline-block bg-white px-4 py-2 rounded-xl shadow-sm">
            <Image 
              src="/images/DOBRASIL - original.png" 
              alt="DO Brasil" 
              width={180} 
              height={60} 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-sm font-sans font-light leading-relaxed text-primary/70 max-w-xs">
            Especialistas em logística e curadoria de alimentos premium. Levando o melhor da tradição brasileira para o seu negócio.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] mb-6 text-primary/40">Navegação</h4>
          <nav className="flex flex-col gap-3 items-center md:items-start">
            <Link href="/" className="hover:text-primary/60 transition-colors">Início</Link>
            <Link href="/produto" className="hover:text-primary/60 transition-colors">Produtos</Link>
            <Link href="#receitas" className="hover:text-primary/60 transition-colors">Inpiração</Link>
            <Link href="#contato" className="hover:text-primary/60 transition-colors">Fale com Consultor</Link>
          </nav>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] mb-6 text-primary/40">Contato</h4>
          <div className="flex flex-col gap-4 text-sm font-light">
            <a href="https://wa.me/5591912345678" target="_blank" className="flex items-center gap-3 hover:text-primary/60 transition-colors">
              <Phone size={16} className="text-primary/40" />
              +55 91 91234-5678
            </a>
            <a href="mailto:contato@dobrasilgroup.com.br" className="flex items-center gap-3 hover:text-primary/60 transition-colors">
              <Mail size={16} className="text-primary/40" />
              contato@dobrasilgroup.com.br
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-primary/40 mt-1" />
              <span>Belém, Pará — Brasil<br /><span className="text-xs opacity-50">Logística em todo território nacional</span></span>
            </div>
          </div>
        </div>

        {/* Social Column */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] mb-6 text-primary/40">Siga-nos</h4>
          <div className="flex items-center gap-3">
            <Link href="#" className="p-3 bg-white rounded-full text-primary/40 hover:text-primary hover:shadow-md transition-all duration-300 shadow-sm"><Instagram size={20} /></Link>
            <Link href="#" className="p-3 bg-white rounded-full text-primary/40 hover:text-primary hover:shadow-md transition-all duration-300 shadow-sm"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-6 pt-10 border-t border-primary/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-sans text-primary/30 font-bold tracking-widest uppercase text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} DO BRASIL DISTRIBUIDORA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

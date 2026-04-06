"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3d1f10] text-[#F2E8D5] py-14">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-2xl font-serif font-bold tracking-tight">DO BRASIL</p>

        <p className="text-sm font-sans text-[#F2E8D5]/40 text-center leading-relaxed">
          &copy; {new Date().getFullYear()} DO Brasil Distribuidora. Todos os direitos reservados.
          <span className="block text-xs mt-1">Belém, Pará — Brasil</span>
        </p>

        <div className="flex items-center gap-3 text-[#F2E8D5]/40">
          <Link href="#" className="p-3 rounded-full hover:bg-[#F2E8D5]/10 hover:text-[#F2E8D5] transition-all duration-300"><Instagram size={20} /></Link>
          <Link href="#" className="p-3 rounded-full hover:bg-[#F2E8D5]/10 hover:text-[#F2E8D5] transition-all duration-300"><Linkedin size={20} /></Link>
        </div>
      </div>
    </footer>
  );
}

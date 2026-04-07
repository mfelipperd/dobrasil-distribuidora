"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-14">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <Link href="/" className="items-center invisible hidden md:flex">
          {/* Logo oculta temporariamente por solicitação. Hidden on mobile to avoid empty gaps, visible structually on desktop to keep justify-between balanced */}
          <div className="h-8 w-[140px]"></div>
        </Link>

        <p className="text-sm font-sans text-background/40 text-center leading-relaxed">
          &copy; {new Date().getFullYear()} DO Brasil Distribuidora. Todos os direitos reservados.
          <span className="block text-xs mt-1">Belém, Pará — Brasil</span>
        </p>

        <div className="flex items-center gap-3 text-background/40">
          <Link href="#" className="p-3 rounded-full hover:bg-background/10 hover:text-background transition-all duration-300"><Instagram size={20} /></Link>
          <Link href="#" className="p-3 rounded-full hover:bg-background/10 hover:text-background transition-all duration-300"><Linkedin size={20} /></Link>
        </div>
      </div>
    </footer>
  );
}

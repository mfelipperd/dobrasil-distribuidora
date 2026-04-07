"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-14">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/DOBRASIL - original.png" 
            alt="DO Brasil" 
            width={400} 
            height={100} 
            className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
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

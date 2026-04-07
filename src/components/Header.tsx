"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

interface HeaderProps {
  isProductPage?: boolean;
  themeClass?: string;
}

export default function Header({ 
  isProductPage = false,
  themeClass = "bg-corporate/75 border-corporate-accent/20 text-corporate-foreground"
}: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-lg transition-colors duration-500 ${themeClass}`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center invisible">
          {/* Logo oculta temporariamente por solicitação */}
          <div className="h-10 w-[180px]"></div>
        </Link>

        {isProductPage ? (
          <Button asChild variant="ghost" className="h-10 px-3 md:px-4 bg-transparent text-inherit hover:bg-black/10 hover:text-inherit rounded-full group transition-all duration-500">
            <Link href="/" className="flex items-center">
              <Home size={24} className="shrink-0" />
              <span className="hidden md:inline-block max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden whitespace-nowrap">
                Voltar para Home
              </span>
            </Link>
          </Button>
        ) : (
          <Button asChild variant="default" size="sm">
            <Link href="#contato">Fale Conosco</Link>
          </Button>
        )}
      </div>
    </motion.header>
  );
}


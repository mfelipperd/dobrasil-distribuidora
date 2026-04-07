"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  isProductPage?: boolean;
  themeClass?: string;
}

export default function Header({ 
  isProductPage = false,
  themeClass = "bg-primary/80 shadow-lg"
}: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-500 ${themeClass}`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80 duration-300">
          <Image 
            src="/images/DOBRASIL - original.png" 
            alt="DO Brasil" 
            width={240} 
            height={80} 
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {isProductPage ? (
          <Button asChild variant="ghost" className="h-14 px-4 text-white hover:bg-white/10 rounded-xl group transition-all duration-500">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="shrink-0 !w-8 !h-8" />
              <span className="hidden md:inline-block max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden whitespace-nowrap text-base font-medium">
                Voltar para Home
              </span>
            </Link>
          </Button>
        ) : (
          <Button asChild variant="cream" size="sm" className="rounded-full">
            <Link href="#contato">Fale Conosco</Link>
          </Button>
        )}
      </div>
    </motion.header>
  );
}


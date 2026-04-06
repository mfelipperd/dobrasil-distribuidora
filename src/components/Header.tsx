"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F2E8D5]/90 backdrop-blur-md border-b border-[#7B3F21]/10"
    >
      <div className="section-container h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif text-[#7B3F21] tracking-tight font-bold">
          DO BRASIL
        </Link>

        <Button href="#contato" variant="primary" size="sm">
          Fale Conosco
        </Button>
      </div>
    </motion.header>
  );
}

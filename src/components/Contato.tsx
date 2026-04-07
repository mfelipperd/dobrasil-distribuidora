"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/SectionHeader";

const contactItems = [
  { icon: <Phone size={17} />, text: "+55 91 91234-5678" },
  { icon: <Mail size={17} />, text: "contato@dobrasil.com.br" },
  { icon: <MapPin size={17} />, text: "Belém, PA — Brasil" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true },
});

export default function Contato() {
  return (
    <section id="contato" className="py-16 lg:py-36 bg-primary">

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">


          {/* Left: Copy */}
          <div>
            <SectionHeader
              label="Vamos conversar"
              title="Pronto para levar o sabor premium ao seu negócio?"
              variant="dark"
              center={false}
            />
            <motion.p {...fadeUp(0.2)} className="text-base text-background/60 font-sans font-light leading-relaxed mb-12">
              Entre em contato e solicite o catálogo completo, amostras gratuitas ou inicie uma parceria. Respondemos em até 24 horas.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-col gap-6 mb-12">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-background/70">
                  <div className="text-background/50 shrink-0 w-9 h-9 flex items-center justify-center bg-background/10 rounded-full">{item.icon}</div>
                  <span className="font-sans text-base">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="flex gap-4">
              <a href="#" aria-label="Instagram" className="p-3 rounded-full bg-background/10 text-background/60 hover:bg-background/20 hover:text-background transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-3 rounded-full bg-background/10 text-background/60 hover:bg-background/20 hover:text-background transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div {...fadeUp(0.25)}>
            <Card className="bg-background/5 border-background/10 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
              <h3 className="text-xl font-serif text-background mb-7">Envie uma mensagem</h3>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Nome" placeholder="Seu nome" type="text" />
                  <FormField label="Empresa" placeholder="Nome da empresa" type="text" />
                </div>
                <FormField label="E-mail" placeholder="seu@email.com" type="email" />
                <div>
                  <label className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-background/40 block mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Conte-nos sobre seu negócio e o que precisa..."
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/25 focus-visible:border-background/50 focus-visible:ring-background/50"
                  />
                </div>
                <Button type="submit" variant="cream" className="w-full mt-1">
                  Enviar mensagem
                  <Send size={15} className="ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <div>
      <label className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-background/40 block mb-2">
        {label}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        className="bg-background/10 border-background/20 text-background placeholder:text-background/25 focus-visible:border-background/50 focus-visible:ring-background/50"
      />
    </div>
  );
}

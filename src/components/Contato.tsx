"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
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
    <section id="contato" className="py-28 bg-[#7B3F21]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Copy */}
          <div>
            <SectionHeader
              label="Vamos conversar"
              title="Pronto para levar o sabor premium ao seu negócio?"
              dark
              center={false}
            />
            <motion.p {...fadeUp(0.2)} className="text-base text-[#F2E8D5]/60 font-sans font-light leading-relaxed mb-12">
              Entre em contato e solicite o catálogo completo, amostras gratuitas ou inicie uma parceria. Respondemos em até 24 horas.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-col gap-6 mb-12">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-[#F2E8D5]/70">
                  <div className="text-[#F2E8D5]/50 shrink-0 w-9 h-9 flex items-center justify-center bg-[#F2E8D5]/10 rounded-full">{item.icon}</div>
                  <span className="font-sans text-base">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="flex gap-4">
              <a href="#" aria-label="Instagram" className="p-3 rounded-full bg-[#F2E8D5]/10 text-[#F2E8D5]/60 hover:bg-[#F2E8D5]/20 hover:text-[#F2E8D5] transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-3 rounded-full bg-[#F2E8D5]/10 text-[#F2E8D5]/60 hover:bg-[#F2E8D5]/20 hover:text-[#F2E8D5] transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div {...fadeUp(0.25)}>
            <Card variant="dark" hover={false}>
              <h3 className="text-xl font-serif text-[#F2E8D5] mb-7">Envie uma mensagem</h3>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Nome" placeholder="Seu nome" type="text" />
                  <FormField label="Empresa" placeholder="Nome da empresa" type="text" />
                </div>
                <FormField label="E-mail" placeholder="seu@email.com" type="email" />
                <div>
                  <label className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#F2E8D5]/40 block mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte-nos sobre seu negócio e o que precisa..."
                    className="w-full bg-[#F2E8D5]/10 border border-[#F2E8D5]/20 rounded-xl py-4 px-5 text-[#F2E8D5] placeholder-[#F2E8D5]/25 focus:outline-none focus:border-[#F2E8D5]/50 transition-all font-sans text-sm resize-none"
                  />
                </div>
                <Button type="submit" variant="cream" fullWidth icon={<Send size={15} />} className="mt-1">
                  Enviar mensagem
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
      <label className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#F2E8D5]/40 block mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#F2E8D5]/10 border border-[#F2E8D5]/20 rounded-xl py-4 px-5 text-[#F2E8D5] placeholder-[#F2E8D5]/25 focus:outline-none focus:border-[#F2E8D5]/50 transition-all font-sans text-sm"
      />
    </div>
  );
}

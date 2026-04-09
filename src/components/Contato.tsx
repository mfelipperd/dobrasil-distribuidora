"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { InfoPopover } from "./ui/InfoPopover";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";

const contactItems = [
  { 
    icon: <Phone size={17} />, 
    text: "+55 91 91234-5678",
    popover: "WhatsApp em atualização. Por favor, utilize o formulário ao lado para falar com um consultor."
  },
  { icon: <Mail size={17} />, text: "contato@dobrasil.com.br" },
  { icon: <MapPin size={17} />, text: "Belém, PA — Brasil" },
];

export default function Contato() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [loadTime] = useState(Date.now()); // Para cálculo de tempo de preenchimento

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome") as string,
      empresa: formData.get("empresa") as string,
      email: formData.get("email") as string,
      mensagem: formData.get("mensagem") as string,
      hp_field: formData.get("hp_field") as string, // Honeypot
      loadTime, // Tempo de carga da página
    };

    try {
      const response = await submitContactForm(data);

      if (response.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-16 lg:py-36 bg-primary scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Vamos conversar"
              title="Pronto para levar o sabor premium ao seu negócio?"
              variant="dark"
              center={false}
            />
            <p className="text-base text-background/60 font-sans font-light leading-relaxed mb-12 max-w-lg">
              Inicie sua parceria premium e receba atendimento personalizado de nossa equipe de consultoria logística. Respondemos em até 24 horas.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-background/70 group">
                  {item.popover ? (
                    <InfoPopover message={item.popover} className="w-full">
                      <div className="flex items-center gap-5 cursor-pointer">
                        <div className="text-background/50 shrink-0 w-10 h-10 flex items-center justify-center bg-background/10 rounded-full group-hover:bg-background/20 transition-colors">{item.icon}</div>
                        <span className="font-sans text-base">{item.text}</span>
                      </div>
                    </InfoPopover>
                  ) : (
                    <>
                      <div className="text-background/50 shrink-0 w-10 h-10 flex items-center justify-center bg-background/10 rounded-full group-hover:bg-background/20 transition-colors">{item.icon}</div>
                      <span className="font-sans text-base">{item.text}</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <InfoPopover message="Instagram em atualização. Em breve disponibilizaremos nosso feed exclusivo.">
                <div aria-label="Instagram" className="p-3 rounded-full bg-background/10 text-background/60 hover:bg-background/20 hover:text-background transition-all duration-300 cursor-pointer">
                  <Instagram size={20} />
                </div>
              </InfoPopover>
              <InfoPopover message="LinkedIn em atualização. Siga-nos em breve para novidades corporativas.">
                <div aria-label="LinkedIn" className="p-3 rounded-full bg-background/10 text-background/60 hover:bg-background/20 hover:text-background transition-all duration-300 cursor-pointer">
                  <Linkedin size={20} />
                </div>
              </InfoPopover>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background/5 border-background/10 p-8 rounded-4xl backdrop-blur-sm shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 size={64} className="text-[#E6D5B8] mb-6 animate-bounce" />
                    <h3 className="text-2xl font-serif text-background mb-3">Mensagem enviada!</h3>
                    <p className="text-background/60 mb-8 max-w-xs">
                      Obrigado pelo interesse. Nossa equipe entrará em contato em breve.
                    </p>
                    <Button onClick={() => setStatus("idle")} variant="cream" className="px-10">
                      Enviar nova mensagem
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h3 className="text-xl font-serif text-background mb-7">Envie uma mensagem</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField label="Nome" name="nome" placeholder="Seu nome" type="text" required />
                        <FormField label="Empresa" name="empresa" placeholder="Nome da empresa" type="text" required />
                      </div>
                      <FormField label="E-mail" name="email" placeholder="seu@email.com" type="email" required />
                      <div>
                        <label className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-background/40 block mb-2">
                          Mensagem
                        </label>
                        <Textarea
                          name="mensagem"
                          required
                          placeholder="Conte-nos sobre seu negócio e o que precisa..."
                          className="bg-background/10 border-background/20 text-background placeholder:text-background/25 focus-visible:border-background/50 focus-visible:ring-background/50 min-h-[120px] rounded-2xl p-4"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        variant="cream" 
                        className="w-full mt-1 h-14 rounded-2xl text-lg font-bold group"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <>Enviando... <Loader2 size={18} className="ml-2 animate-spin" /></>
                        ) : (
                          <>Enviar mensagem <Send size={15} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                        )}
                      </Button>

                      {status === "error" && (
                        <div className="mt-4 flex items-center gap-2 text-red-300 text-sm justify-center">
                          <AlertCircle size={16} /> Houve um erro ao enviar. Tente novamente mais tarde.
                        </div>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
}

function FormField({ label, name, placeholder, type, required }: FormFieldProps) {
  return (
    <div>
      <label className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-background/40 block mb-2">
        {label}
      </label>
      <Input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-background/10 border-background/20 text-background placeholder:text-background/25 focus-visible:border-background/50 focus-visible:ring-background/50 h-14 rounded-2xl px-5"
      />
    </div>
  );
}


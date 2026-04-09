"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoPopoverProps {
  children: React.ReactNode;
  message?: string;
  className?: string;
}

export function InfoPopover({ 
  children, 
  message = "Canais de comunicação em atualização. Por favor, utilize o formulário de contato abaixo.",
  className 
}: InfoPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const togglePopover = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("relative inline-block", className)} ref={popoverRef}>
      <div onClick={togglePopover} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-primary/5 text-center"
          >
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-white" />
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-1">
                <AlertCircle size={18} />
              </div>
              <p className="text-xs font-sans font-medium text-primary leading-relaxed">
                {message}
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-2 text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors flex items-center gap-1"
              >
                <X size={10} /> Fechar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

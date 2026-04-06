"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  dark?: boolean;
  center?: boolean;
}

export function SectionHeader({ label, title, dark = false, center = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <p className={`text-xs font-sans font-bold uppercase tracking-[0.25em] mb-5 ${dark ? "text-[#F2E8D5]/45" : "text-[#7B3F21]/45"}`}>
        {label}
      </p>
      <h2
        className={`text-4xl md:text-5xl font-serif leading-tight ${dark ? "text-[#F2E8D5]" : "text-[#7B3F21]"}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  variant?: "default" | "dark";
  center?: boolean;
}

export function SectionHeader({ label, title, variant = "default", center = true }: SectionHeaderProps) {
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={cn("mb-16", center ? "text-center" : "text-left")}
    >
      <p className={cn(
        "text-xs font-sans font-bold uppercase tracking-[0.25em] mb-5",
        isDark ? "text-background/50" : "text-primary/50"
      )}>
        {label}
      </p>
      <h2
        className={cn(
          "text-4xl md:text-5xl font-serif leading-tight",
          isDark ? "text-background" : "text-primary"
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </motion.div>
  );
}

import { ReactNode } from "react";

type CardVariant = "default" | "dark";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white/55 border border-[#7B3F21]/8 hover:border-[#7B3F21]/18 hover:shadow-lg",
  dark:
    "bg-[#F2E8D5]/10 border border-[#F2E8D5]/10 hover:border-[#F2E8D5]/25",
};

export default function Card({
  children,
  variant = "default",
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-10 transition-all duration-300 ${variantStyles[variant]} ${hover ? "cursor-default" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

interface CardIconProps {
  children: ReactNode;
  color?: string;
  bg?: string;
}

export function CardIcon({ children, color = "text-[#7B3F21]", bg = "bg-[#7B3F21]/10" }: CardIconProps) {
  return (
    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${bg} ${color} mb-7 shrink-0`}>
      {children}
    </div>
  );
}

interface CardLabelProps {
  children: ReactNode;
  dark?: boolean;
}

export function CardLabel({ children, dark = false }: CardLabelProps) {
  return (
    <p className={`text-xs font-sans font-bold uppercase tracking-[0.2em] mb-3 ${dark ? "text-[#F2E8D5]/40" : "text-[#7B3F21]/40"}`}>
      {children}
    </p>
  );
}

interface CardTitleProps {
  children: ReactNode;
  dark?: boolean;
}

export function CardTitle({ children, dark = false }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-serif mb-4 leading-snug ${dark ? "text-[#F2E8D5]" : "text-[#7B3F21]"}`}>
      {children}
    </h3>
  );
}

interface CardBodyProps {
  children: ReactNode;
  dark?: boolean;
}

export function CardBody({ children, dark = false }: CardBodyProps) {
  return (
    <p className={`text-sm font-sans font-light leading-relaxed ${dark ? "text-[#F2E8D5]/60" : "text-[#7B3F21]/60"}`}>
      {children}
    </p>
  );
}

interface CardDividerProps {
  dark?: boolean;
}

export function CardDivider({ dark = false }: CardDividerProps) {
  return <hr className={`my-7 border-0 border-t ${dark ? "border-[#F2E8D5]/10" : "border-[#7B3F21]/8"}`} />;
}

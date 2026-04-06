import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "cream";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#7B3F21] text-[#F2E8D5] border-2 border-[#7B3F21] hover:bg-[#5e2e17] hover:border-[#5e2e17] shadow-md shadow-[#7B3F21]/20",
  outline:
    "bg-transparent text-[#7B3F21] border-2 border-[#7B3F21] hover:bg-[#7B3F21] hover:text-[#F2E8D5]",
  ghost:
    "bg-[#F2E8D5]/15 text-[#F2E8D5] border-2 border-[#F2E8D5]/20 hover:bg-[#F2E8D5]/25 hover:border-[#F2E8D5]/40",
  cream:
    "bg-[#F2E8D5] text-[#7B3F21] border-2 border-[#F2E8D5] hover:bg-white hover:border-white shadow-md",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-7 py-3.5 text-xs tracking-[0.12em]",
  md: "px-10 py-[1.125rem] text-sm tracking-[0.12em]",
  lg: "px-14 py-[1.375rem] text-base tracking-[0.12em]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  icon,
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full font-sans font-semibold transition-all duration-300 active:scale-95";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}

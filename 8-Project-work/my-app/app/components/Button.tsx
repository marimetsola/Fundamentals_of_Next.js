"use client";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg text-xl font-semibold",
        "bg-accent text-white",
        "transition-all duration-200",
        "hover:bg-accent-hover",
        "active:scale-95",
        "border border-transparent",
        "hover:border-accent-muted2",
        "cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-accent",
        className,
      )}
    >
      {children}
    </button>
  );
}

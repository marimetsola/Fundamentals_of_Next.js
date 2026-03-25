"use client";

import { cn } from "@/lib/utils";

type OperationButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
};

export default function OperationButton({
  children,
  onClick,
  active = false,
  className,
}: OperationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg text-xl font-semibold",
        "transition-all duration-200",
        "border cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-accent",
        "active:scale-95",
        !active && [
          "bg-accent text-white",
          "hover:bg-accent-hover",
          "border-transparent",
          "hover:border-accent-muted2",
        ],
        active && ["bg-accent-muted text-foreground", "border-accent-muted2"],
        className,
      )}
    >
      {children}
    </button>
  );
}

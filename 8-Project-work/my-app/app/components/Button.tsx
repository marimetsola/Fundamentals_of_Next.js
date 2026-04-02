"use client";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  active = false,
  disabled = false,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-4 py-2 rounded-lg text-xl font-semibold",
        "transition-all duration-200",
        "border",
        "focus:outline-none focus:ring-2 focus:ring-accent",
        "active:scale-95",

        // disabled
        disabled && [
          "bg-gray-400 text-gray-200",
          "cursor-not-allowed",
          "hover:bg-gray-400",
          "hover:border-transparent",
        ],

        // normal
        !disabled &&
          !active && [
            "bg-accent text-white",
            "[text-shadow:1px_1px_0_rgba(0,0,0,0.5),-1px_1px_0_rgba(0,0,0,0.5),1px_-1px_0_rgba(0,0,0,0.5),-1px_-1px_0_rgba(0,0,0,0.5)]", //outline
            "hover:bg-accent-hover",
            "border-transparent",
            "hover:border-accent-muted2",
            "cursor-pointer",
          ],

        // active
        !disabled &&
          active && [
            "bg-accent-muted text-foreground",
            "border-accent-muted2",
            "cursor-pointer",
          ],

        className,
      )}
    >
      {children}
    </button>
  );
}

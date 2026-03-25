"use client";

import { cn } from "@/lib/utils";

type H2Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H2({ children, className }: H2Props) {
  return (
    <h2 className={cn("text-[1.5rem] font-semibold mt-4 mb-4", className)}>
      {children}
    </h2>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

  const headerStyles = cn(
    "sticky top-0 z-50",
    "flex w-full items-center justify-between",
    "h-16 px-20 border-b",
    "bg-accent-muted",
  );

  const navLinkBase =
    "px-3 py-1 rounded-full transition-colors hover:bg-accent-muted2";

  // create a classname; add underline if we're on the href
  const getNavLinkStyles = (href: string) =>
    cn(navLinkBase, pathname === href && "underline");

  return (
    <header className={headerStyles}>
      <div className="text-lg font-semibold">MyApp</div>
      <nav className="flex items-center gap-6">
        <Link href="/" className={getNavLinkStyles("/")}>
          Home
        </Link>
        <Link href="/calculator" className={getNavLinkStyles("/calculator")}>
          Calculator
        </Link>
        <Link href="/editor" className={getNavLinkStyles("/editor")}>
          Editor
        </Link>
        <Link href="/quiz" className={getNavLinkStyles("/quiz")}>
          Quiz
        </Link>
      </nav>
    </header>
  );
}

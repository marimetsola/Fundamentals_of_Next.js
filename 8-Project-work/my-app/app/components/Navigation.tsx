import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between h-16 px-20 border-b bg-background">
      <div className="text-lg font-semibold">MyApp</div>
      <nav className="flex items-center justify-center gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/calculator" className="hover:underline">
          Calculator
        </Link>
        <Link href="/editor" className="hover:underline">
          Editor
        </Link>
        <Link href="/quiz" className="hover:underline">
          Quiz
        </Link>
      </nav>
    </header>
  );
}

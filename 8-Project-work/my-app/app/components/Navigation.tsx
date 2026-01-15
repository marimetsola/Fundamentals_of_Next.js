import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex h-[4rem] w-full items-center justify-between px-20 border-b">
            <div className="text-lg font-semibold">
                MyApp
            </div>

            <div className="flex items-center justify-center gap-6">
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
            </div>
        </nav>
    );
}

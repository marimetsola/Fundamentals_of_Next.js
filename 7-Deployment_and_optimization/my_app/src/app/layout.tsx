import type { Metadata } from "next";
import { Geist, Geist_Mono, Nova_Square } from "next/font/google";
import Navigation from "./components/Navigation";
import Analytics from "./components/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const novaSquare = Nova_Square({
  weight: "400",
  variable: "--font-nova-square",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mari's fabulous app",
  description: "Next.js practice app by Mari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${novaSquare.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

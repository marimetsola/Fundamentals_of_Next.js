"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <Link href="/about">Go to About Page</Link>
      <h1>Mari's fabulous app 👸</h1>
      <p>I have no idea what this app is about. I'm sure it will be great!</p>
    </div>
  );
}

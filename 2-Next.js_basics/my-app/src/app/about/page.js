"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1>About this course</h1>
      <p>
        This is a fully virtual course that goes through all the important
        aspects of Next.js.
      </p>
    </div>
  );
}

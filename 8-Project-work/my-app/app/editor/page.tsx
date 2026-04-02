"use client";

import { useState } from "react";
import Button from "@/app/components/Button";
import H1 from "@/app/components/H1";

export default function Editor() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const letters = text.length;

  return (
    <div className="p-6">
      <main className="max-w-3xl mx-auto flex flex-col gap-4">
        <H1>Editor</H1>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="border p-3 rounded-md bg-accent-muted resize-none focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Type something..."
        />

        {/* Words and letters */}
        <div className="flex justify-between text-sm">
          <span>Words: {words}</span>
          <span>Letters: {letters}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button onClick={() => setText(text.toUpperCase())}>UPPERCASE</Button>

          <Button onClick={() => setText(text.toLowerCase())}>lowercase</Button>

          <Button
            onClick={() =>
              setText(
                text
                  .trim() // poistaa alusta ja lopusta
                  .replace(/\s+/g, " "), // muuttaa useat välilyönnit yhdeksi
              )
            }
          >
            Clean Text
          </Button>

          <Button onClick={() => setText("")}>Clear Text</Button>
        </div>
      </main>
    </div>
  );
}

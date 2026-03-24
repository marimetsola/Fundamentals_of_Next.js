"use client";

import { useState } from "react";
import { add, subtract, multiply, divide } from "@/lib/math";
import Button from "@/app/components/Button";

export default function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState<number | string | null>(null);
  const [activeOp, setActiveOp] = useState<string | null>(null);

  const buttonStyle = (op: string) =>
    activeOp === op
      ? "bg-accent-muted text-foreground hover:bg-accent-muted"
      : "";

  return (
    <div className="p-6 flex flex-col gap-4 max-w-sm mx-auto">
      {/* Input 1 */}
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        className="border p-2 rounded-md bg-accent-muted"
      />

      {/* Buttons */}
      <div className="flex justify-between gap-2">
        <Button
          className={buttonStyle("+")}
          onClick={() => {
            setActiveOp("+");
            setResult(add(a, b));
          }}
        >
          +
        </Button>

        <Button
          className={buttonStyle("-")}
          onClick={() => {
            setActiveOp("-");
            setResult(subtract(a, b));
          }}
        >
          -
        </Button>

        <Button
          className={buttonStyle("×")}
          onClick={() => {
            setActiveOp("×");
            setResult(multiply(a, b));
          }}
        >
          ×
        </Button>

        <Button
          className={buttonStyle("÷")}
          onClick={() => {
            setActiveOp("÷");
            setResult(divide(a, b));
          }}
        >
          ÷
        </Button>
      </div>

      {/* Input 2 */}
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        className="border p-2 rounded-md bg-accent-muted"
      />

      {/* Result */}
      <div className="text-lg font-semibold text-center mt-2">
        {result !== null &&
          (typeof result === "number" ? `= ${result}` : result)}
      </div>
    </div>
  );
}

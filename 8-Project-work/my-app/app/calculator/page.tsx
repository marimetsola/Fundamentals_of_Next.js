"use client";

import { useEffect, useState } from "react";
import { add, subtract, multiply, divide } from "@/lib/math";
import Button from "@/app/components/Button";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<number | string | null>(null);
  const [activeOp, setActiveOp] = useState<string | null>("+");

  const buttonStyle = (op: string) =>
    activeOp === op
      ? "bg-accent-muted text-foreground hover:bg-accent-muted"
      : "";

  // 🔹 Automaattinen laskenta
  useEffect(() => {
    if (!activeOp || a === "" || b === "") {
      setResult(null);
      return;
    }

    const numA = Number(a);
    const numB = Number(b);

    if (activeOp === "+") setResult(add(numA, numB));
    else if (activeOp === "-") setResult(subtract(numA, numB));
    else if (activeOp === "×") setResult(multiply(numA, numB));
    else if (activeOp === "÷") setResult(divide(numA, numB));
  }, [a, b, activeOp]);

  // 🔹 Display-logiikka
  const display =
    activeOp && (a === "" || b === "")
      ? "Enter values"
      : result === null
        ? ""
        : typeof result === "number"
          ? `= ${result}`
          : result;

  return (
    <div className="p-6 flex flex-col gap-4 max-w-sm mx-auto">
      {/* Input 1 */}
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border p-2 rounded-md bg-accent-muted"
      />

      {/* Buttons */}
      <div className="flex justify-between gap-2">
        <Button onClick={() => setActiveOp("+")} className={buttonStyle("+")}>
          +
        </Button>

        <Button onClick={() => setActiveOp("-")} className={buttonStyle("-")}>
          -
        </Button>

        <Button onClick={() => setActiveOp("×")} className={buttonStyle("×")}>
          ×
        </Button>

        <Button onClick={() => setActiveOp("÷")} className={buttonStyle("÷")}>
          ÷
        </Button>
      </div>

      {/* Input 2 */}
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="border p-2 rounded-md bg-accent-muted"
      />

      {/* Result */}
      <div className="text-lg font-semibold text-center mt-2">
        {display}
      </div>
    </div>
  );
}
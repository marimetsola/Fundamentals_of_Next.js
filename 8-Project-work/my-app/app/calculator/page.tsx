"use client";

import { useState } from "react";
import { add, subtract, multiply, divide } from "@/lib/math";
import Button from "@/app/components/Button";

type Operation = "+" | "-" | "×" | "÷";

export default function Calculator() {
  const [a, setA] = useState("0");
  const [b, setB] = useState("0");
  const [activeOp, setActiveOp] = useState<Operation | null>("+");

  let result: number | string | null = 0;

  // Operations are mapped symbol to function
  const operations: Record<
    Operation,
    (a: number, b: number) => number | string
  > = {
    "+": add,
    "-": subtract,
    "×": multiply,
    "÷": divide,
  };

  if (a === "" || b === "") {
    result = "Enter values";
  } else if (activeOp) {
    const fn = operations[activeOp];
    result = fn(Number(a), Number(b));
  }

  return (
    <div className="p-6 flex flex-col gap-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold text-center">Calculator</h1>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border p-2 rounded-md bg-accent-muted"
      />

      <div className="flex justify-between gap-2">
        <Button onClick={() => setActiveOp("+")} active={activeOp === "+"}>
          +
        </Button>

        <Button onClick={() => setActiveOp("-")} active={activeOp === "-"}>
          -
        </Button>

        <Button onClick={() => setActiveOp("×")} active={activeOp === "×"}>
          ×
        </Button>

        <Button onClick={() => setActiveOp("÷")} active={activeOp === "÷"}>
          ÷
        </Button>
      </div>

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="border p-2 rounded-md bg-accent-muted"
      />

      <div className="text-lg font-semibold text-center mt-2">
        {result !== null &&
          (typeof result === "number" ? `= ${result}` : result)}
      </div>
    </div>
  );
}

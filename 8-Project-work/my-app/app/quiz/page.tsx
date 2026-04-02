"use client";

import { useState } from "react";
import H1 from "@/app/components/H1";
import Button from "@/app/components/Button";
import { quizData } from "@/lib/quizData";

export default function Quiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    quizData.map(() => null),
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;

    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const correctCount = answers.reduce<number>((count, answer, index) => {
    if (answer === null) return count;
    return answer === quizData[index].correctIndex ? count + 1 : count;
  }, 0);

  return (
    <div className="p-6">
      <main className="max-w-3xl mx-auto flex flex-col gap-3">
        <H1>Quiz</H1>

        {quizData.map((item, questionIndex) => (
          <section
            key={item.question}
            className="rounded-md border border-accent-muted2 bg-accent-muted p-3"
          >
            <h2 className="mt-0 mb-2 text-[1.25rem] font-semibold">
              {questionIndex + 1}. {item.question}
            </h2>

            <div className="flex flex-col gap-1.5">
              {item.options.map((option, optionIndex) => {
                const isSelected = answers[questionIndex] === optionIndex;
                const isCorrect = item.correctIndex === optionIndex;
                const showSelectedCorrect =
                  submitted && isSelected && isCorrect;
                const showSelectedIncorrect =
                  submitted && isSelected && !isCorrect;

                return (
                  <label
                    key={option}
                    className={`rounded-md border p-2.5 transition-colors ${
                      submitted ? "cursor-default" : "cursor-pointer"
                    } ${
                      showSelectedCorrect
                        ? "border-green-600 bg-green-100 text-black"
                        : showSelectedIncorrect
                          ? "border-red-600 bg-red-100 text-black"
                          : isSelected
                            ? "border-accent bg-accent-muted2"
                            : "border-accent-muted2 bg-background"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      checked={isSelected}
                      onChange={() => handleSelect(questionIndex, optionIndex)}
                      disabled={submitted}
                      className="mr-2"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </section>
        ))}

        <div className="flex items-center gap-2">
          <Button onClick={() => setSubmitted(true)} disabled={submitted}>
            Submit
          </Button>

          <Button
            onClick={() => {
              setAnswers(quizData.map(() => null));
              setSubmitted(false);
            }}
          >
            Reset
          </Button>

          {submitted && (
            <p className="ml-auto text-xl font-bold">
              Score: {correctCount} / {quizData.length}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

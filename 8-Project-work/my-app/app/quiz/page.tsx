"use client";

import { useEffect, useState } from "react";
import H1 from "@/app/components/H1";
import Button from "@/app/components/Button";

type PublicQuestion = {
  question: string;
  options: string[];
};

type QuizResult = {
  selected: number | null;
  correct: boolean;
};

export default function Quiz() {
  const [quizQuestions, setQuizQuestions] = useState<PublicQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // fetch quiz data from api
  useEffect(() => {
    async function fetchQuiz() {
      try {
        const response = await fetch("/api/quiz");
        const data: PublicQuestion[] = await response.json();

        setQuizQuestions(data);
        setAnswers(data.map(() => null));
      } catch (error) {
        console.error("Failed to fetch quiz data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuiz();
  }, []);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // check the right answers from api
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      const data = await response.json();

      setResults(data.results);
      setScore(data.score);
      setTotal(data.total);
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to submit quiz:", error);
    }
  };

  const handleReset = () => {
    setAnswers(quizQuestions.map(() => null));
    setSubmitted(false);
    setResults([]);
    setScore(null);
    setTotal(null);
  };

  // show only header while loading the quiz data
  if (loading) {
    return (
      <div className="p-6">
        <main className="max-w-3xl mx-auto">
          <H1>Quiz</H1>
        </main>
      </div>
    );
  }

  return (
    <div className="p-6">
      <main className="max-w-3xl mx-auto flex flex-col gap-3">
        <H1>Quiz</H1>

        {/* map every quiz question in its own container */}
        {quizQuestions.map((item, questionIndex) => (
          <section
            key={item.question}
            className="rounded-md border border-accent-muted2 bg-accent-muted p-3"
          >
            <h2 className="mt-0 mb-2 text-[1.25rem] font-semibold">
              {questionIndex + 1}. {item.question}
            </h2>

            {/* map the options of a question */}
            <div className="flex flex-col gap-1.5">
              {item.options.map((option, optionIndex) => {
                const isSelected = answers[questionIndex] === optionIndex;

                let status: "default" | "selected" | "correct" | "incorrect" =
                  "default";

                if (submitted && isSelected) {
                  status = results[questionIndex]?.correct
                    ? "correct"
                    : "incorrect";
                } else if (isSelected) {
                  status = "selected";
                }

                // style of an option: base style gets styles added depending
                // on the questions status (not selected, selected, correct, incorrect)
                const baseStyle =
                  "rounded-md border p-2.5 transition-colors " +
                  (submitted ? "cursor-default" : "cursor-pointer");

                const statusStyle = {
                  default: "border-accent-muted2 bg-background",
                  selected: "border-accent bg-accent-mid text-white",
                  correct: "border-green-600 bg-green-100 text-black",
                  incorrect: "border-red-600 bg-red-100 text-black",
                };

                return (
                  <label
                    key={option}
                    className={`${baseStyle} ${statusStyle[status]}`}
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
          <Button
            onClick={handleSubmit}
            disabled={submitted || quizQuestions.length === 0}
          >
            Submit
          </Button>

          <Button onClick={handleReset}>Reset</Button>

          {submitted && score !== null && total !== null && (
            <p className="ml-auto text-xl font-bold">
              Score: {score} / {total}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

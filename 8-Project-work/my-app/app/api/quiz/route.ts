import { NextResponse } from "next/server";
import { quizData } from "@/lib/quizData";

export async function GET() {
  const publicQuestions = quizData.map(({ question, options }) => ({
    question,
    options,
  }));

  return NextResponse.json(publicQuestions);
}

export async function POST(request: Request) {
  const { answers } = await request.json();

  // basic validation
  if (!Array.isArray(answers)) {
    return Response.json({ error: "Invalid answers format" }, { status: 400 });
  }

  // build results, which answer is selected and whether it is correct or not
  const results = answers.map((answer: number | null, index: number) => {
    if (answer === null) {
      return {
        selected: null,
        correct: false,
      };
    }

    const correct = answer === quizData[index].correctIndex;

    return {
      selected: answer,
      correct,
    };
  });

  // calculate score
  const score = results.reduce((count: number, item) => {
    return item.correct ? count + 1 : count;
  }, 0);

  console.log("results", results);

  return Response.json({
    score,
    total: quizData.length,
    results,
  });
}

export type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const quizData: Question[] = [
  {
    question: "What is Next.js mainly used for?",
    options: [
      "Styling websites",
      "Building React-based web applications",
      "Managing databases",
    ],
    correctIndex: 1,
  },
  {
    question: "What does SSR stand for?",
    options: [
      "Server-Side Rendering",
      "Static Site Routing",
      "Simple State React",
    ],
    correctIndex: 0,
  },
  {
    question: "What is Tailwind CSS?",
    options: [
      "A JavaScript framework",
      "A utility-first CSS framework",
      "A database tool",
    ],
    correctIndex: 1,
  },
];
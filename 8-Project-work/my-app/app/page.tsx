import H1 from "@/app/components/H1";
import H2 from "@/app/components/H2";

export default function Home() {
  return (
    <div className="p-6">
      <main className="max-w-4xl mx-auto flex flex-col gap-4">
        <H1>Project web app</H1>

        <p>
          The project started off with a quick recap on JavaScript and React,
          followed by an overview of Next.js features. The course covered
          different styling methods such as CSS modules, global styles, inline
          styles, and Tailwind CSS, as well as API routes, Server-Side Rendering
          (SSR) and Static Site Generation (SSG), state management with Context
          API, different testing methods, and deployment on Vercel.
        </p>

        <p>
          This page represents the project work I created during the course,
          demonstrating the use of Tailwind CSS for consistent styling and
          reusable UI components such as buttons and headings. The application
          does not include a manual light/dark mode toggle, but it automatically
          follows the user’s system or browser theme using the
          prefers-color-scheme setting.
        </p>

        <p>The application includes the following pages:</p>

        <H2>Home</H2>

        <p>The home page. This one right here!</p>

        <H2>Calculator</H2>

        <p>
          The calculator allows the user to enter two values and select an
          operation (add, subtract, multiply, or divide). The calculation logic
          is separated into a utility file, and the result updates automatically
          based on the inputs and selected operation. The UI is styled with
          Tailwind CSS and uses a reusable Button component with an active
          state.
        </p>

        <H2>Editor</H2>

        <p>
          The editor allows the user to type text into a textarea and apply
          transformations such as converting text to uppercase or lowercase,
          clearing the text, and cleaning extra spaces. The number of words and
          characters is displayed and updates automatically as the user edits
          the text.
        </p>

        <H2>Quiz</H2>

        <p>
          The quiz allows the user to answer three multiple-choice questions and
          submit their answers to see the final score. After submission, the
          selected answers are marked as correct or incorrect, and the rest of
          the quiz is locked until it is reset. The questions are stored in a
          separate data file, and the selected answers are managed using state,
          with the result calculated based on the correct answers defined in the
          data.
        </p>
      </main>
    </div>
  );
}

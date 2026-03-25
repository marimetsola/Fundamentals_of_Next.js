import H1 from "@/app/components/H1";
import H2 from "@/app/components/H2";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-10">
      <main className="max-w-3xl mx-auto flex flex-col gap-4">
        <H1>Project web app</H1>

        <p>
          The project started off with a quick recap on JavaScript and React,
          followed by overview of Next.js&apos;s features. Different ways (CSS
          modules, global, inline, tailwind) to style Next.js apps were covered.
        </p>

        <p>The application includes the following pages:</p>

        <H2>Home</H2>

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

        <H2>Quiz</H2>
      </main>
    </div>
  );
}

import { render, screen } from "@testing-library/react";
import Greeting from "../app/components/Greeting";

describe("Greeting component", () => {
  it("renders greeting with the given name", () => {
    render(<Greeting name="Mari" />);

    expect(screen.getByText("Hello, Mari!")).toBeInTheDocument();
  });
});

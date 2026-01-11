import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home page", () => {
  it("renders the heading text", () => {
    render(<Home />);

    const heading = screen.getByText(/next\.js testing demo application!/i);

    expect(heading).toBeInTheDocument();
  });
});

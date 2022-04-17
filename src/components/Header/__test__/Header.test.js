import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  test("should render the title text", async () => {
    const title = "Test Title";
    render(<Header title={title} />);
    const headingElement = screen.getByText(new RegExp(title, "i"));
    expect(headingElement).toBeInTheDocument();
  });

  test("should render the title as heading", async () => {
    const title = "Test Title";
    render(<Header title={title} />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  test("shouldn't render 'Cats'", () => {
    const catElement = screen.queryByText(/cats/i);
    expect(catElement).not.toBeInTheDocument();
  });
});

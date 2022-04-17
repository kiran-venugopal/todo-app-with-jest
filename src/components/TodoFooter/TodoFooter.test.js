import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "./TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe("Todo Footer component.", () => {
  it("should render the todo footer", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphEl = screen.getByText(/5 tasks left/i);
    expect(paragraphEl).toBeInTheDocument();
  });
  test("should be visible", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphEl = screen.getByText(/5 tasks left/i);
    expect(paragraphEl).toBeVisible();
  });
});

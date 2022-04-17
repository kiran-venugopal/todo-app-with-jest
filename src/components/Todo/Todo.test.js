import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "./Todo";

const MockedTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTasks = (tasks = []) => {
  const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonEl = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputEl, {
      target: {
        value: task,
      },
    });
    fireEvent.click(buttonEl);
  });
};

describe("Todo", () => {
  it("should be able to add todo", () => {
    render(<MockedTodo />);
    addTasks(["go to grocery"]);
    const divElement = screen.getByText(/go to grocery/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should be able to add multiple todos", () => {
    render(<MockedTodo />);
    addTasks(["go to grocery", "go to gym", "water plants"]);
    const divElement = screen.getAllByTestId("todo");
    expect(divElement.length).toBe(3);
  });

  it("shouldn't have completed class", () => {
    render(<MockedTodo />);
    addTasks(["go to grocery"]);
    const divElement = screen.getByText("go to grocery");
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should have completed class when clicked", () => {
    render(<MockedTodo />);
    addTasks(["go to grocery"]);
    const divElement = screen.getByText("go to grocery");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});

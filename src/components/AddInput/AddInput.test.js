import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "./AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputEl).toBeVisible();
  });

  it("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputEl, { target: { value: "Go grocery shopping" } });
    expect(inputEl).toHaveValue("Go grocery shopping");
  });

  it("should have empty input when add buttion is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonEl = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputEl, { target: { value: "Go grocery shopping" } });
    fireEvent.click(buttonEl);
    expect(inputEl).toHaveValue("");
  });
});

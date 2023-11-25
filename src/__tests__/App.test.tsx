import { expect, describe, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.tsx";

describe("Test", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders correctly", () => {
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
  });

  it("should show todo Input", () => {
    const todoInput = screen.getByTestId("todo-input");
    expect(todoInput).toBeInTheDocument();
  });

  // it("should add todo item", () => {
  //   const button = screen.getByRole("button");
  //   const input = screen.getByRole("input");
  //   fireEvent.input(input, { target: { value: "todo" } });
  //   button.click();
  //   const todoText = screen.getByText("todo");

  //   expect(todoText).toBeInTheDocument();
  // });
});

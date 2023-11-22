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

  it("should show todos title", () => {
    const title = screen.getByText("Todo's");
    expect(title).toBeInTheDocument();
  });

  it("should show todo Input", () => {
    const todoInput = screen.getByTestId("todo-input");
    expect(todoInput).toBeInTheDocument();
  });

  it.skip("should add todo item", () => {
    const todoInput = screen.getByTestId("todo-input");
    const button = screen.getByRole("button");
    const input = screen.getByRole("input");
    input.innerText = "todo";
    //const dispatch = vi.fn()

    button.click();
    expect(todoInput).toBeInTheDocument();
  });
});

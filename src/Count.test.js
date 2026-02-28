import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter App - Advanced Testing", () => {

  test("renders with initial value 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("increments correctly", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Increment"));
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });

  test("decrements correctly", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Decrement"));
    expect(screen.getByTestId("count")).toHaveTextContent("-1");
  });

  test("restart resets after multiple operations", async () => {
    render(<Counter />);
    const inc = screen.getByText("Increment");
    const restart = screen.getByText("Restart");

    await userEvent.click(inc);
    await userEvent.click(inc);
    await userEvent.click(inc);

    expect(screen.getByTestId("count")).toHaveTextContent("3");

    await userEvent.click(restart);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("switch signs works correctly", async () => {
    render(<Counter />);
    const inc = screen.getByText("Increment");
    const switchBtn = screen.getByText("Switch Signs");

    await userEvent.click(inc);
    await userEvent.click(inc);

    await userEvent.click(switchBtn);
    expect(screen.getByTestId("count")).toHaveTextContent("-2");
  });

  // 🔥 EDGE CASES

  test("switch sign of 0 remains 0", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Switch Signs"));
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("handles 100 increments correctly", async () => {
    render(<Counter />);
    const inc = screen.getByText("Increment");

    for (let i = 0; i < 100; i++) {
      await userEvent.click(inc);
    }

    expect(screen.getByTestId("count")).toHaveTextContent("100");
  });

  // 🔥 MOCK CONSOLE LOG TEST

  test("logs message when increment is clicked", async () => {
    const consoleSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    render(<Counter />);
    await userEvent.click(screen.getByText("Increment"));

    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

});
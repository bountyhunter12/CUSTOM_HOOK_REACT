import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Counter component", () => {
  render(<App />);
  const count = screen.getByTestId("count");
  expect(count).toBeInTheDocument();
});
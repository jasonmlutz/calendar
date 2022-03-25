import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import MonthDisplay, { generateMonth } from "./MonthDisplay";

test("generateMonth: properly assigns month", () => {
  expect(generateMonth(0)).toEqual({ index: 0, name: "January" });
  expect(generateMonth(8)).toEqual({ index: 8, name: "September" });
});

test("generateMonth: properly handles overages", () => {
  expect(generateMonth(12)).toEqual({ index: 0, name: "January" });
  expect(generateMonth(13)).toEqual({ index: 1, name: "February" });
});

test("generateMonth: handles negative inputs", () => {
  expect(generateMonth(-1)).toEqual({ index: 11, name: "December" });
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MonthDisplay />, div);
});

it("renders January on initial load", () => {
  render(<MonthDisplay />);
  const linkElement = screen.getByText(/january/i);
  expect(linkElement).toBeInTheDocument();
});

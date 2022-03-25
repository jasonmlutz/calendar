import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App, { generateMonth } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("renders calendar app title", () => {
  render(<App />);
  const linkElement = screen.getByText(/calendar app/i);
  expect(linkElement).toBeInTheDocument();
});

test("generateMonth: properly assigns month", () => {
  expect(generateMonth(0)).toEqual({ index: 0, name: "January" });
  expect(generateMonth(8)).toEqual({ index: 8, name: "September" });
});

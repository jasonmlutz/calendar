import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("renders calendar app title", () => {
  render(<App />);
  const linkElement = screen.getByText(/calendar app/i);
  expect(linkElement).toBeInTheDocument();
});

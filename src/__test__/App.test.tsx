import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders calendar app title", () => {
  render(<App />);
  const linkElement = screen.getByText(/calendar app/i);
  expect(linkElement).toBeInTheDocument();
});

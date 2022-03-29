// src/components/__tests__/MonthNav.test.tsx

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";

import CalendarHeader from "../CalendarHeader";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders initial state correctly", () => {
  act(() => {
    render(<CalendarHeader />, container);
  });
  let monthName = screen.getByTestId("current-month-name");
  expect(monthName.textContent).toBe("January");
});

it("correctly increments to next month", () => {
  act(() => {
    render(<CalendarHeader />, container);
  });
  // grab the right-nav button
  const rightButton = screen.getByRole("button", { name: /next/i });
  let monthName;
  monthName = screen.getByTestId("current-month-name");
  expect(monthName.textContent).toBe("January");
  act(() => {
    rightButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  monthName = screen.getByTestId("current-month-name");
  expect(monthName.textContent).toBe("February");
});

it("correctly increments to previous month", () => {
  act(() => {
    render(<CalendarHeader />, container);
  });
  // grab the left-nav button
  const leftButton = screen.getByRole("button", { name: /previous/i });
  let monthName;
  monthName = screen.getByTestId("current-month-name");
  expect(monthName.textContent).toBe("January");
  act(() => {
    leftButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  monthName = screen.getByTestId("current-month-name");
  expect(monthName.textContent).toBe("December");
});

// src/components/__tests__/MonthNav.test.tsx

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import MonthDisplay from "../MonthDisplay";

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
    render(<MonthDisplay />, container);
  });
  expect(container.textContent).toBe("January");
});

it("correctly increments to next month", () => {
  act(() => {
    render(<MonthDisplay />, container);
  });
  // grab the right-nav button
  const rightButton = document.querySelector("#Current-month-right-nav > svg");
  expect(container.textContent).toBe("January");
  act(() => {
    rightButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(container.textContent).toBe("February");
});

it("correctly increments to previous month", () => {
  act(() => {
    render(<MonthDisplay />, container);
  });
  // grab the left-nav button
  const leftButton = document.querySelector("#Current-month-left-nav > svg");
  expect(container.textContent).toBe("January");
  act(() => {
    leftButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(container.textContent).toBe("December");
});

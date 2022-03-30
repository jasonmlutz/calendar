import renderer from "react-test-renderer";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import DayNameDisplay from "../DayNameDisplay";

it("renders correctly", () => {
  const tree = renderer.create(<DayNameDisplay />).toJSON();
  expect(tree).toMatchSnapshot();
});

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

it("contains the days of the week", () => {
  act(() => {
    render(<DayNameDisplay />, container);
  });
  expect(screen.getByRole("list").textContent).toBe("");
});

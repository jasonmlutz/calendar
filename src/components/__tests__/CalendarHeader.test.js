import renderer from "react-test-renderer";
import CalendarHeader, { generateMonth } from "../CalendarHeader";

it("generateMonth: properly assigns month", () => {
  expect(generateMonth(0)).toEqual({ index: 0, name: "January" });
  expect(generateMonth(8)).toEqual({ index: 8, name: "September" });
});

it("generateMonth: properly handles overages", () => {
  expect(generateMonth(12)).toEqual({ index: 0, name: "January" });
  expect(generateMonth(13)).toEqual({ index: 1, name: "February" });
});

it("generateMonth: handles negative inputs", () => {
  expect(generateMonth(-1)).toEqual({ index: 11, name: "December" });
});

it("renders correctly", () => {
  const tree = renderer.create(<CalendarHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});

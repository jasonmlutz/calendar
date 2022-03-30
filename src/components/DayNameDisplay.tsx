import React from "react";

type DayName = Readonly<
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
>;

const dayNames: DayName[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const renderedDayNames: JSX.Element[] = dayNames.map((name, index) => (
  <li key={index}>{name}</li>
));

function DayNameDisplay() {
  return <ul className="flex flex-row justify-between">{renderedDayNames}</ul>;
}

export default DayNameDisplay;

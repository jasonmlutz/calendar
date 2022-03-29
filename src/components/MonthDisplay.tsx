import React, { useState } from "react";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

type MonthName = Readonly<
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December"
>;

interface Month {
  readonly index: number;
  readonly name: MonthName;
}

export function generateMonth(index: number): Month {
  // take an index in 0 .. 11 and return the corresponding
  // Month object
  const monthNames: MonthName[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (index > 0) {
    return {
      index: index % 12,
      name: monthNames[index % 12],
    };
  } else {
    // we want to treat an input like -1 (or -13) as we would 11
    return generateMonth(12 + index);
  }
}

export function incrementMonth(currentMonth: Month, change: number): Month {
  // return the a new Month that is change month(s) before/after current month
  return generateMonth((currentMonth.index + change) % 12);
}

function MonthDisplay() {
  let initialMonth: Month = { index: 0, name: "January" };
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  return (
    <div id="Current-month-header" className="flex flex-row justify-around">
      <div
        id="Current-month-left-nav"
        onClick={() => {
          setCurrentMonth((currentMonth) => incrementMonth(currentMonth, -1));
        }}
      >
        <BsArrowLeftSquare />
      </div>
      <div id="Current-month-name">{currentMonth.name}</div>
      <div
        id="Current-month-left-nav"
        onClick={() => {
          setCurrentMonth((currentMonth) => incrementMonth(currentMonth, 1));
        }}
      >
        <BsArrowRightSquare />
      </div>
    </div>
  );
}

export default MonthDisplay;

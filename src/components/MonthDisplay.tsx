import React, { useState } from "react";

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
  return <div id="Current-month">{currentMonth.name}</div>;
}

export default MonthDisplay;

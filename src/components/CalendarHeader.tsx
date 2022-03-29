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
    <div className="flex flex-row justify-around">
      <button
        className="p-2 bg-white border border-black text-black rounded-md hover:bg-gray-300"
        onClick={() => {
          setCurrentMonth((currentMonth) => incrementMonth(currentMonth, -1));
        }}
      >
        previous
      </button>
      <div data-testid="current-month-name">{currentMonth.name}</div>
      <button
        className="p-2 bg-white border border-black text-black rounded-md hover:bg-gray-300"
        onClick={() => {
          setCurrentMonth((currentMonth) => incrementMonth(currentMonth, 1));
        }}
      >
        next
      </button>
    </div>
  );
}

export default MonthDisplay;

import React from "react";

type MonthIndex = Readonly<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;

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
  readonly index: MonthIndex;
  readonly name: MonthName;
}

export function generateMonth(index: MonthIndex): Month {
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

  return {
    index: index,
    name: monthNames[index],
  };
}

function App() {
  return (
    <div id="App" className="container mx-auto text-white">
      <header id="App-header" className="py-2 text-center text-2xl md:text-3xl">
        Calendar App
      </header>
    </div>
  );
}

export default App;

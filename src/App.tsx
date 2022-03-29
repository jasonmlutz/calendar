import React from "react";
import CalendarHeader from "./components/CalendarHeader";

function App() {
  return (
    <div id="App" className="container mx-auto text-white">
      <header id="App-header" className="py-2 text-center text-2xl md:text-3xl">
        Calendar App
      </header>
      <div id="Calendar-header">
        <CalendarHeader />
      </div>
    </div>
  );
}

export default App;

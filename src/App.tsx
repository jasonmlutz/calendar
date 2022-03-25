import React from "react";
import MonthDisplay from "./components/MonthDisplay";

function App() {
  return (
    <div id="App" className="container mx-auto text-white">
      <header id="App-header" className="py-2 text-center text-2xl md:text-3xl">
        Calendar App
      </header>
      <MonthDisplay />
    </div>
  );
}

export default App;

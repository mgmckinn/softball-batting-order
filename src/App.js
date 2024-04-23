/** @format */

import React from "react";
import BattingOrder from "./components/BattingOrder";
import "./App.css";

const names = [
  "Rebecca",
  "Elle",
  "Olivia",
  "Willow",
  "Jo Jo",
  "Remy",
  "Maddie",
  "Emma",
  "Josie",
  "Sydney",
];

function App() {
  return (
    <div className='App'>
      <BattingOrder names={names} />
    </div>
  );
}

export default App;

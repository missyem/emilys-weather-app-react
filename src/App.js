import React from "react";
import ReactDom from "react-dom";
import City from "./City";
import Conditions from "./Conditions";
import Date from "./Date";
import Forecast from "./Forecast";
import Search from "./Search";
import Temperature from "./Temperature";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Date />
      <City />
      <Conditions />
      <Temperature />
      <Forecast />
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

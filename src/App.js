// @flow strict

import logo from "./logo.svg";
import "./App.css";
import TOFDropdown from "./TOFDropdown.js";
import * as React from "react";
import { useState } from "react";
import { LONGLIST } from "./LongListConst.js";

export default function App(): React.MixedElement {
  //	const labels = ["run", "crawl", "walk"];
  const labels = LONGLIST;
  const [selected, setSelected] = useState<$ReadOnlyArray<string>>([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload OK.
        </p>
        <TOFDropdown
          multiple={true}
          labels={labels}
          selectedLabels={selected}
          setSelectedLabels={setSelected}
        />
        <p>{selected.join(", ")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

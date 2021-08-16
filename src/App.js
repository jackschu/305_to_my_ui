// @flow strict

import logo from "./logo.svg";
import "./App.css";
import TOFDropdown from "./TOFDropdown.js";
import * as React from "react";
import { useState } from "react";
import { LONGLIST } from "./LongListConst.js";

export default function App(): React.MixedElement {
  const labels = ["run", "crawl", "walk"];
  const longLabels = LONGLIST;
  const [singleSelected, setSingleSelected] = useState<$ReadOnlyArray<string>>(
    []
  );
  const [selected, setSelected] = useState<$ReadOnlyArray<string>>([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>multi-select with many options</p>
        <TOFDropdown
          multiple={true}
          labels={longLabels}
          selectedLabels={selected}
          setSelectedLabels={setSelected}
        />
        <p>single-select with few options</p>
        <TOFDropdown
          multiple={false}
          labels={labels}
          selectedLabels={singleSelected}
          setSelectedLabels={setSingleSelected}
        />
      </header>
    </div>
  );
}

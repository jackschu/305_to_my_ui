// @flow strict

import logo from "./logo.svg";
import "./App.css";
import TOFDropdown from "./TOFDropdown.js";
import * as React from "react";

export default function App(): React.MixedElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload OK.
        </p>
        <TOFDropdown />
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

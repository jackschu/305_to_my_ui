// @flow strict

import * as React from "react";

export default function TOFDropdown(): React.MixedElement {
  const values = ["run", "crawl", "walk"];
  return (
    <select>
      {values.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
}

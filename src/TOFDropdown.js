// @flow strict

import * as React from "react";
import styles from "./TOFDropdown.module.css";

type Props = {
  labels: $ReadOnlyArray<string>,
  selectedLabels: $ReadOnlyArray<string>,
  onSelect: ($ReadOnlyArray<string>) => void,
  multiple?: ?boolean,
  placeholder?: ?string,
};

export default function TOFDropdown({
  labels,
  selectedLabels,
  onSelect,
  multiple,
  placeholder,
}: Props): React.MixedElement {
  return (
    <>
      <div className={styles.dropdowninput}>
        <div style={{ gridColumn: 1 }}>
          {selectedLabels.length > 0
            ? selectedLabels.join(", ")
            : placeholder ?? "Select option(s)"}
        </div>
        <div style={{ gridColumn: 2 }} className={styles.triangle} />
      </div>

      <select
        className={styles.dropdowninput}
        multiple={multiple ?? false}
        value={selectedLabels}
        onChange={(event: { target: HTMLSelectElement }) => {
          const selected = Array.from(event.target.selectedOptions);
          onSelect(selected.map((item) => item.label));
        }}
      >
        {labels.map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}

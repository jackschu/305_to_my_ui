// @flow strict

import * as React from "react";

type Props = {
  labels: $ReadOnlyArray<string>,
  selectedLabels: $ReadOnlyArray<string>,
  onSelect: ($ReadOnlyArray<string>) => void,
  multiple?: ?boolean,
};
export default function TOFDropdown({
  labels,
  selectedLabels,
  onSelect,
  multiple,
}: Props): React.MixedElement {
  return (
    <select
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
  );
}

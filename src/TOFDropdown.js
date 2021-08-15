// @flow strict

import * as React from "react";
import styles from "./TOFDropdown.module.css";
import TOFDropdownItem from "./TOFDropdownItem.js";
import useSelectedItems from "./useSelectedItems.js";
import { useState } from "react";

type Props = {
  labels: $ReadOnlyArray<string>,
  selectedLabels: $ReadOnlyArray<string>,
  setSelectedLabels: ($ReadOnlyArray<string>) => void,
  multiple?: ?boolean,
  placeholder?: ?string,
};

export default function TOFDropdown({
  labels,
  selectedLabels,
  setSelectedLabels,
  multiple,
  placeholder,
}: Props): React.MixedElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const items = useSelectedItems(labels, selectedLabels);
  const handleDropdownClick = () => setIsOpen(!isOpen);
  const onBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const onSelect = (label) => {
    const updatedSelections = selectedLabels.filter((item) => item !== label);
    if (updatedSelections.length === selectedLabels.length) {
      updatedSelections.push(label);
    }
    setSelectedLabels(updatedSelections);
  };
  return (
    <div tabIndex="1" onBlur={onBlur}>
      <div className={styles.dropdowninput} onClick={handleDropdownClick}>
        <div style={{ gridColumn: 1 }}>
          {selectedLabels.length > 0
            ? selectedLabels.join(", ")
            : placeholder ?? "Select option(s)"}
        </div>
        <div style={{ gridColumn: 2 }} className={styles.triangle} />
      </div>
      {isOpen &&
        items.map((item, index) => (
          <TOFDropdownItem key={item.label} item={item} onSelect={onSelect} />
        ))}
    </div>
  );
}

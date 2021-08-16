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
  multiple: maybeMutliple,
  placeholder,
}: Props): React.MixedElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const items = useSelectedItems(labels, selectedLabels);

  const multiple = maybeMutliple ?? false;

  const handleDropdownClick = () => setIsOpen(!isOpen);
  const onBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const onSelect = (label) => {
    const updatedSelections = selectedLabels.filter((item) => item !== label);
    const didReselect = updatedSelections.length !== selectedLabels.length;
    if (multiple) {
      if (!didReselect) {
        updatedSelections.push(label);
      }
      setSelectedLabels(updatedSelections);
    } else {
      setSelectedLabels(didReselect ? [] : [label]);
    }
  };

  return (
    <div tabIndex="1" onBlur={onBlur}>
      <div className={styles.dropdowninput} onClick={handleDropdownClick}>
        <div
          className={styles.inputtext}
          style={{ float: "left", width: "80%" }}
        >
          {selectedLabels.length > 0
            ? selectedLabels.join(", ")
            : placeholder ?? "select option(s)"}
        </div>
        <div style={{ float: "left", width: "20%" }}>
          {/* fun css-trick to avoid pulling in icons*/}
          <div className={styles.triangle} />
        </div>
      </div>

      {isOpen && (
        <div className={styles.dropdownlist}>
          {items.map((item, index, array) => (
            <div key={item.label}>
              <TOFDropdownItem
                item={item}
                onSelect={onSelect}
                multiple={multiple}
              />
              {index !== array.length - 1 && <hr style={{ margin: "0px" }} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

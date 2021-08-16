// @flow strict

import * as React from "react";
import styles from "./TOFDropdownItem.module.css";
import type { Item } from "./useSelectedItems.js";
type Props = {
  item: Item,
  onSelect: (string) => void,
  multiple: boolean,
};

export default function TOFDropdown({
  item,
  onSelect,
  multiple,
}: Props): React.MixedElement {
  return (
    <div>
      <div
        className={styles.container}
        onClick={() => {
          onSelect(item.label);
        }}
      >
        <input
          className={styles.box}
          type={multiple ? "checkbox" : "radio"}
          readOnly={true}
          checked={item.isSelected}
        ></input>
        <div className={styles.text}>{item.label}</div>
      </div>
    </div>
  );
}

// @flow strict

import * as React from "react";
import styles from "./TOFDropdownItem.module.css";
import type { Item } from "./useSelectedItems.js";
import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={styles.container}
      onClick={() => {
        onSelect(item.label);
      }}
      style={{
        ...(isHovered && {
          //HACK should use a color pallette
          backgroundColor: "#612940",
        }),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        className={styles.box}
        type={multiple ? "checkbox" : "radio"}
        readOnly={true}
        checked={item.isSelected}
      ></input>
      <div className={styles.text}>{item.label}</div>
    </div>
  );
}

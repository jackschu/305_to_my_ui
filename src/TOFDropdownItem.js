// @flow strict

import * as React from "react";
import type { Item } from "./useSelectedItems.js";
type Props = {
  item: Item,
  onSelect: (string) => void,
};

export default function TOFDropdown({
  item,
  onSelect,
}: Props): React.MixedElement {
  return (
    <p
      value={item.label}
      onClick={() => {
        onSelect(item.label);
      }}
    >
      {item.isSelected ? item.label + " YES" : item.label}
    </p>
  );
}

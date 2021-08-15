// @flow strict

import * as React from "react";
import { useMemo } from "react";
export type Item = {
  label: string,
  isSelected: boolean,
};

export default function useSelectedItems(
  labels: $ReadOnlyArray<string>,
  selectedLabels: $ReadOnlyArray<string>
): $ReadOnlyArray<Item> {
  return useMemo(() => {
    const valueSet = new Set(selectedLabels);
    const selectedItems = [];
    const isSelected = (label) => valueSet.has(label);
    return labels.map((label) => {
      return { label: label, isSelected: isSelected(label) };
    });
  }, [labels, selectedLabels]);
}

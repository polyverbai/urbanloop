export const normalizeSelectAll = (
  selectedValues: string[],
  allOptions: string[],
  allOptionValue: string
): string[] => {
  // Remove the "All ..." option and keep only actual values.
  const actualOptions = allOptions.filter(
    (option) => option !== allOptionValue
  );

  // Case 1:
  // User selects "All ..."
  if (selectedValues.includes(allOptionValue)) {
    return actualOptions;
  }

  // Case 2:
  // User manually selects all individual options.
  if (
    actualOptions.every((option) =>
      selectedValues.includes(option)
    )
  ) {
    return actualOptions;
  }

  // Case 3:
  // Normal multi-select behaviour.
  return selectedValues.filter(
    (value) => value !== allOptionValue
  );
};


/**
 * Determines whether the "All ..." checkbox should
 * be shown as selected in the UI.
 */
export const isAllSelected = (
  selectedValues: string[],
  allOptions: string[],
  allOptionValue: string
): boolean => {
  const actualOptions = allOptions.filter(
    (option) => option !== allOptionValue
  );

  return (
    actualOptions.length > 0 &&
    actualOptions.every((option) =>
      selectedValues.includes(option)
    )
  );
};
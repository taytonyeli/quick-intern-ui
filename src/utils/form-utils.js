export const genericReducer = (currentFields, newData) => {
  if (
    newData &&
    typeof newData === 'object' &&
    Object.keys(newData).length > 0
  ) {
    return {
      ...currentFields,
      ...newData
    }
  }
  return currentFields
}

export const getStoredIsFavorite = (value) =>
  localStorage.getItem(`isFavorite_${value}`);

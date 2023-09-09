export const getFavoriteMoviesData = () =>
  JSON.parse(localStorage.getItem("favoriteMoviesId")) || {};

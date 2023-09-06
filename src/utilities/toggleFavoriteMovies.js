export function toggleFavoriteMovie(
  movieId,
  moviesKey,
  storedMovies,
  setStoredMovies,
  isFavorite,
  setIsFavorite,
) {
  const existingData =
    JSON.parse(localStorage.getItem("favoriteMoviesId")) || {};
  const userFavorites = { ...existingData };

  if (!userFavorites[moviesKey]) {
    userFavorites[moviesKey] = [movieId];
    setIsFavorite(true);
  } else {
    const index = userFavorites[moviesKey].indexOf(movieId);
    if (index !== -1) {
      userFavorites[moviesKey].splice(index, 1);
      setIsFavorite(false);
    } else {
      userFavorites[moviesKey].push(movieId);
      setIsFavorite(true);
    }
  }
  localStorage.setItem("favoriteMoviesId", JSON.stringify(userFavorites));
  if (setStoredMovies) {
    setStoredMovies(userFavorites);
  }
}

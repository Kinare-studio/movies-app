import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteMovies: {},
  },
  reducers: {
    addFavorite(state, action) {
      const { movieId, movieData } = action.payload;
      const updatedFavoriteMovies = {
        ...state.favoriteMovies,
        [movieId]: movieData,
      };
      return {
        ...state,
        favoriteMovies: updatedFavoriteMovies,
      };
    },
    removeFavorite(state, action) {
      const { movieId } = action.payload;
      const updatedFavoriteMovies = { ...state.favoriteMovies };
      delete updatedFavoriteMovies[movieId];
      return {
        ...state,
        favoriteMovies: updatedFavoriteMovies,
        isFavorite: Object.keys(updatedFavoriteMovies).length > 0,
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState: {},
//   reducers: {
//     addFavorite(state, action) {
//       const { userEmail, movieId, movieData } = action.payload;
//       const updatedFavoriteMovies = { ...state.favoriteMovies };
//       if (!updatedFavoriteMovies.state[userEmail]) {
//         updatedFavoriteMovies.state[userEmail] = {};
//       }
//       updatedFavoriteMovies.state[userEmail][movieId] = movieData;
//     },
//     removeFavorite(state, action) {
//       const { userEmail, movieId } = action.payload;
//       const updatedFavoriteMovies = { ...state.favoriteMovies };
//       if (state[userEmail] && state[userEmail][movieId]) {
//         delete updatedFavoriteMovies.state[userEmail][movieId];
//       }
//     },
//   },
// });

// export const { addFavorite, removeFavorite } = favoritesSlice.actions;
// export default favoritesSlice.reducer;

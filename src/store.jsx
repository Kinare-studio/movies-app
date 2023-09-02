import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import favoritesReducer from "./redux/favoritesSlice";
import { moviesApi } from "./api/MoviesApi";
import { LSMiddleware } from "./redux/LSMiddleware";

const rootReducers = combineReducers({
  auth: authReducer,
  favorites: favoritesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: rootReducers,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, LSMiddleware),
});

export { store };

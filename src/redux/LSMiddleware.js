/* eslint-disable no-console */
import { setIsAuth, logoutUser } from "./authSlice";
import { addFavorite, removeFavorite } from "./favoritesSlice";

export const LSMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  const date = new Date().toString();

  switch (action.type) {
    case setIsAuth.type:
      console.groupCollapsed("Вход в приложение:");
      console.log("1.", date);
      console.log("2. Выполнен ли вход:", store.getState().auth.isAuth);
      console.log("3. Установлено имя:", store.getState().auth.username);
      console.log("4. auth state", store.getState().auth);
      console.groupEnd();
      break;

    case logoutUser.type:
      console.groupCollapsed("Выход из приложения:");
      console.log("1.", date);
      console.log("2. Вышел из аккаунта:", store.getState().auth.isAuth);
      console.log("3. auth state", store.getState().auth);
      console.groupEnd();
      break;

    case addFavorite.type:
      console.groupCollapsed("Добавление фильма в избранное:");
      console.log("1.", date);
      console.log("2. Фильм добавлен в избранное");
      console.groupEnd();
      break;

    case removeFavorite.type:
      localStorage.setItem(
        "favorites",
        JSON.stringify(store.getState().favorites.movies),
      );
      console.groupCollapsed("Удаление фильма из избранного:");
      console.log("1.", date);
      console.log("2. Фильм удален из избранного");
      console.groupEnd();
      break;
    default:
      break;
  }
  return result;
};

/* eslint-disable no-console */
import { setIsAuth, logoutUser } from "./authSlice";

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

    default:
      break;
  }
  return result;
};

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    username: "",
  },
  reducers: {
    setIsAuth(state, action) {
      return { ...state, isAuth: action.payload };
    },
    logoutUser(state) {
      return { ...state, isAuth: false };
    },
    setUserName(state, action) {
      return { ...state, username: action.payload };
    },
  },
});

export const { setIsAuth, logoutUser, setUserName } = authSlice.actions;
export default authSlice.reducer;

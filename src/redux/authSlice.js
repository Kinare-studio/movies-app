import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    username: "",
  },
  reducers: {
    setIsAuth(state, action) {
      const { isAuth, username } = action.payload;
      return {
        ...state,
        isAuth,
        username,
      };
    },
    logoutUser(state) {
      return { ...state, isAuth: false };
    },
  },
});

export const { setIsAuth, logoutUser } = authSlice.actions;

export default authSlice.reducer;

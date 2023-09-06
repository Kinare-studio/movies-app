import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  username: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth(state, action) {
      const { isAuth, username, email } = action.payload;
      return {
        ...state,
        isAuth,
        username,
        email,
      };
    },
    logoutUser() {
      return initialState;
    },
  },
});

export const { setIsAuth, logoutUser } = authSlice.actions;

export default authSlice.reducer;

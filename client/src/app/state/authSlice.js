import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {},
    expires: null,
    currentGame:{}
  },
  reducers: {
    signin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.expires = action.payload.expires;
    },
    signout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.expires = null;
    },
    setCurrentGame:(state,action) => {
      state.currentGame = action.payload.current_game
    }
  },
});

export const { signin, signout,setCurrentGame } = authSlice.actions;

export default authSlice.reducer;

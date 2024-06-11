// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import doctor from "@/public/img/doctor.png";

const initialState = {
  isAuthenticated: false,
  user: null,
  role: null,
  token: null,
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
    updateUserProfile(state, action) {
      state.user = action.payload;
    },
  },
});



export const { login, logout, updateUserProfile } = authSlice.actions;

export const authReducer = authSlice.reducer;

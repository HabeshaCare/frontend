import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  role: null,
  // userData: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
    // userData(state,action){
    //   state.isAuthenticated = true;
    //   state.token = action.payload.token;
    //   state.userData = action.payload.userData;
    // }
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

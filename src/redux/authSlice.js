// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  role: null,
};

const doctorInitialState = {
  isAuthenticated: false,
  doctorid: null,
  doctoremail: null,
  doctorname: null,
  doctorphone: null,
  doctorgender: null,
  doctorimageUrl: null,
  doctorverificationToken: null,
  doctorverificationTokenExpires: null,
  doctorverifiedAt: null,
  doctorpasswordResetToken: null,
  doctorlocation: null,
  doctorlicensePath: null,
  doctorassociatedHealthCenterId: null,
  doctorspecialization: null,
  doctorverified: null,
  doctordescription: null,
  doctorhourlyRateInBirr: null,
  doctoravailableMoney: null,
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
    updateUserProfile(state, action) {
      state.user = action.payload;
    },
  },
});

const doctorSlice = createSlice({
  name: 'doctor',
  initialState: doctorInitialState,
  reducers: {
    assignProfile(state, action) {
      state.isAuthenticated = true;
      state.doctoremail = action.payload.email;
      state.doctorid = action.payload.id;
      state.doctorname = action.payload.fullname;
      state.doctorphone = action.payload.phonenumber;
      state.doctorgender = action.payload.gender;
    },
  },
});

export const { login, logout, updateUserProfile } = authSlice.actions;
export const { assignProfile } = doctorSlice.actions;

export const authReducer = authSlice.reducer;
export const doctorReducer = doctorSlice.reducer;

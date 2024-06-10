// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import doctor from "@/public/img/doctor.png";

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
  doctoryearOfExperience: null
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
    assignProfilePicture(state, action) {
      state.doctorimageUrl = action.payload.doctorimageUrl;
    },

    updateprofile(state, action) {
      state.doctorname = action.payload.doctorname;
      state.doctorphone = action.payload.doctorphone;
      state.doctoremail = action.payload.doctoremail;
      state.doctorgender = action.payload.doctorgender;
      state.doctorlocation = action.payload.doctorlocation;
      state.doctorlicensePath = action.payload.doctorlicensePath;
      state.doctorspecialization = action.payload.doctorspecialization;
      state.doctorhourlyRateInBirr = action.payload.doctorhourlyRateInBirr;
      state.doctoryearOfExperience = action.payload.doctoryearOfExperience;
    },
  },
});

export const { login, logout, updateUserProfile } = authSlice.actions;
export const { assignProfile, assignProfilePicture, updateprofile } = doctorSlice.actions;

export const authReducer = authSlice.reducer;
export const doctorReducer = doctorSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false,
  laboratoryId: null,
  laboratoryEmail: null,
  laboratoryName: null,
  laboratoryPhone: null,
  laboratoryGender: null,
  laboratoryImageUrl: null,
};

// Create the slice
const laboratorySlice = createSlice({
  name: 'laboratory',
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, email, name, phone, gender, imageUrl } = action.payload;
      state.isAuthenticated = true;
      state.laboratoryId = id;
      state.laboratoryEmail = email;
      state.laboratoryName = name;
      state.laboratoryPhone = phone;
      state.laboratoryGender = gender;
      state.laboratoryImageUrl = imageUrl;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.laboratoryId = null;
      state.laboratoryEmail = null;
      state.laboratoryName = null;
      state.laboratoryPhone = null;
      state.laboratoryGender = null;
      state.laboratoryImageUrl = null;
    },
    updateLaboratory: (state, action) => {
      const { email, name, phone, gender, imageUrl } = action.payload;
      if (email) state.laboratoryEmail = email;
      if (name) state.laboratoryName = name;
      if (phone) state.laboratoryPhone = phone;
      if (gender) state.laboratoryGender = gender;
      if (imageUrl) state.laboratoryImageUrl = imageUrl;
    },
  },
});

// Export actions
export const { login, logout, updateLaboratory } = laboratorySlice.actions;

// Export selector
export const selectLaboratoryId = (state) => state.laboratory.laboratoryId;

// Export reducer
export const laboratoryReducer = laboratorySlice.reducer;

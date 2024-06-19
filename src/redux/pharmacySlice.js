import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false,
  pharmacyId: null,
  pharmacyEmail: null,
  pharmacyName: null,
  pharmacyPhone: null,
  pharmacyGender: null,
  pharmacyImageUrl: null,
};

// Create the slice
const pharmacySlice = createSlice({
  name: 'pharmacy',
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, email, name, phone, gender, imageUrl } = action.payload;
      state.isAuthenticated = true;
      state.pharmacyId = id;
      state.pharmacyEmail = email;
      state.pharmacyName = name;
      state.pharmacyPhone = phone;
      state.pharmacyGender = gender;
      state.pharmacyImageUrl = imageUrl;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.pharmacyId = null;
      state.pharmacyEmail = null;
      state.pharmacyName = null;
      state.pharmacyPhone = null;
      state.pharmacyGender = null;
      state.pharmacyImageUrl = null;
    },
    updatePharmacy: (state, action) => {
      const { email, name, phone, gender, imageUrl } = action.payload;
      if (email) state.pharmacyEmail = email;
      if (name) state.pharmacyName = name;
      if (phone) state.pharmacyPhone = phone;
      if (gender) state.pharmacyGender = gender;
      if (imageUrl) state.pharmacyImageUrl = imageUrl;
    },
  },
});

// Export actions
export const { login, logout, updatePharmacy } = pharmacySlice.actions;

// Export selector
export const selectPharmacyId = (state) => state.pharmacy.pharmacyId;

// Export reducer
export const pharmacyReducer = pharmacySlice.reducer;


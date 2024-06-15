import { createSlice } from '@reduxjs/toolkit';

const laboratoryInitialState = {
    isAuthenticated: false,
    laboratoryId: null,
    laboratoryEmail: null,
    laboratoryName: null,
    laboratoryPhone: null,
    laboratoryGender: null,
    laboratoryImageUrl: null,
    laboratoryVerificationToken: null,
    laboratoryVerificationTokenExpires: null,
    laboratoryVerifiedAt: null,
    laboratoryPasswordResetToken: null,
    laboratoryLocation: null,
    laboratoryNationalId: null,
    laboratoryHeight: null,
    laboratoryWeight: null,
    laboratoryDateOfBirth: null,
    laboratoryCurrentBalance: null,
    laboratoryPaymentVerified: null
};

const laboratorySlice = createSlice({
    name: 'laboratory',
    initialState: laboratoryInitialState,
    reducers: {
        assignProfile(state, action) {
            state.isAuthenticated = true;
            state.laboratoryEmail = action.payload.email;
            state.laboratoryId = action.payload.id;
            state.laboratoryName = action.payload.fullname;
            state.laboratoryPhone = action.payload.phonenumber;
            state.laboratoryGender = action.payload.gender;
        },
        assignProfilePicture(state, action) {
            state.laboratoryImageUrl = action.payload.laboratoryImageUrl;
        },
        updateProfile(state, action) {
            state.laboratoryName = action.payload.laboratoryName;
            state.laboratoryPhone = action.payload.laboratoryPhone;
            state.laboratoryEmail = action.payload.laboratoryEmail;
            state.laboratoryGender = action.payload.laboratoryGender;
            state.laboratoryLocation = action.payload.laboratoryLocation;
            state.laboratoryNationalId = action.payload.laboratoryNationalId;
            state.laboratoryHeight = action.payload.laboratoryHeight;
            state.laboratoryWeight = action.payload.laboratoryWeight;
            state.laboratoryDateOfBirth = action.payload.laboratoryDateOfBirth;
            state.laboratoryCurrentBalance = action.payload.laboratoryCurrentBalance;
            state.laboratoryPaymentVerified = action.payload.laboratoryPaymentVerified;
        }
    }
});

export const { assignProfile, assignProfilePicture, updateProfile } = laboratorySlice.actions;
export const laboratoryReducer = laboratorySlice.reducer;

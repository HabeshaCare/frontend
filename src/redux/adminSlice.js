import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    institutionId: null,
    associatedHealthCenterId: null,
    verified: null,
    id: null,
    phonenumber: null,
    imageUrl: null,
    role: null,
    location: null,
    email: null,
    fullname: null,
    gender: null,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        updatePhoneNumber: (state, action) => {
            state.phonenumber = action.payload;
        },
        updateImageUrl: (state, action) => {
            state.imageUrl = action.payload;
        },
        updateLocation: (state, action) => {
            state.location = action.payload;
        },
        updateFullName: (state, action) => {
            state.fullname = action.payload;
        },
        updateGender: (state, action) => {
            state.gender = action.payload;
        },
        addAdminData: (state, action) => {
            const { institutionId, associatedHealthCenterId, verified, id, phonenumber, imageUrl, role, location, email, fullname, gender } = action.payload;
            state.institutionId = institutionId;
            state.associatedHealthCenterId = associatedHealthCenterId;
            state.verified = verified;
            state.id = id;
            state.phonenumber = phonenumber;
            state.imageUrl = imageUrl;
            state.role = role;
            state.location = location;
            state.email = email;
            state.fullname = fullname;
            state.gender = gender;
        },
        toggleVerification: (state) => {
            state.verified = !state.verified;
        },
    },
});
const adminReducer = adminSlice.reducer;
export const { addAdminData, updateFullName, updateGender, updateImageUrl, updateLocation, updatePhoneNumber, toggleVerification } = adminSlice.actions;
export default adminReducer;

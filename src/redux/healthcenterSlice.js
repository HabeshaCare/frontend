import { createSlice } from '@reduxjs/toolkit';

const healthcenterSlice = createSlice({
    name: 'healthcenter',
    initialState: {
        id: "",
        name: "None",
        location: "None",
        licensePath: null,
        verified: false,
        type: "HealthCenter",
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateLocation: (state, action) => {
            state.location = action.payload;
        },
        updateLicensePath: (state, action) => {
            state.licensePath = action.payload;
        },
        updateVerified: (state, action) => {
            state.verified = action.payload;
        },
        updateHealthcenter: (state, action) => {
            const { id, name, location, licensePath, verified, type } = action.payload;
            state.id = id;
            state.name = name;
            state.location = location;
            state.licensePath = licensePath;
            state.verified = verified;
            state.type = type;
        }
    }
});

export const { updateHealthcenter, updateName, updateLicensePath, updateLocation, updateVerified } = healthcenterSlice.actions;
export const selectHealthcenter = state => state.healthcenter;

export default healthcenterSlice.reducer;
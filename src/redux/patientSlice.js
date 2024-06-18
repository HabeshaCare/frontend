import { createSlice } from '@reduxjs/toolkit';

const patientInitialState = {
    isAuthenticated: false,
    patientid: null,
    patientemail: null,
    patientname: null,
    patientphone: null,
    patientgender: null,
    patientimageUrl: null,
    patientverificationToken: null,
    patientverificationTokenExpires: null,
    patientverifiedAt: null,
    patientpasswordResetToken: null,
    patientlocation: null,
    patientnationalId: null,
    patientheight: null,
    patientweight: null,
    patientdateOfBirth: null,
    patientcurrentBalance: null,
    patientpaymentVerified: null

}

const patientSlice = createSlice({
    name: 'patient',
    initialState: patientInitialState,
    reducers: {
        assignProfile(state, action) {
            state.isAuthenticated = true;
            state.patientemail = action.payload.email;
            state.patientid = action.payload.id;
            state.patientname = action.payload.fullname;
            state.patientphone = action.payload.phonenumber;
            state.patientgender = action.payload.gender;
        },
        assignProfilePicture(state, action) {
            state.patientimageUrl = action.payload.patientimageUrl;
        },
        updateprofile(state, action) {
            state.patientname = action.payload.patientname;
            state.patientphone = action.payload.patientphone;
            state.patientemail = action.payload.patientemail;
            state.patientgender = action.payload.patientgender;
            state.patientlocation = action.payload.patientlocation;
            state.patientnationalId = action.payload.patientnationalId;
            state.patientheight = action.payload.patientheight;
            state.patientweight = action.payload.patientweight;
            state.patientdateOfBirth = action.payload.patientdateOfBirth;
            state.patientcurrentBalance = action.payload.patientcurrentBalance;
            state.patientpaymentVerified = action.payload.patientpaymentVerified;
            state.patientimageUrl = action.payload.patientimageUrl;
        }

    }
});


export const { assignProfile, assignProfilePicture, updateprofile } = patientSlice.actions;
export const patientReducer = patientSlice.reducer;
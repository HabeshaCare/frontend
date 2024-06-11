// store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';
import { doctorReducer } from './doctorSlice';
import {patientReducer } from './patientSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const doctorPersistConfig = {
  key: 'doctor',
  storage,
};
const patientPersistConfig = {
  key: 'patient',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedDoctorReducer = persistReducer(doctorPersistConfig, doctorReducer);
const persistedPatientReducer = persistReducer(patientPersistConfig, patientReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    doctor: persistedDoctorReducer,
    patient: persistedPatientReducer,
  },
});

export const persistor = persistStore(store);
export default store;

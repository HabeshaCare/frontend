// store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer, doctorReducer } from './authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const doctorPersistConfig = {
  key: 'doctor',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedDoctorReducer = persistReducer(doctorPersistConfig, doctorReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    doctor: persistedDoctorReducer,
  },
});

export const persistor = persistStore(store);
export default store;

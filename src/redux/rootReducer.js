import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { doctorReducer } from './doctorSlice';
import { patientReducer } from './patientSlice';

const appReducer = combineReducers({
  auth: authReducer,
  doctor: doctorReducer,
  patient: patientReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { doctorReducer } from './doctorSlice';
import { patientReducer } from './patientSlice';
import {pharmacyReducer} from "./pharmacySlice";
import { laboratoryReducer } from './laboratorySlice';

const appReducer = combineReducers({
  auth: authReducer,
  doctor: doctorReducer,
  patient: patientReducer,
  pharmacy:pharmacyReducer,
  laboratory: laboratoryReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

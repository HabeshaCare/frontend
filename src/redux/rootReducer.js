import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { doctorReducer } from "./doctorSlice";
import { patientReducer } from "./patientSlice";
import adminReducer from "./adminSlice";
import healthCenterReducer from "./healthcenterSlice";
import scheduleReducer from "./scheduleSlice";

const appReducer = combineReducers({
  auth: authReducer,
  doctor: doctorReducer,
  patient: patientReducer,
  admin: adminReducer,
  healthcenter: healthCenterReducer,
  schedule: scheduleReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  from: null,
  to: null,
  lastUpdated: null,
  confirmed: false,
  scheduler: "",
  doctor: "",
  meetingUrl: "",
  duration: null,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule: (state, action) => {
      // Add logic to handle adding a new schedule item
      state.id = action.payload.id;
      state.from = action.payload.from;
      state.to = action.payload.to;
      state.lastUpdated = action.payload.lastUpdated;
      state.confirmed = action.payload.confirmed;
      state.scheduler = action.payload.scheduler?.fullname;
      state.doctor = action.payload.doctor?.fullname;
      state.meetingUrl = action.payload.meetingUrl;
      state.duration = action.payload.duration;
    },
  },
});

export const { addSchedule } = scheduleSlice.actions;

export const selectSchedule = (state) => state.schedule;

export default scheduleSlice.reducer;

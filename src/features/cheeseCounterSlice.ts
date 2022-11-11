import { createSlice } from "@reduxjs/toolkit";

export const cheeseCounterSlice = createSlice({
  name: "cheeseCounter",
  initialState: {
    value: 0,
    turbo: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    enableTurbo: (state) => {
      state.turbo = true;
    },
    disableTurbo: (state) => {
      state.turbo = false;
    }
  },
});

export const { increment, enableTurbo, disableTurbo } = cheeseCounterSlice.actions;

export default cheeseCounterSlice.reducer;

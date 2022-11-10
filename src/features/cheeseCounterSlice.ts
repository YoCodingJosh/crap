import { createSlice } from "@reduxjs/toolkit";

export const cheeseCounterSlice = createSlice({
  name: "cheeseCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
});

export const { increment } = cheeseCounterSlice.actions;

export default cheeseCounterSlice.reducer;

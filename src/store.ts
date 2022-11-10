import { configureStore } from "@reduxjs/toolkit";

import cheeseCounterReducer from "./features/cheeseCounterSlice";

export default configureStore({
  reducer: {
    cheeseCounter: cheeseCounterReducer,
  },
});

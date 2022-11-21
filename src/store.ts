import { configureStore } from "@reduxjs/toolkit";

import cheeseCounterReducer from "./features/cheeseCounterSlice";
import somethingReducer from "./features/somethingSlice";

export const store = configureStore({
  reducer: {
    cheeseCounter: cheeseCounterReducer,
    something: somethingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

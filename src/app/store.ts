import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;  // this is the type of the state that is returned from the store
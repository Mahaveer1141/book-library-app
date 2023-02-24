import { configureStore } from "@reduxjs/toolkit";
import filterReducers from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

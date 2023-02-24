import { configureStore } from "@reduxjs/toolkit";
import searchReducers from "../features/search/searchSlice";
import filterReducers from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    search: searchReducers,
    filter: filterReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

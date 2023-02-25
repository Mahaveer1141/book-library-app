import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filters/filterSlice";
import bookReducer from "../features/books/bookSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    book: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

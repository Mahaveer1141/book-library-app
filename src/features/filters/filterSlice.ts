import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {
    title: false,
    author: false,
    category: false,
    publisher: false,
  },
  sortBy: {
    currentValue: "",
    order: "high",
  },
  rating: {
    onetotwo: false,
    twotothree: false,
    threetofour: false,
    fourtofive: false,
  },
  publishedDate: {
    from: "",
    to: "",
  },
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setRating: (state, { payload }) => {
      state.rating = payload;
    },
    setSortBy: (state, { payload }) => {
      state.sortBy = payload;
    },
    setPublishedDate: (state, { payload }) => {
      state.publishedDate = payload;
    },
    clearFilter: (state) => {
      state.categories = initialState.categories;
      state.rating = initialState.rating;
      state.sortBy = initialState.sortBy;
      state.publishedDate = initialState.publishedDate;
    },
  },
});

export const {
  clearFilter,
  setCategories,
  setPublishedDate,
  setRating,
  setSortBy,
} = filterSlice.actions;

export default filterSlice.reducer;

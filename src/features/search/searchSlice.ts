import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "search",
  initialState: {
    searchParameter: "",
  },
  reducers: {
    setSearchParameters: (state, { payload }) => {
      state.searchParameter = payload.searchTitle;
    },
  },
});

export const { setSearchParameters } = navbarSlice.actions;

export default navbarSlice.reducer;

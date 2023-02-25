import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListToggle: false,
};

export const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    setToggleWishlist: (state) => {
      state.wishListToggle = !state.wishListToggle;
    },
  },
});

export const { setToggleWishlist } = bookSlice.actions;

export default bookSlice.reducer;

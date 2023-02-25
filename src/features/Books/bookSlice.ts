import { createSlice } from "@reduxjs/toolkit";
import { BookType } from "./types";

interface IState {
  wishList: BookType[];
}

const initialState: IState = {
  wishList: [],
};

export const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    setWishList: (state, { payload }) => {
      state.wishList = payload;
    },
  },
});

export const { setWishList } = bookSlice.actions;

export default bookSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable no-unused-vars */
const initialState = {
  categories: [],
  colors: [],
  isLoggedIn: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCatFilter(state, action) {
      state.categories = [...state.categories, action.payload];
      // console.log(state.categories);
    },

    removeCatFilter(state, action) {
      state.categories = state.categories.filter(
        (item) => item != action.payload,
      );
      // console.log(state.categories);
    },

    addColorFilter(state, action) {
      state.colors = [...state.colors, action.payload];
      // console.log(state.colors);
    },

    removeColorFilter(state, action) {
      state.colors = state.colors.filter((item) => item != action.payload);
      // console.log(state.colors);
    },

    clearAllFilters(state, action) {
      state.categories = [];
    },
  },
});

export const {
  addCatFilter,
  removeCatFilter,
  clearAllFilters,
  removeColorFilter,
  addColorFilter,
} = filterSlice.actions;

export default filterSlice.reducer;

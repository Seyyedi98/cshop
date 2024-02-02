import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/slices/filterSlice";
import cartSlice from "./features/slices/cartSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
  },
});

export default store;

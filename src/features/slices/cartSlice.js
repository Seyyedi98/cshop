/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = [...state.cart, action.payload];
    },

    updateQuantity(state, action) {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.cartColor === action.payload.cartColor,
      );
      item.cartNumItems = action.payload.numItems;
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.cartColor !== action.payload.cartColor,
      );
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPrice = (state) =>
  state.cart.cart.reduce(
    (sum, item) => sum + item.price * item.cartNumItems,
    0,
  );

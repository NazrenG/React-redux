import { createSlice } from "@reduxjs/toolkit";

export const reducerSlice = createSlice({
  name: "item",
  initialState: {
    cart: [], // Ensure this is cart
    productCount: 0,
  },
  reducers: {
    add_item: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      state.productCount += action.payload.quantity;
    },
    remove_item: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.productCount -= existingItem.quantity;
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
    update_item: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.productCount -= existingItem.quantity;
        existingItem.quantity = action.payload.quantity;
        state.productCount += action.payload.quantity;
      }
    },
  },
});

export const { add_item, remove_item, update_item } = reducerSlice.actions;
export default reducerSlice.reducer;

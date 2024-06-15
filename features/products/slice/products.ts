import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../type";

const productsSlice = createSlice({
  name: "products",
  initialState: [] as Product[],
  reducers: {
    addProducts(state, action: PayloadAction<Product[]>) {
      state = [...state, ...action.payload];
      return state;
    },
    clearProducts(state) {
      state = [];
      return state;
    },
  },
});

export const { addProducts, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;

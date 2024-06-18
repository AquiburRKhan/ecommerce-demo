import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prices, Product } from "../type";

const pricesSlice = createSlice({
  name: "prices",
  initialState: {
    selectedMinPrice: 0,
  } as Prices,
  reducers: {
    initializePrices(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      const prices = products.map((product) => product.price);
      const maxPrice = Math.ceil(Math.max(...prices));

      return {
        ...state,
        maxPrice,
        selectedMaxPrice: maxPrice,
      };
    },
    updateSelectedPrices(state, action: PayloadAction<number[]>) {
      const [selectedMinPrice, selectedMaxPrice] = action.payload;

      return {
        ...state,
        selectedMinPrice,
        selectedMaxPrice,
      };
    },
    resetPrices() {
      return {
        selectedMinPrice: 0,
      };
    },
  },
});

export const { initializePrices, updateSelectedPrices, resetPrices } =
  pricesSlice.actions;
export default pricesSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prices, Product } from "../type";

const pricesSlice = createSlice({
  name: "prices",
  initialState: {} as Prices,
  reducers: {
    initializePrices(_, action: PayloadAction<Product[]>) {
      const products = action.payload;
      const prices = products.map((product) => product.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));

      return {
        minPrice,
        maxPrice,
        selectedMinPrice: minPrice,
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
      return {};
    },
  },
});

export const { initializePrices, updateSelectedPrices, resetPrices } =
  pricesSlice.actions;
export default pricesSlice.reducer;

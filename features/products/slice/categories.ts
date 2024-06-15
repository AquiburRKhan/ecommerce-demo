import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../type";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [] as string[],
  reducers: {
    addCategories(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      const categories = products.map((product) => product.category);
      const uniqueCategories = Array.from(new Set(categories));
      state = [...state, ...uniqueCategories];

      return state;
    },
    clearCategories(state) {
      state = [];
      return state;
    },
  },
});

export const { addCategories, clearCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

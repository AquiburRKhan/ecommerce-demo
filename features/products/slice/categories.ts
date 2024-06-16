import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Product } from "../type";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [] as Category[],
  reducers: {
    addCategories(_, action: PayloadAction<Product[]>) {
      const products = action.payload;
      const categories = products.map((product) => product.category);
      const uniqueCategories = Array.from(new Set(categories));
      const newCategories = uniqueCategories.map((category) => ({
        name: category,
        checked: false,
      }));

      return newCategories;
    },
    toggleCategory(state, action: PayloadAction<Category>) {
      const category = state.find(
        (category) => category.name === action.payload.name
      );
      if (category) {
        category.checked = !category.checked;
      }
    },
    clearCategories() {
      return [];
    },
  },
});

export const { addCategories, toggleCategory, clearCategories } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;

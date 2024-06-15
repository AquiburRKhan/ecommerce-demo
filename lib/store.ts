import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/slice/products";
import categoriesReducer from "../features/products/slice/categories";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      categories: categoriesReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

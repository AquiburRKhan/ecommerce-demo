import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/slice/products";
import categoriesReducer from "../features/products/slice/categories";
import paginationReducer from "../features/products/slice/pagination";
import pricesReducer from "../features/products/slice/prices";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      categories: categoriesReducer,
      pagination: paginationReducer,
      prices: pricesReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

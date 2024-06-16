import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../type";
import { Pagination } from "@/type";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
    limit: 5,
    totalItems: 0,
    numberOfPages: 0,
  } as Pagination,
  reducers: {
    initializePagination(state, action: PayloadAction<Product[]>) {
      const newState = {
        ...state,
        page: 1,
        totalItems: action.payload.length,
        numberOfPages: Math.ceil(action.payload.length / state.limit),
      };
      return newState;
    },
    updatePage(state, action: PayloadAction<number>) {
      const newState = { ...state, page: action.payload };
      return newState;
    },
    updateLimit(state, action: PayloadAction<number>) {
      const newState = {
        ...state,
        limit: action.payload,
        page: 1,
        numberOfPages: Math.ceil(state.totalItems / action.payload),
      };

      return newState;
    },
    resetPagination() {
      return {
        page: 1,
        limit: 5,
        totalItems: 0,
        numberOfPages: 0,
      };
    },
  },
});

export const {
  initializePagination,
  resetPagination,
  updatePage,
  updateLimit,
} = paginationSlice.actions;
export default paginationSlice.reducer;

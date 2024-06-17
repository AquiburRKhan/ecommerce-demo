import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchValue(_, action: PayloadAction<string>) {
      return action.payload;
    },
    clearSearch() {
      return "";
    },
  },
});

export const { setSearchValue, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;

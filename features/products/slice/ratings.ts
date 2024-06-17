import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ratings } from "../type";

const ratingsSlice = createSlice({
  name: "ratings",
  initialState: {
    selectedMinRating: 0,
    selectedMaxRating: 5,
  } as Ratings,
  reducers: {
    updateSelectedRatings(state, action: PayloadAction<number[]>) {
      const [selectedMinRating, selectedMaxRating] = action.payload;

      return {
        ...state,
        selectedMinRating,
        selectedMaxRating,
      };
    },
    resetRatings() {
      return {
        selectedMinRating: 0,
        selectedMaxRating: 5,
      };
    },
  },
});

export const { updateSelectedRatings, resetRatings } = ratingsSlice.actions;
export default ratingsSlice.reducer;

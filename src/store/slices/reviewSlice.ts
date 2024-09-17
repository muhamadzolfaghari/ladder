import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReviewState {
  step: number;
  strengths: string;
  weaknesses: string;
}
const initialState: ReviewState = {
  step: 1,
  strengths: "",
  weaknesses: "",
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
    setStrengths: (state, action) => {
      state.strengths = action.payload;
    },
    setWeaknesses: (state, action) => {
      state.weaknesses = action.payload;
    },
  },

});

// Export actions and reducer
export const { nextStep, previousStep, setStrengths, setWeaknesses } = reviewSlice.actions;
export default reviewSlice.reducer;


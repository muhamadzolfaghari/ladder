import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ReviewStatus = 'initial' | 'reviewPerformance1' | 'reviewPerformance2';

interface ReviewState {
  currentStep: ReviewStatus;
}

const initialState: ReviewState = {
  currentStep: 'initial',
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<ReviewStatus>) => {
      state.currentStep = action.payload;
    },
    showReviewPerformance1: (state, action: PayloadAction<void>) => {
      state.currentStep = 'reviewPerformance1';
    },
    showReviewPerformance2: (state, action: PayloadAction<void>) => {
      state.currentStep = 'reviewPerformance2';
    },
    resetReview: (state, action: PayloadAction<void>) => {
      state.currentStep = 'initial';
    },
  },
});

// Export actions and reducer
export const {
  setCurrentStep,
  showReviewPerformance1,
  showReviewPerformance2,

} = reviewSlice.actions;
export default reviewSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import promptsReducer from "../store/slices/promptsSlice";
import ladderReducer from "../store/slices/ladderSlice";
import reviewReducer from "../store/slices/reviewSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      prompts: promptsReducer,
      ladder: ladderReducer,
      review: reviewReducer,
    },
    
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

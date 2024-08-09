import Ladder from "@/types/Ladder";
import Prompt1Data from "@/types/Prompt1Data";
import Prompt2Data from "@/types/Prompt2Data";
import Prompt3Data from "@/types/Prompt3Data";
import PromptsStatus from "@/types/PromptsStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromptsState {
  status: PromptsStatus;
  ladder: Ladder;
  prompt1Data: Prompt1Data;
  prompt2Data: Prompt2Data;
  prompt3Data: Prompt3Data;
}

const initialState: PromptsState = {
  status: "prompt1",
  // prompt1Data: {} as Prompt1Data,
  // prompt2Data: {} as Prompt2Data,
  // prompt3Data: {} as Prompt3Data,
  prompt1Data: {
    field_of_study: "fd",
    goal: "dsf",
    current_level: "dfs",
  },
  prompt2Data: {
    time_commitment: "dfs",
    preferred_learning_style: "dsf",
    learning_pace: "dsf",
  },
  prompt3Data: {
    language: "dsf",
    preferred_tools_and_platforms: "dsf",
    resources_available: "dsf",
  },
  ladder: {} as Ladder,
};

const promptsSlice = createSlice({
  name: "prompts",
  initialState,
  reducers: {
    promptsStatusChanged: (state, action: PayloadAction<PromptsStatus>) => {
      state.status = action.payload;
    },
    prompt1Changed: (state, action: PayloadAction<Prompt1Data>) => {
      state.prompt1Data = action.payload;
    },
    prompt2Changed: (state, action: PayloadAction<Prompt2Data>) => {
      state.prompt2Data = action.payload;
    },
    prompt3Changed: (state, action: PayloadAction<Prompt3Data>) => {
      state.prompt3Data = action.payload;
    },
    ladderGenerated: (state, action: PayloadAction<Ladder>) => {
      state.ladder = action.payload;
    }
  },
});

export const {
  promptsStatusChanged,
  prompt1Changed,
  prompt2Changed,
  prompt3Changed,
  ladderGenerated
} = promptsSlice.actions;
export default promptsSlice.reducer;

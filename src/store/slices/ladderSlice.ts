import Ladder from "@/types/Ladder";
import Roadmap from "@/types/Roadmap";
import States from "@/types/States";
import WeekSheet from "@/types/WeekSheet";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LadderState {
  status: "ladder" | "roadmap" | "states" | "weeksheet";
  ladder: Ladder;
  roadmap: Roadmap;
  states: States;
  weeksheet: WeekSheet;
}

const initialState: LadderState = {
  status: "ladder",
  ladder: {} as Ladder,
  roadmap: {} as Roadmap,
  states: {} as States,
  weeksheet: {} as WeekSheet,
};

const ladderSlice = createSlice({
  name: "ladder",
  initialState,
  reducers: {
    statusChanged: (state, action: PayloadAction<LadderState['status']>) => {
      state.status = action.payload;
    },
    ladderUpdated: (state, action: PayloadAction<Ladder>) => {
      state.ladder = action.payload;
    },
    roadmapUpdated: (state, action: PayloadAction<Roadmap>) => {
      state.roadmap = action.payload;
    },
    statesUpdated: (state, action: PayloadAction<States>) => {
      state.states = action.payload;
    },
    weeksheetUpdated: (state, action: PayloadAction<WeekSheet>) => {
      state.weeksheet = action.payload;
    },
  },
});

export const {
  statusChanged,
  ladderUpdated,
  roadmapUpdated,
  statesUpdated,
  weeksheetUpdated,
} = ladderSlice.actions;
export default ladderSlice.reducer;

"use client";
import { Typography, Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import React, { PropsWithChildren } from "react";
import ModalAddTask from "./ModalAddTask";
import { usePhaseAccordion } from "../UI/PhaseAccordion/hooks/usePhaseAccordion";
import PhaseAccordion from "../UI/PhaseAccordion/PhaseAccordion";
import Ladder from "@/types/Ladder";
import { useStoreLearningPathWeekdays } from "./hooks/useStore";

interface Props {
  ladder: Ladder | undefined;
}

const TaskTrackerForDay = ({ ladder }: PropsWithChildren<Props>) => {
  const { expanded, handleExpandedChange } = usePhaseAccordion();
  const { isPending, mutate:storelearningPathWeekdays} =useStoreLearningPathWeekdays();
 
  const handleClick = () => {
    storelearningPathWeekdays();
  };


  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Today&#39;s tasks</Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", mt: 2 }}
      >
        <PhaseAccordion
          title={"Phase 1, Week 4 , Day 5"}
          index={0}
          expanded={expanded}
          onExpandedChange={handleExpandedChange}
        >
          <Typography>Day 5 Weekdays &#40;2 hours/day&#41;</Typography>
          {dailyRoutines?.map((dailyRoutine) => (
            <>
              <Typography key={dailyRoutine.task}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={`${dailyRoutine.time}:${dailyRoutine.task} - ${dailyRoutine.resource}`}
                />
              </Typography>
            </>
          ))}
        </PhaseAccordion>
      </Box>
      <ModalAddTask />
      <Box
        sx={{
          borderBottom: "1px solid #72796F",
          mt: "1.5rem",
        }}
      ></Box>
          <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 1 }}
          onClick={handleClick}
          disabled={isPending}
        >
          {isPending ? "is sending..." : "save data"}
        </Button>
    </Box>
  );
};

export default TaskTrackerForDay;

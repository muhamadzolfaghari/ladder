"use client";
import { Typography, Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { PropsWithChildren } from "react";
import ModalAddTask from "./ModalAddTask";
import { usePhaseAccordion } from "../UI/PhaseAccordion/hooks/usePhaseAccordion";
import PhaseAccordion from "../UI/PhaseAccordion/PhaseAccordion";
import Ladder from "@/types/Ladder";
import { useEffect } from "react";
import useLearningPathWeekdays from "./hooks/useLearningPath";
interface Props {
  ladder: Ladder | undefined;
}

const TaskTrackerForDay = ({ ladder }: PropsWithChildren<Props>) => {
  const { expanded, handleExpandedChange } = usePhaseAccordion();
  // const dailyRoutines = ladder?.learningPath?.[0]?.dailyRoutine || undefined;
const { mutate: learningPathWeekdays, data: learningPathWeekdaysData } =
  useLearningPathWeekdays();

useEffect(() => {
  learningPathWeekdays();
}, [learningPathWeekdaysData]);

useEffect(() => {
  console.log(learningPathWeekdaysData);
}, [learningPathWeekdaysData]);
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Today&#39;s tasks</Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", mt: 2 }}
      >
        <PhaseAccordion
          title={`Phase ${learningPathWeekdaysData?.phase} Week ${learningPathWeekdaysData?.weekDay}`}
          index={0}
          expanded={expanded}
          onExpandedChange={handleExpandedChange}
        >
          <Typography>Day 5 Weekdays &#40;2 hours/day&#41;</Typography>
          {learningPathWeekdaysData?.dailyRoutines?.map((dailyRoutine) => (
            <>
              <Typography key={dailyRoutine.time}>
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
    </Box>
  );
};

export default TaskTrackerForDay;

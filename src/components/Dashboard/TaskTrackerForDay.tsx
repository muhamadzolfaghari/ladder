"use client";
import { Typography, Box, Checkbox, FormControlLabel } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { PropsWithChildren } from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ModalAddTask from "./ModalAddTask";
import { usePhaseAccordion } from "../UI/PhaseAccordion/hooks/usePhaseAccordion";
import PhaseAccordion from "../UI/PhaseAccordion/PhaseAccordion";
import usePreviewLadder from "../Prompts/PreviewLadder/hooks/usePreviewLadder";
import { DailyRoutine, LearningPath } from "@/types/Ladder";

interface Props {
  learningPath: LearningPath[] | undefined;
}

const TaskTrackerForDay = ({ learningPath }: PropsWithChildren<Props>) => {
  const { expanded, handleExpandedChange } = usePhaseAccordion();

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
          {learningPath?.[0]?.dailyRoutine?.map((dailyTask, index) => (
            <>
              <Typography>Day 5 Weekdays &#40;2 hours/day&#41;</Typography>
              <Typography key={index}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={dailyTask.task}
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

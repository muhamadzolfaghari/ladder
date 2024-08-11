"use client";
import { Typography, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ModalAddTask from "./ModalAddTask";
import { usePhaseAccordion } from "../UI/PhaseAccordion/hooks/usePhaseAccordion";
import PhaseAccordion from "../UI/PhaseAccordion/PhaseAccordion";
import usePreviewLadder from "../Prompts/PreviewLadder/hooks/usePreviewLadder";
import PhaseDashboardLearningPath from "./PhaseDashboardLearningPath";

const TaskTrackerForDay = () => {
  const { expanded, handleExpandedChange } = usePhaseAccordion();
  const { ladder } = usePreviewLadder();
  console.log("kkkk" , ladder);
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Today&#39;s tasks</Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", mt: 2 }}
      >
        <PhaseAccordion
          title={"Phase 1: Introduction to Web Development"}
          index={0}
          expanded={expanded}
          onExpandedChange={handleExpandedChange}
        >
          <PhaseDashboardLearningPath  />
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

"use client";
import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { LearningPath } from "@/types/Ladder";
import { usePhaseAccordion } from "../PhaseAccordion/hooks/usePhaseAccordion";
import Phase from "./Phase";
import PhaseAccordion from "../PhaseAccordion/PhaseAccordion";

interface PhasesProps {
  learningPath: LearningPath[] | undefined;
}

export default function Phases({
  learningPath,
}: PropsWithChildren<PhasesProps>) {
  const { expanded, handleExpandedChange } = usePhaseAccordion();

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
      mb={2}
    >
      {learningPath?.map(({ phase, duration, dailyRoutine }, index) => (
        <PhaseAccordion
          key={index}
          title={`Phase ${index + 1}: ${phase} &#40;${duration}&#41;`}
          index={index}
          expanded={expanded}
          onExpandedChange={handleExpandedChange}
        >
          <Phase dailyRoutine={dailyRoutine} />
        </PhaseAccordion>
      ))}
    </Box>
  );
}

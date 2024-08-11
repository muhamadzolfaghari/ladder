"use client";
import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { LearningPath } from "@/types/Ladder";
import { usePhaseAccordion } from "../PhaseAccordion/hooks/usePhaseAccordion";
import Phase from "./Phase";
import PhaseAccordion from "../PhaseAccordion/PhaseAccordion";

interface PhasesProps {
  learningPaths: LearningPath[] | undefined;
}

export default function Phases({
  learningPaths,
}: PropsWithChildren<PhasesProps>) {
  const { expanded, handleExpandedChange } = usePhaseAccordion();

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
      mb={2}
    >
      {learningPaths?.map(({ phase, duration, dailyRoutines }, index) => (
        <PhaseAccordion
          key={index}
          title={`Phase ${index + 1}: ${phase} (${duration})`}
          index={index}
          expanded={expanded}
          onExpandedChange={handleExpandedChange}
        >
          <Phase dailyRoutines={dailyRoutines} />
        </PhaseAccordion>
      ))}
    </Box>
  );
}

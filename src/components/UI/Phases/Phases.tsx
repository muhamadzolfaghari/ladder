"use client";
import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { LearningPath } from "@/types/Ladder";
import { usePhases } from "./hooks/usePhases";
import Phase from "./Phase";

interface PhasesProps {
  learningPath: LearningPath[] | undefined;
}

export default function Phases({
  learningPath,
}: PropsWithChildren<PhasesProps>) {
  const { expanded, handleChange, theme } = usePhases();

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
      mb={2}
    >
      {learningPath?.map(({ phase, duration, dailyRoutine }, index) => (
        <Phase
          key={index}
          index={index}
          title={phase}
          duration={duration}
          dailyRoutine={dailyRoutine}
          expanded={expanded}
          onExpandedChange={handleChange}
        />
      ))}
    </Box>
  );
}

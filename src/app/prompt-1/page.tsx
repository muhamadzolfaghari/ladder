import PromptSteps from "@/components/PromptSteps";
import StepBar from "@/components/StepBar";
import { Box } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <>
      <Box sx={{ mt: 4, px: "1rem" }}>
        <StepBar />
        <PromptSteps />
      </Box>
    </>
  );
}

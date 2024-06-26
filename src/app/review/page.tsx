import PromptSteps from "@/components/PromptSteps";
import ReviewPrompt from "@/components/ReviewPrompt";
import StepBar from "@/components/StepBar";
import StepBarReview from "@/components/StepBarReview";
import { Box } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <>
      <Box sx={{ mt: 4, px: "1rem" }}>
        <StepBarReview />
        <ReviewPrompt />
      </Box>
    </>
  );
}

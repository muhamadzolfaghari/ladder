
import ReviewPrompt from "@/components/ReviewPrompt";
import StepBarReview from "@/components/StepBarReview";
import { Container } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <StepBarReview />
        <ReviewPrompt />
      </Container>
    </>
  );
}

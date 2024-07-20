"use client";
import ReviewPrompt from "@/components/ReviewPrompt";
import StepBarReview from "@/components/StepBarReview";
import { Box, Container, Typography } from "@mui/material";




export default function Page() {


  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <StepBarReview />
        <ReviewPrompt />
      </Container>
    </>
  );
}

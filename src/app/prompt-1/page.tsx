import PromptSteps from "@/components/PromptSteps";
import StepBar from "@/components/StepBar";
import { Box, Container } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <StepBar />
        <PromptSteps />
      </Container>
    </>
  );
}

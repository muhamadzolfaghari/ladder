import Prompt3 from "@/components/Prompts/Prompt3";
import StepBar from "@/components/StepBar";
import { Container } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <StepBar />
        <Prompt3 />
      </Container>
    </>
  );
}

import React from "react";
import { Box, Container } from "@mui/material";
import StepBarResult from "@/components/StepBarResult";
import ContentResult from "@/components/ContentResult";

export default function page() {
  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <StepBarResult />
        <ContentResult />
      </Container>
    </>
  );
}

import StepBar from "@/components/StepBar";
import { Box, Container } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <>
      <Box sx={{ mt: 4, display: { md: "none" } , px : '1rem' }}>
        <StepBar />
      </Box>
    </>
  );
}

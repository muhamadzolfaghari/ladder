import React from "react";
import { Box } from "@mui/material";
import StepBarResult from "@/components/StepBarResult";

export default function page() {
  return (
    <>
      <Box sx={{ mt: 4, display: { md: "none" }, px: "1rem" }}>
        <StepBarResult />
      </Box>
    </>
  );
}

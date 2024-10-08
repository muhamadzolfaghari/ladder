import React from "react";
import { Box, Typography, Container } from "@mui/material";
import BottomNav from "@/components/BottomNav";
import SliderProgressBar from "@/components/SliderProgressBar";
import InfoCardTime from "@/components/InfoCardTime";
import AllWeekLadder from "./AllWeekLadder";
export default function States() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Typography variant="h5" mb={2}>Ladder Overview</Typography>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{ fontSize: "1.375rem" }}
      >
        Full-Stack Web Development
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, fontSize: " 1.375rem" }}>
        Progress
      </Typography>
      <SliderProgressBar />
      <InfoCardTime />
    
      <Box
        my={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "flex-start",
        }}
      >
  <Typography variant="h5" mt={2}>Phase 1 performance</Typography>
      <AllWeekLadder />
      </Box>

    </Container>
  );
}

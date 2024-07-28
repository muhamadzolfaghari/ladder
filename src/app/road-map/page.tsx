"use client";
import React from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PhasePrompt from "@/components/PhasePrompt";
export default function page() {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <Box>
          <IconButton
            sx={{ alignSelf: "flex-start" }}
            onClick={handleBackClick}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
            Full-Stack Web Development
          </Typography>
        </Box>
        <PhasePrompt />
      </Container>
    </>
  );
}

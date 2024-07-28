"use client";
import React from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PhasePrompt from "@/components/PhasePrompt";
import BottomNav from "@/components/BottomNav";

export default function page() {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
 <Box sx={{ flexGrow: 1 }}>          <IconButton
            sx={{ alignSelf: "flex-start" }}
            onClick={handleBackClick}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
            Full-Stack Web Development
          </Typography>
        <PhasePrompt />
        </Box>

        <Box
          sx={{
            display: "flex",
            
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: "column",
          }}
        >
          <BottomNav />
        </Box>
      </Container>
    </>
  );
}

"use client";
import React from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import BottomNav from "@/components/BottomNav";
import usePreviewLadder from "@/components/Prompts/PreviewLadder/hooks/usePreviewLadder";
import Phases from "@/components/UI/Phases";

export default function RoadMap() {
  const { ladder, createLadderIsPending } = usePreviewLadder();

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
        <Box sx={{ flexGrow: 1 }}>
          {" "}
          <IconButton
            sx={{ alignSelf: "flex-start" }}
            onClick={handleBackClick}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
            Full-Stack Web Development
          </Typography>
          <Phases learningPath={ladder?.learningPath} />
        </Box>
      </Container>
    </>
  );
}

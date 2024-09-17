"use client";
import React from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import usePreviewLadder from "@/components/Prompts/PreviewLadder/hooks/usePreviewLadder";
import Phases from "@/components/UI/Phases";

export default function RoadMap() {
  const { ladder } = usePreviewLadder();

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
          <Phases learningPaths={ladder?.learningPaths} />
        </Box>
      </Container>
    </>
  );
}

"use client";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import React from "react";
import useReviewPrompt from "./hooks/useReviewPrompt";
import GenerateLadderLoading from "../GenerateLadderLoading";

export default function ReviewPrompt() {
  const {
    field_of_study,
    current_level,
    goal,
    language,
    learning_pace,
    preferred_learning_style,
    preferred_tools_and_platforms,
    resources_available,
    time_commitment,
    handleEditPrompt,
    handleCreateLadder,
    generateLadderIsPending,
  } = useReviewPrompt();

  if (generateLadderIsPending) {
    return <GenerateLadderLoading />;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Review Your prompt</Typography>
      <Typography variant="body1">
        Let&#10076;s have a last check on what you want in
      </Typography>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">1 .Field-Specific</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{field_of_study}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">2 . Goal</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{goal}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">3 . Current Level:</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{current_level}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">4 . Time Commitment:</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{time_commitment}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">5 .Preferred Learning Style:</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{preferred_learning_style}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">6 .</Typography>
          <Typography variant="h4">Learning Pace</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{learning_pace}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">7 .</Typography>
          <Typography variant="h4">Resources Available</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{resources_available}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">8 .</Typography>
          <Typography variant="h4">Language</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{language}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">9 .</Typography>
          <Typography variant="h4">Preferred Tools and Platforms</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              {preferred_tools_and_platforms}
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2, mb: 12, display: "flex", gap: "1rem" }}>
        <Button
          sx={{
            width: "30%",
            background: "white",
            border: "1.5px solid #72796F",
            color: "#72796F",
            "&:hover": {
              background: "#fff",
            },
          }}
          onClick={handleEditPrompt}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleCreateLadder}
        >
          Create Ladder
        </Button>
      </Box>
    </Box>
  );
}

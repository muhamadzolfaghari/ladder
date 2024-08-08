"use client";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import React from "react";
import useReviewPrompt from "./hooks/useReviewPrompt";
import Ladder from "@/types/Ladder";

interface ReviewPromptProps {
  ladder: Ladder;
}

export default function ReviewPrompt({ ladder }: ReviewPromptProps) {

  console.log("ladder", ladder);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Review Your prompt</Typography>
      <Typography variant="body1">
        Let&#10076;s have a last check on what you want in Ladder.
      </Typography>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">1 .</Typography>
          <Typography variant="h4">Field-Specific</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{ladder.fieldOfStudy}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">2 .</Typography>
          <Typography variant="h4">Goal</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{ladder.goal}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">3 .</Typography>
          <Typography variant="h4">Current Level:</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{ladder.currentLevel}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">4 .</Typography>
          <Typography variant="h4">Time Commitment:</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{ladder.timeCommitment}</Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">5 .</Typography>
          <Typography variant="h4">Preferred Learning Style:</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              {ladder.preferredLearningStyle}
            </Typography>
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
            <Typography variant="body1">{ladder.learningPace}</Typography>
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
            <Typography variant="body1">
              {ladder.resourcesAvailable}
            </Typography>
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
            <Typography variant="body1">{ladder.language}</Typography>
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
              {ladder.preferredToolsAndPlatforms}
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2, mb: 12, display: "flex", gap: "1rem" }}>
        <Button
          href="/prompt-1"
          sx={{
            width: "30%",
            background: "white",
            border: "1.5px solid #72796F",
            color: "#72796F",
            "&:hover": {
              background: "#fff",
            },
          }}
        >
          Edit
        </Button>

        <Button variant="contained" sx={{ width: "100%" }} href="/result">
          Create Ladder
        </Button>
      </Box>
    </Box>
  );
}

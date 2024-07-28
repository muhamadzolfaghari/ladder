"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import PhasePrompt from "./PhasePrompt";

export default function ContentResult() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Full-Stack Web Development
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5">Overview</Typography>
        <List sx={{ listStyleType: "disc", pl: 3 }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            Duration: 12 months
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            Time Commitment: 2 hours daily on weekdays, 4 hours on weekends
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            Goal: Proficiency in full-stack web development, ability to build
            and deploy fully functional web applications, and obtaining a
            certification within 12 months
          </ListItem>
        </List>
      </Box>
      <PhasePrompt/>
      <Box
        sx={{
          mt: 10,

          mb: 12,
          display: "flex",
          gap: "2rem",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            background: "white",
            width: "100%",
            color: "#72796F",
            "&:hover": {
              background: "#fff",
            },
          }}
        >
          Back to prompt
        </Button>

        <Button variant="contained" href="/start-ladder" sx={{ width: "100%" }}>
          Start Ladder
        </Button>
      </Box>
    </Box>
  );
}

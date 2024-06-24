import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function ReviewPrompt() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Review Your prompt</Typography>
      <Typography variant="body1">
        Lets have a last check on what you want in Ladder.
      </Typography>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">1 .</Typography>
          <Typography variant="h4">Field-Specific</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Git,
              deployment processes.
            </Typography>
          </ListItem>
        </List>
      </Box>

      {/* goals */}
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">2 .</Typography>
          <Typography variant="h4">Goal</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              To become proficient in full-stack web development.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Achieve competency in building and deploying fully functional web
              applications.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Obtain a certification in web development within 12 months.
            </Typography>
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
            <Typography variant="body1">
              Basic understanding of HTML, CSS, and JavaScript.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              No prior experience with backend development or databases.
            </Typography>
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
            <Typography variant="body1">2 hours daily on weekdays.</Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">4 hours on weekends.</Typography>
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
              Combination of reading, watching videos, and hands-on practice.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Prefer structured online courses with projects and quizzes.
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
            <Typography variant="body1">
              Moderate pace, aiming to complete beginner to advanced material
              within 12 months.
            </Typography>
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
              Budget of $500 for courses, books, and tools.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Access to a personal laptop with internet connectivity.
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
            <Typography variant="body1">English</Typography>
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
              Learning platforms: Codecademy, Coursera, Udemy.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Tools: VS Code, GitHub, Postman.
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
        >
          Edit
        </Button>

        <Button sx={{ width: "100%" }} href="/result">
          Create Ladder
        </Button>
      </Box>
    </Box>
  );
}

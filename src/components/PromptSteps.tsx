import React from "react";
import { Button, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { TextField, List } from "@mui/material";
import Link from "next/link";
export default function PromptSteps() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Write The Prompt</Typography>
      <Typography variant="body1">
        Lets give Gemini what it need to create your first Ladder.{" "}
      </Typography>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">1 .</Typography>
          <Typography variant="h4">Field-Specific</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Any specific certifications, prerequisites, or foundational
              knowledge required.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Key topics or subfields that need to be covered.
            </Typography>
          </ListItem>
        </List>
        {/* Field-Specific */}
        <Box component={"form"} sx={{ mt: 3 }}>
          <TextField
            label="Field-Specific"
            InputLabelProps={{ shrink: true }}
            multiline
            rows={6}
            placeholder="Key topics: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Git, deployment processes.
            Foundational knowledge: Basic computer science principles, understanding of HTTP and RESTful APIs."
            fullWidth
          />
        </Box>
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
              Specific end goal or competency you want to achieve.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Any milestones or intermediate goals.
            </Typography>
          </ListItem>
        </List>
        {/* Field-Specific */}
        <Box component={"form"} sx={{ mt: 3 }}>
          <TextField
            label="Goal"
            InputLabelProps={{ shrink: true }}
            multiline
            rows={6}
            placeholder="To become proficient in full-stack web development.
            Achieve competency in building and deploying fully functional web applications.
            Obtain a certification in web development within 12 months."
            fullWidth
          />
        </Box>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">3 .</Typography>
          <Typography variant="h4">Current Level:</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Your current knowledge or skill level in the field.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              Any related skills or experience you already have.
            </Typography>
          </ListItem>
        </List>
        {/* Field-Specific */}
        <Box component={"form"} sx={{ mt: 3 }}>
          <TextField
            label="Current Level"
            InputLabelProps={{ shrink: true }}
            multiline
            rows={4}
            placeholder="Basic understanding of HTML, CSS, and JavaScript.
            No prior experience with backend development or databases."
            fullWidth
          />
        </Box>
      </Box>
      <Box sx={{ mt: 4, pl: 2, mb: 12 }}>
        <Link href={"/prompt-2"}>
          <Button sx={{ width: "100%" }} variant={"contained"}>
            Next
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

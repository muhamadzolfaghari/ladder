"use client";

import React from "react";
import {
  Button,
  ListItem,
  Typography,
  Box,
  TextField,
  List,
} from "@mui/material";
import usePrompt1 from "./hooks/usePrompt1";

export default function PromptSteps() {
  const { onSubmit, errors, handleSubmit, register } = usePrompt1();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Write The Prompt</Typography>
      <Typography variant="body1">
        Let&apos;s give Gemini what it needs to create your first Ladder.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Box sx={{ mt: 3 }}>
            <TextField
              label="Field-Specific"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={6}
              {...register("field_of_study")}
              error={!!errors.field_of_study}
              helperText={errors.field_of_study?.message}
              placeholder="Key topics: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Git, deployment processes. Foundational knowledge: Basic computer science principles, understanding of HTTP and RESTful APIs."
              fullWidth
            />
          </Box>
        </Box>

        {/* Goal */}
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

          <Box sx={{ mt: 3 }}>
            <TextField
              label="Goal"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={6}
              {...register("goal")}
              error={!!errors.goal}
              helperText={errors.goal?.message}
              placeholder="To become proficient in full-stack web development. Achieve competency in building and deploying fully functional web applications. Obtain a certification in web development within 12 months."
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
          <Box mt={3}>
            <TextField
              label="Current Level"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              {...register("current_level")}
              error={!!errors.current_level}
              helperText={errors.current_level?.message}
              placeholder="Basic understanding of HTML, CSS, and JavaScript. No prior experience with backend development or databases."
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4, pl: 2, mb: 12 }}>
          <Button type="submit" sx={{ width: "100%" }} variant={"contained"}>
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
}

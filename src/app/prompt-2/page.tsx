import PromptSteps from "@/components/PromptSteps";
import StepBar from "@/components/StepBar";
import { Box, Button, List, ListItem, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Box sx={{ mt: 4, display: { md: "none" }, px: "1rem" }}>
        <StepBar />
        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">4 .</Typography>
            <Typography variant="h4">Time Commitment</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Daily/Weekly time available for study and practice.
              </Typography>
            </ListItem>
          </List>
          {/* Field-Specific */}
          <Box component={"form"} sx={{ mt: 3 }}>
            <TextField
              label="Time Commitment"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              placeholder="2 hours daily on weekdays.
                4 hours on weekends."
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">5 .</Typography>
            <Typography variant="h4">Preferred Learning Style:</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Do you prefer reading, watching videos, hands-on practice, or a
                combination?
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Any specific resources or types of resources you prefer (e.g.,
                books, online courses, tutorials).
              </Typography>
            </ListItem>
          </List>
          {/* Field-Specific */}
          <Box component={"form"} sx={{ mt: 3 }}>
            <TextField
              label="Learning style"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              placeholder="Combination of reading, watching videos, and hands-on practice.

                  Prefer structured online courses with projects and quizzes."
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">6 .</Typography>
            <Typography variant="h4">Learning Pace</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                How quickly you prefer to move through the material.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Any deadlines or time constraints.
              </Typography>
            </ListItem>
          </List>
          {/* Field-Specific */}
          <Box component={"form"} sx={{ mt: 3 }}>
            <TextField
              label="Learning Pace"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              placeholder="Moderate pace, aiming to complete beginner to advanced material within 12 months.
              Specific goal to complete beginner level in 3 months, intermediate in 6 months, and advanced in 12 months."
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4, pl: 2, mb: 12 }}>
          <Link href={"/prompt-3"}>
            <Button sx={{ width: "100%" }}>Next</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

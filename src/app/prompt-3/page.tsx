import StepBar from "@/components/StepBar";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <StepBar />
        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">7 .</Typography>
            <Typography variant="h4">Resources Available</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Budget for learning materials and courses.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Access to tools, software, or equipment needed for practice.
              </Typography>
            </ListItem>
          </List>
          {/* Field-Specific */}
          <Box component={"form"} sx={{ mt: 3 }}>
            <TextField
              label="Resources Available"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              placeholder="Budget of $500 for courses, books, and tools.
              Access to a personal laptop with internet connectivity."
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">8 .</Typography>
            <Typography variant="h4">Language</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                The language you prefer or need for learning materials and
                resources.
              </Typography>
            </ListItem>
          </List>
          {/* Field-Specific */}
          <Box component={"form"} sx={{ mt: 3 }}>
            <TextField
              label="English"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              placeholder="English"
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">9 .</Typography>
            <Typography variant="h4">Preferred Tools and Platforms</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                How quickly you prefer to move through the material.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Any particular tools, platforms, or software you plan to use for
                learning.
              </Typography>
            </ListItem>
          </List>
          {/* Field-Specific */}
          <Box component={"form"} sx={{ mt: 3 }}>
            <TextField
              label="Tools and Platforms"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              placeholder="Learning platforms: Codecademy, Coursera, Udemy.
              Tools: VS Code, GitHub, Postman."
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4, pl: 2, mb: 12 }}>
          <Link href={"/review"}>
            <Button variant="contained" sx={{ width: "100%" }}>
              Review Your Prompt
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}

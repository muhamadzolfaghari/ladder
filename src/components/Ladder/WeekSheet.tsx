"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Timeline, Assignment, BarChart, Margin } from "@mui/icons-material";
import BottomNav from "@/components/BottomNav";
import theme from "@/lib/resources/theme";


export default function WeekSheet() {
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box
        p={2}
        my={3}
        borderRadius={2}
        sx={{ bgcolor: theme.palette.primary.main }}
      >
        <Typography variant="h5" color={"white"}>Phase 1, Week 4</Typography>
      </Box>
      
      <Accordion>
        <AccordionSummary
          sx={{
            backgroundColor: "white !important",

            "& .MuiTypography-root": {
              color: "#2D322C",
            },
          }}
          expandIcon={
            expanded === "panel1" ? (
              <ArrowDropDownIcon fontSize="large" />
            ) : (
              <ArrowRightIcon fontSize="large" />
            )
          }
        >
          <Typography>
            {`Day ${1} ${5 ? "Weekdays" : "Weekends"} (${5 ? "2 hours/day" : "4 hours/day"})`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="1 hour: Online course (HTML, CSS, JavaScript basics) – Codecademy or Udemy."
            />
            <FormControlLabel
              control={<Checkbox />}
              label="1 hour: Online course (HTML, CSS, JavaScript basics) – Codecademy or Udemy."
            />
          </>
        </AccordionDetails>
      </Accordion>

      <Box
      my={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "start",
        }}
      >
        <Button variant="contained" color="success" fullWidth>
          Review Your Performance
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: "column",
        }}
      >
        <BottomNav />
      </Box>
    </Container>
  );
}

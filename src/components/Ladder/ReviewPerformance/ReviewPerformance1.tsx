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


export default function ReviewPerformance1() {
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

"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import theme from "@/lib/resources/theme";
import { useAppSelector } from "@/hooks/reduxHooks";
import Ladder from "../Ladder";
import ReviewPerformance1 from "../ReviewPerformance/ReviewPerformance1";
import ReviewPerformance2 from "../ReviewPerformance/ReviewPerformance2";

export default function WeekSheet() {
  const currentStep = useAppSelector((state) => state.review.currentStep);

  const [expanded, setExpanded] = useState<string | false>(false);



    const renderContent = () => {
    switch (currentStep) {
    case "reviewPerformance1":
      return <ReviewPerformance1/>;
    case "reviewPerformance2":
      return <ReviewPerformance2/>;
    case "error":
      return <Ladder />;
    default:
      return <div>Nothing matched</div>;
  }}

 

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
          onClick={() => setExpanded(expanded === "panel1" ? false : "panel1")}
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
          justifyContent: "flex-end",
        }}
      >
        {renderContent()}
      </Box>
    </Container>
  );
}

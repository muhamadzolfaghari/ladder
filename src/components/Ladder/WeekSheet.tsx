"use client";

import React, { PropsWithChildren, useState } from "react";
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
import ReviewPerformance1 from "./ReviewPerformance/ReviewPerformance1/ReviewPerformance1";
import ReviewPerformance2 from "./ReviewPerformance/ReviewPerdormance2/ReviewPerformance2";
import Ladder from "@/types/Ladder";

interface Props {
  ladder: Ladder | undefined;
}

export default function WeekSheet({ ladder }: PropsWithChildren<Props>) {
  const currentStep = useAppSelector((state) => state.review.currentStep);
  const [expanded, setExpanded] = useState<string | false>(false);
  const dailyRoutines = ladder?.learningPaths?.[0]?.dailyRoutines || undefined;

  const renderContent = () => {
    switch (currentStep) {
      case "reviewPerformance1":
        return <ReviewPerformance1 />;
      case "reviewPerformance2":
        return <ReviewPerformance2 />;
      default:
        return <div>Nothing matched</div>;
    }
  };

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
        <Typography variant="h5" color={"white"}>
          Phase 1, Week 4
        </Typography>
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
          {dailyRoutines?.map((dailyRoutine) => (
            <>
              <Typography key={dailyRoutine.task}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={`${dailyRoutine.time}:${dailyRoutine.task} - ${dailyRoutine.resource}`}
                />
              </Typography>
            </>
          ))}
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
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 1 }}
          onClick={() => {
            renderContent();
          }}
        >
          Review Your Performance
        </Button>
      </Box>
    </Container>
  );
}

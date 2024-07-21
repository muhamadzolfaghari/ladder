"use client";
import {
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useTheme,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";

import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ModalAddTask from "./ModalAddTask";

const TaskTrackerForDay = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme = useTheme();
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Today&#39;s tasks</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              sx={{
                backgroundColor: expanded === "panel1" ? "#22983C" : "#526350",
              }}
              expandIcon={
                expanded === "panel1" ? (
                  <ArrowDropDownIcon
                    fontSize="large"
                    sx={{ color: theme.palette.primary.contrastText }}
                  />
                ) : (
                  <ArrowRightIcon
                    fontSize="large"
                    sx={{ color: theme.palette.primary.contrastText }}
                  />
                )
              }
            >
              <Typography>Phase 1, Week 4, Day 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ mt: 2, mb: 3 }}>
                <Typography variant="body1">
                  Day 5 Weekdays (2 hours/day)
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="1 hour: Online course (HTML, CSS, JavaScript basics) – Codecademy or Udemy."
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="1 hour: Online course (HTML, CSS, JavaScript basics) – Codecademy or Udemy."
                  />
                </FormGroup>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
      <ModalAddTask />
      <Box
        sx={{
          borderBottom: "1px solid #72796F",
          mt:'1.5rem'
        }}
      ></Box>
    </Box>
  );
};

export default TaskTrackerForDay;

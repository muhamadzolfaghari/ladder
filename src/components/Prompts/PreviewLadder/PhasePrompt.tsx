"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { PropsWithChildren } from "react";
import { usePreviewLadderPhases } from "./hooks/usePreviewLadderPhases";
import Ladder, { LearningPath, LearningTask } from "@/types/Ladder";
import ListSectionAccordian from "./ListSectionAccordian";

interface LadderInterface {
  ladder: Ladder;
}

export default function PhasePrompt(props: PropsWithChildren<LadderInterface>) {
  const { expanded, handleChange, theme } = usePreviewLadderPhases();
  const { ladder } = props;

  const detailLearningPath: LearningPath[] = ladder.learningPath;
  const detailPath = detailLearningPath.map((item) =>
    item.dailyRoutine.map((item) => item)
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
      mb={2}
    >
      {detailLearningPath.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            sx={{
              backgroundColor:
                expanded === `panel${index + 1}` ? "#22983C" : "#526350",
            }}
            expandIcon={
              expanded === `panel${index + 1}` ? (
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
            <Typography>
              Phase {index + 1}: {item.phase} &#40;{item.duration}&#41;
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mt: 2, mb: 3 }}>
              <ListSectionAccordian
                title="Weekly Schedule:"
                itemEl={item.dailyRoutine}
              />
              <ListSectionAccordian
                title="Key Topics:"
                itemEl={item.dailyRoutine}
              />
              <ListSectionAccordian
                title="Resources:"
                itemEl={item.dailyRoutine}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

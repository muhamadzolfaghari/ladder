"use client";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import LogoIconPrompt from "/public/icons/Vector-promt-complete.svg";
import LogoIconReview from "/public/icons/Vector-complete-review.svg";
import LogoIconLadder from "/public/icons/Vector-ready-ladder.svg";

const steps = [
  { label: "Prompt", icon: LogoIconPrompt },
  { label: "Review", icon: LogoIconReview },
  { label: "Ladder", icon: LogoIconLadder },
];

export default function StepBarReview() {
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={() => (
                <div>
                  <Image
                    src={step.icon}
                    alt={step.label}
                    width={24}
                    height={24}
                  />
                </div>
              )}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

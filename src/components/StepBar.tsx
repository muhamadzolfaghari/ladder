"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LogoIconPrompt from  "../../public/icons/Vector-complete-review.svg";
import LogoIconReview from "/public/icons/Review-vector.svg";
import LogoIconLadder from "/public/icons/Vector-ladder.svg";
import Image from "next/image";

const steps = [
  { label: "Prompt", icon: LogoIconPrompt },
  { label: "Review", icon: LogoIconReview },
  { label: "Ladder", icon: LogoIconLadder },
];

export default function StepBar() {
  const [activeStep, setActiveStep] = useState<number>(0);

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

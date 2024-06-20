"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Container } from "@mui/material";
import Link from "next/link";

interface Step {
  imageSrc: string;
  title: string;
  description: string;
  nextLink: string;
}

export default function GetStartSteps() {
  const steps: Step[] = [
    {
      imageSrc: "android/android-launchericon-192-192.png",
      title: "What is Ladder?",
      description:
        "Ladder is your roadmap for learning anything and tracking your progress. Our AI crafts a learning path tailored to your conditions and preferences.",
      nextLink: "/?step=2",
    },
    {
      imageSrc: "android/android-launchericon-192-192.png",
      title: "How It Works?",
      description:
        "Simply provide an accurate and comprehensive prompt for our AI model, Gemini. It will then create a customized Ladder just for you.",
      nextLink: "/?step=3",
    },
    {
      imageSrc: "android/android-launchericon-192-192.png",
      title: "Let’s Kick Off",
      description:
        "Create your first Ladder and start your journey. Whether it's small daily tasks or major milestones, Ladder supports you every step of the way.",
      nextLink: "/",
    },
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
<<<<<<< HEAD

=======
   
>>>>>>> master
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          flexDirection: "column",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <img
          src={steps[currentStep].imageSrc}
          alt={steps[currentStep].title}
          style={{ width: "100%", maxWidth: "400px", marginBottom: "2rem" }}
        />
        <Typography variant="h4" mb={2}>
          {steps[currentStep].title}
        </Typography>
        <Typography variant="body1" mb={3} align="center">
          {steps[currentStep].description}
        </Typography>

        {currentStep < steps.length - 1 ? (
          <Button
            variant="contained"
            color="primary"
            sx={{ height: "48px", marginBottom: "0.5rem" }}
            onClick={handleNext}
            fullWidth
          >
            Next
          </Button>
        ) : (
          <Link
            href={steps[currentStep].nextLink}
            passHref
            style={{ width: "100%" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ height: "48px", marginBottom: "0.5rem" }}
              fullWidth
            >
              Get Started
            </Button>
          </Link>
        )}
      </Box>
    </Container>
  );
}

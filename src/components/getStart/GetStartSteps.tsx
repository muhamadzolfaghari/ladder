"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";
import { useUpdateVisitorStatus, useVisitorStatus } from "@/hooks/VisitorStatus";

// Define the interface for each step
interface Step {
  imageSrc: string;
  title: string;
  description: string;
  nextLink?: string;
}
const steps: Step[] = [
  {
    
    imageSrc: "/Images/startstep1.svg",
    title: "What is Ladder?",
    description:
      "Ladder is your roadmap for learning anything and tracking your progress. Our AI crafts a learning path tailored to your conditions and preferences.",
  },
  {
    imageSrc: "/Images/startstep2.svg",
    title: "How It Works?",
    description:
      "Simply provide an accurate and comprehensive prompt for our AI model, Gemini. It will then create a customized Ladder just for you.",
  },
  {
    imageSrc: "/Images/startstep3.svg",
    title: "Let’s Kick Off",
    description:
      "Create your first Ladder and start your journey. Whether it's small daily tasks or major milestones, Ladder supports you every step of the way.",
    nextLink: "/prompt-1",
  },
];

export default function GetStartSteps() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const router = useRouter();
  const { data: visitorStatus } = useVisitorStatus();
  const { mutate: updateVisitorStatus } = useUpdateVisitorStatus();

  useEffect(() => {
    if (!visitorStatus?.hasVisitedGettingStarted) {
      updateVisitorStatus({ hasVisitedGettingStarted: true ,
        hasCompletedGettingStarted:true
       });
    }

    if (visitorStatus?.hasCompletedGettingStarted) {
      router.push('/prompt');
    }
  }, [visitorStatus, updateVisitorStatus, router]);

  useEffect(() => {
    const handlePopstate = () => {
      setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.history.pushState(null, '', window.location.href); // Add a new url to the history browser
    } else {
      updateVisitorStatus({
        hasCompletedGettingStarted: true,
        hasVisitedGettingStarted: true,
      });
      router.push('/prompt-1');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Image
          width={500}
          height={340}
          src={steps[currentStep].imageSrc}
          alt={steps[currentStep].title}
          style={{ marginBottom: "2rem" }}
        />
        <Typography variant="h4" mb={2}>
          {steps[currentStep].title}
        </Typography>
        <Typography variant="body1" mb={3} align="center">
          {steps[currentStep].description}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ height: "48px", marginBottom: "0.5rem" }}
          onClick={handleNext}
          fullWidth
        >
          {currentStep < steps.length - 1 ? "Next" : "Get Started"}
        </Button>
      </Box>
    </Container>
  );
}

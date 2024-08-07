"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import useGetStartSteps from "./hooks/useGetStartSteps";
import { STEPS } from "./resources/steps";

export default function GetStartSteps() {
  const { currentStep, handleNext } = useGetStartSteps();

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
          src={STEPS[currentStep].imageSrc}
          alt={STEPS[currentStep].title}
          style={{ marginBottom: "2rem" }}
        />
        <Typography variant="h4" mb={2}>
          {STEPS[currentStep].title}
        </Typography>
        <Typography variant="body1" mb={3} align="center">
          {STEPS[currentStep].description}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ height: "48px", marginBottom: "0.5rem" }}
          onClick={handleNext}
          fullWidth
        >
          {currentStep < STEPS.length - 1 ? "Next" : "Get Started"}
        </Button>
      </Box>
    </Container>
  );
}

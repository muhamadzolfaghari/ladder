'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from "react";
import steps from "@/lib/resources/getStartConst";
import { Container } from '@mui/material';
import Link from 'next/link';

export default function GetStartSteps () {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <Container maxWidth="sm">
        <Box
      sx={{
        flexDirection: 'column',
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
       <img
        src={steps[currentStep].imageSrc}
        alt={steps[currentStep].title}
        style={{ width: '100%', maxWidth: '400px', marginBottom: '2rem' }}
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
            sx={{ height: '48px', marginBottom: '0.5rem' }}
            onClick={handleNext}
            fullWidth
          >
            Next
          </Button>
        ) : (
          <Link              
          href={steps[currentStep].nextLink} passHref
          style={{width: '100%'}}
          >
            <Button
            
              variant="contained"
              color="primary"
              sx={{ height: '48px', marginBottom: '0.5rem' }}
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

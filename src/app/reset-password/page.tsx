"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoImage from "../../../public/images/logo.svg";
import RequestCode from "@/components/RequestCode";
import EnterCode from "@/components/EnterCode";
import ResetPassword from "@/components/ResetPassword";
import { useRouter } from "next/navigation";

export default function Page() {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");


  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
    localStorage.setItem("step", String(step + 1)); // Store current step in localStorage if needed
  };
  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
      localStorage.setItem("step", String(step - 1)); // Store current step in localStorage if needed
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Image
          width={177}
          height={47}
          style={{ margin: "1rem" }}
          src={logoImage.src}
          alt="ladder logo"
        />
        <Typography variant="h6" gutterBottom>
          Your AI Learning Assistance :)
        </Typography>
        <Box mt={5}>
          {step === 1 && (
            <RequestCode
              email={email}
              setEmail={setEmail}
              nextStep={handleNextStep}
            />
          )}
          {step === 2 && (
            <EnterCode nextStep={handleNextStep} prevStep={handlePrevStep} />
          )}
          {step === 3 && (
            <ResetPassword
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              prevStep={handlePrevStep}/>
          )}
        </Box>
      </Box>
    </Container>
  );
}

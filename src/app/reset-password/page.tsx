"use client";
import {
  Box,  Container,
  Typography,
} from "@mui/material";
import React, { useState }  from "react";
import Image from "next/image";
import logoImage from "../../../public/Images/Logo.svg";
import RequestCode from "@/components/RequestCode";
import EnterCode from "@/components/EnterCode";
import ResetPassword from "@/components/ResetPassword";

export default function Page() {

    const [step, setStep] = useState<number>(1);
    const [email, setEmail] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
  
    const handleNextStep = () => setStep(step + 1);
    const handlePrevStep = () => setStep(step - 1);
  return (
    <Container maxWidth="sm" >
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
        {step === 1 && <RequestCode email={email} setEmail={setEmail} nextStep={handleNextStep} />}
        {step === 2 && <EnterCode code={code} setCode={setCode} nextStep={handleNextStep} prevStep={handlePrevStep} />}
        {step === 3 && (
          <ResetPassword
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            prevStep={handlePrevStep}
          />
        )}
      </Box>
      </Box>
    </Container>
  );
}

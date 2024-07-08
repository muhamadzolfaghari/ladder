import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

interface EnterCodeProps {
  nextStep: () => void;
  prevStep: () => void;
}

export default function EnterCode({  nextStep, prevStep}: EnterCodeProps) {

  const [otp, setOtp] = useState<string>('');

  const handleChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Verify code
    nextStep();
  };

  return (
    <Box width="100%" mt={2}>
      <Typography variant="h5" gutterBottom>
        Reset Your Password
      </Typography>
      <Typography variant="body1">
        In order to reset password please insert the code that we sent to your
        mailbox.{" "}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <MuiOtpInput
        margin="normal"
        mt={6}
          length={6}
          value={otp}
          onChange={handleChange}
          TextFieldsProps={{ inputProps: { style: { textAlign: 'center' } } }}/>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 6 , mt:2 }}
          disabled={otp.length < 6}
        >
          Reset Password
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1" mb={1}>
          Don&#39;t received email?
        </Typography>
  
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="primary">
            Resend
          </Typography>
          <ArrowForwardIcon
            color="primary"
            sx={{ width: 18, height: 18, marginLeft: 0.5 }}
          />
        </Link>
      </Box>
    </Box>
  );
}

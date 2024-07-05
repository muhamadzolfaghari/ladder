import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { FormEvent } from "react";
interface RequestCodeProps {
    email: string;
    setEmail: (email: string) => void;
    nextStep: () => void;
  }

export default function RequestCode({ email, setEmail, nextStep }: RequestCodeProps) {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Send email to server to request code
        nextStep();
      };
    return(
        <Box width="100%" mt={2}>
        <Typography variant="h5" gutterBottom>
        Reset Your Password
        </Typography>
        <Typography variant="body1">
        For recovery your password please insert your email and then we will send you a code to insert.
        </Typography>
          <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            InputLabelProps={{ shrink: true }}
            placeholder="youremail@gmail.com"
            fullWidth
            sx={{ marginBottom: 2 }}
            margin="normal"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
            <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mb: 6 }}
          >
            Send Code
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
              href="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" color="primary">
              Back to Login
              </Typography>
              <ArrowForwardIcon
                color="primary"
                sx={{ width: 18, height: 18, marginLeft: 0.5 }}
              />
            </Link>
        
          </Box>
        </Box>
    )
}
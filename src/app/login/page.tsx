"use client"
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  colors,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logoImage from "../../../public/Images/Logo.svg"
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { email, password };
    try {
      const res = await fetch("/api/login", { method: "POST",body: JSON.stringify(data)});
      if (res.ok) {
        const result = await res.json();
        localStorage.setItem("userName", result.data.name);
        localStorage.setItem("email", data.email); //result.email return undefind

        console.log("Logged in successfully:", result.data);
      } else {
        console.error("Login failed");
      }
    } catch (err) {
      console.log("error", err);
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
          alt="Wait screen illustration"
        />
        <Typography variant="h6" gutterBottom>
          Hey! Great to see you :)
        </Typography>
        <Box  width="100%">
        <form
            
            onSubmit={handleSubmit} >

        <Box width="100%" mt={3} >
          <Typography variant="h4" mb={2}>
            Login to your account{" "}
          </Typography>
          <TextField
            label="Email"
            InputLabelProps={{ shrink: true }}
            placeholder="youremail@gmail.com"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="********"
              InputLabelProps={{ shrink: true }}
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Link
                      href="/reset-password"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      forget?
                    </Link>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mb: 6 }}
          >
            Login
          </Button>
         </Box>
         </form>

          <Typography variant="h4" mb={1}>
            Or Login With Google
          </Typography>
          <Button fullWidth variant="outlined" sx={{ mb: 8 }}>
            <Image
              width={18}
              height={18}
              src="/ICONS/google-icon.svg"
              alt="G-MAIL"
              style={{ marginRight: "0.5rem" }}
            />
            Google
          </Button>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body1" mb={1}>Don&#39;t have an account?</Typography>
            <Link
              href="/sign-up"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" color="primary">
                {" "}
                Sign Up
              </Typography>
              <ArrowForwardIcon  color="primary" sx={{ width: 18, height: 18 , marginLeft:0.5}} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

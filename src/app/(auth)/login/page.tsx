"use client";

import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import ButtonSignUpwithGoogle from "@/components/ButtonSignUpwithGoogle";
import { signIn } from "@/auth";
import serverAction from "./serverAction";

export default function Page() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await signIn("credentials", {
      redirect: false,
    });

    const data = { email, password };
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const result = await res.json();
        login(result.data.name, data.email); // Store data in localStorage via context
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
          src={"/images/logo.svg"}
          alt="Wait screen illustration"
        />
        <Typography variant="h6" gutterBottom>
          Hey! Great to see you :)
        </Typography>
        <Box width="100%">
          

          <Typography variant="h4" mb={1} mt={6}>
            Or Login With Google
          </Typography>

          <ButtonSignUpwithGoogle />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body1" mb={1}>
              Don&apos;t have account?
            </Typography>
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
                Sign Up
              </Typography>
              <ArrowForwardIcon
                color="primary"
                sx={{ width: 18, height: 18, marginLeft: 0.5 }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

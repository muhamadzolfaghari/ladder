"use client";

import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import HeaderSignUp from "@/components/HeaderSignUp";
import PasswordValidation from "@/components/PasswordValidation ";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonSignUpwithGoogle from "@/components/ButtonSignUpwithGoogle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SignupSchema from "@/lib/resources/schemas/signupSchema";
type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(SignupSchema),
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  return (
    <Container maxWidth="sm">
      <Box
        sx={
          {
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // flexDirection: "column",
            // height: "100vh",
          }
        }
      >
        <HeaderSignUp />

       

        <Typography variant="h4" mb={1} mt={6}>
          Or Sign Up With Google
        </Typography>
        <ButtonSignUpwithGoogle />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ pb: 10 }}
        >
          <Typography variant="body1" mb={1}>
            Already have account?
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
              Login
            </Typography>
            <ArrowForwardIcon
              color="primary"
              sx={{ width: 18, height: 18, marginLeft: 0.5 }}
            />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SingUp;

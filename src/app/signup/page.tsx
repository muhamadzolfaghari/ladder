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
import signupSchema from "@/lib/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
    resolver: zodResolver(signupSchema),
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

        {/* form sign up */}
        <form
          noValidate
          // onSubmit={handleSubmit(onSubmit, (e) => {
          //   console.log(e);
          // })}
        >
          <Box sx={{}}>
            <Typography variant="h4" mb={2}>
              Create your account
            </Typography>
            <TextField
              label="Name"
              placeholder="Nova"
              {...register("name")}
              InputLabelProps={{ shrink: true }}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              InputLabelProps={{ shrink: true }}
              placeholder="youremail@gmail.com"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              InputLabelProps={{ shrink: true }}
              error={!!errors.password}
              helperText={errors.password?.message}
              FormHelperTextProps={{ style: { color: "red" } }}
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (passwordFocused || password) && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password", {
                onChange: (e) => setPassword(e.target.value),
                onBlur: () => setPasswordFocused(false),
              })}
              onFocus={() => {
                setPasswordFocused(true);
              }}
            />
            <PasswordValidation password={password} />
            <TextField
              label="Confirm Password"
              margin="normal"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="********"
              InputLabelProps={{ shrink: true }}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputProps={{
                endAdornment: (confirmPasswordFocused || confirmPassword) && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("confirmPassword", {
                onChange: (e) => setConfirmPassword(e.target.value),
                onBlur: () => setConfirmPasswordFocused(false),
              })}
              onFocus={() => {
                setConfirmPasswordFocused(true);
              }}
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
            <Box
              gap={0.5}
              mt={1}
              fontSize={14}
              display="flex"
              justifyContent="left"
            >
              <Typography variant="body1" fontSize={14}>
                {" "}
                By signing up, you agree to{" "}
              </Typography>
              <Link href="/terms" passHref style={{ color: "#22983C" }}>
                our terms
              </Link>
              <Typography variant="body1" fontSize={14}>
                &
              </Typography>
              <Link href="/privacy" passHref style={{ color: "#22983C" }}>
                privacy policy
              </Link>
            </Box>
          </Box>
        </form>

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

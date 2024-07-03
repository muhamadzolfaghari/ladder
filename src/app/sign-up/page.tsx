"use client";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoImage from "../../../public/Images/Logo.svg";
import { log } from "console";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      // .min(8, "Password must be at least 8 characters")

      // .matches(/(?=.*[!@#$%^&*])/, "Must contain a special character")
      // .matches(/(?=.*[A-Z])/, "Must contain an uppercase letter")
      // .matches(/(?=.*[a-z])/, "Must contain a lowercase letter")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Handle form submission here
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  return (
    <Container maxWidth="sm" sx={{ mt: 4, px: "1rem" }}>
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

      <Box component="form" width="100%" mt={3} mb={1}
          onSubmit={handleSubmit(onSubmit, (e) => {
            console.log(e);
          })}>
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
          margin="normal"
            label="Confirm Password"
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
        <Box gap={0.5} mt={1} width="100vh" fontSize={14}  display="flex" justifyContent="left">
        <Typography variant="body1" fontSize={14} > By signing up, you agree to{" "}</Typography>
          <Link
            href="/terms"
            passHref
            style={{ color: "#22983C"}}
          >
            our terms
          </Link>
          <Typography variant="body1"fontSize={14}  >
            &
          </Typography>
          <Link
            href="/privacy"
            passHref
            style={{ color: "#22983C"}}
          >
            privacy policy
          </Link>
        </Box>
        </Box>

        <Typography variant="h4" mb={1} mt={6}>
          Or Sign Up With Google
        </Typography>
        <Button fullWidth variant="outlined" sx={{ marginBottom: "2rem" }}>
          <Image
            width={18}
            height={18}
            src="/ICONS/google-icon.svg"
            alt="G-MAIL"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Google
        </Button>
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
    </Container>
    
  );
}

const PasswordValidation: React.FC<{ password: string }> = ({ password }) => {
  const validations = [
    {
      test: (pw: string) => pw.length >= 8,
      message: "At least 8 characters, ",
    },
    {
      test: (pw: string) => /[!@#$%^&*]/.test(pw),
      message: "Symbols, ",
    },
    {
      test: (pw: string) => /[A-Z]/.test(pw),
      message: "Uppercase &",
    },
    {
      test: (pw: string) => /[a-z]/.test(pw),
      message: "letter case",
    },
  ];

  return (
    <Box
      display={password.length > 0 ? "flex" : "none"}
      flexDirection="row"
      flexWrap="wrap"
      gap={0.5}
      mt={1}
      mb={1}
    >
      {validations.map((validation, index) => (
        <Typography
          key={index}
          variant="body1"
          fontSize="12px"
          style={{ color: validation.test(password) ? "green" : "red" }}
        >
          {validation.message}
        </Typography>
      ))}
    </Box>
  );
};

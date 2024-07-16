import {  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordValidation from "./PasswordValidation ";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface ResetPasswordProps {
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  prevStep: () => void;
}
interface FormData {
  password: string;
  confirmPassword: string;
}

const schema = z
  .object({
    password: z.string().min(1, "Password is required"),
    confirmPassword: z
      .string().min(1,"Confirm Password is required")
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords must match!",
    path: ["confirmPassword"],
  });

export default function ResetPassword({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  prevStep,
}: ResetPasswordProps) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      password,
      confirmPassword,
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Submit new password to server
    console.log(data);
    // Handle password change submission
    setPassword(data.password);
    setConfirmPassword(data.confirmPassword);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();


  return (
    <Box width="100%" mt={2}>
      <Typography variant="h5" gutterBottom>
        Reset Your Password
      </Typography>
      <Typography variant="body1">
        For recovery your password please insert your email and then we will
        send you a code to insert.
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 6, mt: 2 }}
        >
          Change Password
        </Button>
      </Box>
    </Box>
  );
}

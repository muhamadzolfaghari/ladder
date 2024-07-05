import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


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

const schema = yup
  .object({
    password: yup
      .string()
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export default function ResetPassword({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  prevStep,
}: ResetPasswordProps) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          password,
          confirmPassword,
        },
      });
      const onSubmit: SubmitHandler<FormData> = (data) => {
        // Submit new password to server
        console.log(data);
      };

  return (
    <Box width="100%" mt={2}>
      <Typography variant="h5" gutterBottom>
        Reset Your Password
      </Typography>
      <Typography variant="body1">
        For recovery your password please insert your email and then we will
        send you a code to insert.
      </Typography>
      <Box component="form"  onSubmit={handleSubmit(onSubmit)}>
      <TextField
          fullWidth
          margin="normal"
          type="password"
          label="New Password"
          required
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
         <TextField
         margin="normal"
          fullWidth
          type="password"
          label="Password"
          required
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 6 }}
        >
          Change Password
        </Button>
      </Box>

  
    </Box>
  );
}

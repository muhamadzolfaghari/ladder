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
    IconButton,
  } from "@mui/material";
  import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
  import Image from "next/image";
  import Link from "next/link";
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  import logoImage from "../../../public/Images/Logo.svg"
  
  interface IFormInputs {
    name: string;
    email: string;
    password: string;
  }
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'At least 8 character, Symbols, Uppercase & letter case.')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
  });
  export default function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
      resolver: yupResolver(schema),
    });
    const [showPassword, setShowPassword] = useState(false);
  
    const onSubmit: SubmitHandler<IFormInputs> = data => {
      console.log(data);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
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
          Your AI Learning Assistance :)
          </Typography>
          <Box width="100%" mt={3} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" mb={2}>
            Create your account
            </Typography>
            <TextField
              label="Name"
              InputLabelProps={{ shrink: true }}
              placeholder="Nova"
              fullWidth
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email"
              InputLabelProps={{ shrink: true }}
              placeholder="youremail@gmail.com"
              fullWidth
              sx={{ marginBottom: 2 }}
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
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
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            InputLabelProps={{ shrink: true }}
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }}
          />
            </Box>
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Link
                        href="/forgot-password"
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
  
            <Typography variant="h4" mb={1}>
            Or Sign Up With Google
            </Typography>
            <Button fullWidth variant="outlined" sx={{ mb: 8 }}>
              <Image
                width={18}
                height={18}
                src="/ICONS/google-icon.svg"
                alt="G-MAIL"
                style={{ marginRight: "0.5rem" }}
              />{" "}
              Google
            </Button>
  
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body1" mb={1}>Already have account? </Typography>
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
                  {" "}
                  Login
                </Typography>
                <ArrowForwardIcon  color="primary" sx={{ width: 18, height: 18 , marginLeft:0.5}} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  }
  
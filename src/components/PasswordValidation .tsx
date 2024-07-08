import React from 'react';
import { Box, Typography } from '@mui/material'; // Import Box and Typography from Material-UI

const PasswordValidation = ({ password }: { password: string }) => {
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

export default PasswordValidation;

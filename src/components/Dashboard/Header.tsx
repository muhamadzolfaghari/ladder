"use client";
import { Typography, Button, Box } from "@mui/material";
import { signOut } from "next-auth/react";
import { User } from "next-auth";

interface HeaderProps {
  user: User | undefined;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="h4">Hi {user?.name}</Typography>
        <Typography variant="body1">
          Great to see you again &#58;&#41;{" "}
        </Typography>
      </Box>

      <Button onClick={() => signOut()} href="/sign-in">
        Log out
      </Button>
    </Box>
  );
};

export default Header;

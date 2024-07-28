"use client";
import { Typography, Button, Box, Grid, Stack } from "@mui/material";
import {  signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const HeaderHomePage = () => {
   const router = useRouter();
  const { data: session } = useSession();
  console.log(session?.user?.name);
  
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="h4">Hi {session?.user?.name}</Typography>
        <Typography variant="body1">
          Great to see you again &#58;&#41;{" "}
        </Typography>
      </Box>

      <Button onClick={() => signOut()} href="/sign-in">Log out</Button>
    </Box>
  );
};

export default HeaderHomePage;

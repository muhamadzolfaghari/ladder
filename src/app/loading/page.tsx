import React from "react";
import { Container, Box, Typography, CircularProgress } from "@mui/material";
import Image from "next/image";
import SpinnerLoader from "@/components/SpinnerLoader";

export default function Page() {
  return (
    <Container maxWidth="sm">
      <Box
        flexDirection="column"
        alignItems="center"
        p={1}
        height="100vh"
        sx={{ mt: 2, display: { xs: "flex", md: "none" } }}
      >
        <Image
          width={320}
          height={306}
          style={{ margin: "1rem" }}
          src="/Images/loading.svg"
          alt="Wait screen illustration"
        />
        <Typography variant="h3" mt={3}>
          Wait a moment...
        </Typography>
        <Typography variant="body1" align="center" mt={3}>
          We are working on your Ladder, It will be ready soon :)
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
        <CircularProgress color="primary"/>
          <SpinnerLoader />
        </Box>
      </Box>
    </Container>
  );
}

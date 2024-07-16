import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import SpinnerLoader from "@/components/SpinnerLoader";

export default function Page() {
  return (
    <Container maxWidth="sm">
      <Box  display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        p={1}
        textAlign="center">
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
          <SpinnerLoader />
        </Box>
      </Box>
    </Container>
  );
}

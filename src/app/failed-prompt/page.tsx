import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Page() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        p={1}
        textAlign="center"
      >
        <Image
          width={320}
          height={306}
          style={{ margin: "1rem" }}
          src="/images/pana.svg"
          alt="failed prompt"
        />
        <Typography variant="h3" mt={3}>
          Failed Prompt!
        </Typography>
        <Typography variant="body1" mt={3}>
          The prompt entered is not valid to create a learning path. Please
          ensure all required fields are included and correctly formatted.
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 6, mt: 2 }}
        >
          Try Again
        </Button>
      </Box>
    </Container>
  );
}

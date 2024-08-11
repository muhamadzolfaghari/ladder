import React from "react";
import { Box, Typography, Container, Button, TextField } from "@mui/material";
import BottomNav from "@/components/BottomNav";
import plant from "../../../../public/images/Plant.png";
import Image from "next/image";
export default function ReviewPerformance2() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        p={1}
        textAlign="center"
      >
        <Typography variant="h4">+14 Hours Learning</Typography>
        <Image
          width={152}
          height={202}
          style={{ margin: "1rem" }}
          src={plant.src}
          alt="Wait screen illustration"
        />
        <Typography variant="h5" mt={3}>
          You are doing great, keep going!
        </Typography>
        <Typography variant="body1" align="center" mt={3}>
          This structured learning path is designed to help you achieve your
          goal of becoming a proficient full-stack web developer within 12
          months, balancing time commitment, preferred learning style, and
          available resources.
        </Typography>
      </Box>

      <Box
        my={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 1 }}
        >
          Next Week
        </Button>
      </Box>

      <Box
       sx={{
        display: "flex",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "column",
      }}
      >
        <BottomNav />
      </Box>
    </Container>
  );
}

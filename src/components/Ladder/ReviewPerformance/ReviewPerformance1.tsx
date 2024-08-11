import React from "react";
import { Box, Typography, Container, Button, TextField } from "@mui/material";
import BottomNav from "@/components/BottomNav";

export default function ReviewPerformance() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Distribute space between top content and bottom elements
        height: "100vh",
        paddingBottom: "64px", // Reserve space for BottomNav
      }}
    >
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" >
          Strengths and Weaknesses
        </Typography>
        <Typography variant="body1" mb={2}>
          Explain to Gemini about the success and failure of the tasks so that
          it can check your performance and provide an optimal solution.
        </Typography>
        <TextField
          InputLabelProps={{ shrink: true }}
          multiline
          rows={6}
          placeholder="Completion of most of the tasks of the training course due to the high quality of the training content"
          fullWidth
          sx={{ mb: 3 }} // Adds margin bottom between text fields
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          multiline
          rows={6}
          placeholder="Failure to do coding exercises due to lack of self-confidence"
          fullWidth
          sx={{ mb: 3 }} // Adds margin bottom to ensure spacing below the second field as well
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3, 
        }}
      >
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 2, borderRadius: '16px' }} 
        >
          Review Your Performance
        </Button>
        <BottomNav />
      </Box>
    </Container>
  );
}

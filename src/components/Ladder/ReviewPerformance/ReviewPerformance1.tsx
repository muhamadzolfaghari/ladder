import React from "react";
import { Box, Typography, Container, Button, TextField } from "@mui/material";
import BottomNav from "@/components/BottomNav";

export default function ReviewPerformance1() {
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
          sx={{ mb: 3 }}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          multiline
          rows={6}
          placeholder="Failure to do coding exercises due to lack of self-confidence"
          fullWidth
          sx={{ mb: 3 }} 
        />
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
          Review Your Performance
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

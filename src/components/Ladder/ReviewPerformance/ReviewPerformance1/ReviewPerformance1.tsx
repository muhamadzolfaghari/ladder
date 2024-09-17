import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { setStrengths, setWeaknesses, nextStep } from "@/store/slices/reviewSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const ReviewPerformance1 = () => {
  const dispatch = useAppDispatch();
  const strengths = useAppSelector((state) => state.review.strengths);
  const weaknesses = useAppSelector((state) => state.review.weaknesses);

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Strengths and Weaknesses</Typography>
      <Typography variant="body1" mb={2}>
        Explain to Gemini about the success and failure of the tasks so that it can check your performance and provide an optimal solution.
      </Typography>
      <TextField
        multiline
        rows={6}
        placeholder="Completion of most of the tasks..."
        fullWidth
        value={strengths}
        onChange={(e) => dispatch(setStrengths(e.target.value))}
        sx={{ mb: 3 }}
      />
      <TextField
        multiline
        rows={6}
        placeholder="Failure to do coding exercises..."
        fullWidth
        value={weaknesses}
        onChange={(e) => dispatch(setWeaknesses(e.target.value))}
        sx={{ mb: 3 }}
      />
      <Button fullWidth variant="contained" color="primary" onClick={() => dispatch(nextStep())}>
        Review Your Performance
      </Button>
    </Box>
  );
};

export default ReviewPerformance1;

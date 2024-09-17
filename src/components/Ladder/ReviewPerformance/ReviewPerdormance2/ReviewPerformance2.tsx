import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import plant from "../../../../public/images/Plant.png";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { previousStep } from "@/store/slices/reviewSlice";

const ReviewPerformance2 = () => {
  const dispatch = useAppDispatch();

  return (
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
      <Image width={152} height={202} style={{ margin: "1rem" }} src={plant.src} alt="Wait screen illustration" />
      <Typography variant="h5" mt={3}>You are doing great, keep going!</Typography>
      <Typography variant="body1" align="center" mt={3}>
        This structured learning path is designed to help you achieve your goal of becoming a proficient full-stack web developer within 12 months.
      </Typography>

      <Button fullWidth variant="contained" color="primary" onClick={() => dispatch(previousStep())}>
        Back to Review
      </Button>
    </Box>
  );
};

export default ReviewPerformance2;

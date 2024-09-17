import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Container, Box } from "@mui/material";
import BottomNav from "@/components/BottomNav";
import ReviewPerformance1 from "./ReviewPerformance1";
import ReviewPerformance2 from "./ReviewPerdormance2/ReviewPerformance2";

const ReviewPerformance = () => {
  const step = useAppSelector((state) => state.review.step);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        paddingBottom: "64px",
      }}
    >
      {step === 1 && <ReviewPerformance1 />}
      {step === 2 && <ReviewPerformance2 />}

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
};

export default ReviewPerformance;

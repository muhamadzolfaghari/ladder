import { Typography, Box } from "@mui/material";
import SliderProgressBar from "./SliderProgressBar";
import InfoCardTime from "./InfoCardTime";
import WeekDaysLadder from "./WeekDaysLadder";
import { PropsWithChildren } from "react";

interface Props {
  ladder: string | undefined;
}

const LadderOverview = ({ ladder }: PropsWithChildren<Props>) => {
  return (
    <Box sx={{ mt: "1.5rem" }}>
      <Typography variant="h5">Ladder Overview</Typography>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{ fontSize: "1.375rem" }}
      >
        {ladder}
      </Typography>

      <Typography variant="h5" sx={{ mb: 7, fontSize: "1.375rem" }}>
        Progress
      </Typography>
      <SliderProgressBar />
      <InfoCardTime />
      <WeekDaysLadder />
    </Box>
  );
};

export default LadderOverview;

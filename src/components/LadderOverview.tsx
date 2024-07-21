import {
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useTheme,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import SliderProgressBar from "./SliderProgressBar";
import InfoCardTime from "./InfoCardTime";
import WeekDaysLadder from "./WeekDaysLadder";

const LadderOverview = () => {
  return (
    <Box sx={{ mt: "1.5rem" }}>
      <Typography variant="h5">Ladder Overview</Typography>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{ fontSize: "1.375rem" }}
      >
        Full-Stack Web Development
      </Typography>
      {/* slider */}
      <Typography variant="h5" sx={{ mb: 7, fontSize: " 1.375rem" }}>
        Progress
      </Typography>
      <SliderProgressBar />
      <InfoCardTime />
      <WeekDaysLadder/>
    </Box>
  );
};

export default LadderOverview;

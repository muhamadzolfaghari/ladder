import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Day {
  day: string;
  status: "completed" | "in-progress" | "not-started";
}

interface Week {
  name: string;
  days: Day[];
}

const weeksData: Week[] = [
  {
    name: "Week 1",
    days: [
      { day: "01", status: "completed" },
      { day: "02", status: "completed" },
      { day: "03", status: "completed" },
      { day: "04", status: "completed" },
      { day: "05", status: "in-progress" },
      { day: "06", status: "not-started" },
      { day: "07", status: "completed" },
    ],
  },
  {
    name: "Week 2",
    days: [
      { day: "01", status: "completed" },
      { day: "02", status: "in-progress" },
      { day: "03", status: "completed" },
      { day: "04", status: "completed" },
      { day: "05", status: "in-progress" },
      { day: "06", status: "not-started" },
      { day: "07", status: "completed" },
    ],
  },
  {
    name: "Week 3",
    days: [
      { day: "01", status: "completed" },
      { day: "02", status: "completed" },
      { day: "03", status: "completed" },
      { day: "04", status: "completed" },
      { day: "05", status: "completed" },
      { day: "06", status: "in-progress" },
      { day: "07", status: "not-started" },
    ],
  },
  {
    name: "Week 4",
    days: [
      { day: "01", status: "completed" },
      { day: "02", status: "completed" },
      { day: "03", status: "completed" },
      { day: "04", status: "completed" },
      { day: "05", status: "in-progress" },
      { day: "06", status: "completed" },
      { day: "07", status: "not-started" },
    ],
  },
  {
    name: "Week 5",
    days: [
      { day: "01", status: "completed" },
      { day: "02", status: "completed" },
      { day: "03", status: "completed" },
      { day: "04", status: "completed" },
      { day: "05", status: "in-progress" },
      { day: "06", status: "completed" },
      { day: "07", status: "not-started" },
    ],
  },
];

const AllWeekLadder = () => {
  return (
    <Box
      sx={{
        pt: "16px",
        maxWidth: "700px",
        justifyContent: { xs: "center", md: "space-evenly" },
        alignItems: { md: "center" },
      }}
    >
      {weeksData.map((week, weekIndex) => (
        <Box key={weekIndex} sx={{ marginBottom: "12px", display: "flex" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              textAlign: "left",
              mr: 1,
            }}
          >
            {week.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            {week.days.map((item, dayIndex) => (
              <Box
                key={dayIndex}
                sx={{
                  padding: "8px 10.5px",
                  borderRadius: "10px",
                  background:
                    item.status === "completed"
                      ? "#BAF0B6"
                      : item.status === "in-progress"
                        ? "#C2C9BD"
                        : "#ffff",
                  border:
                    item.status === "not-started" ? "1px solid #72796F" : "",
                }}
              >
                <Typography>{item.day}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AllWeekLadder;

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WeekDaysLadder = () => {
  const days = [
    { day: "01", status: "not-started" },
    { day: "02", status: "not-started" },
    { day: "03", status: "not-started" },
    { day: "04", status: "not-started" },
    { day: "05", status: "not-started" },
    { day: "06", status: "not-started" },
    { day: "07", status: "not-started" },
  ];

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ mb: 2, fontSize: " 1.375rem", pt: "24px" }}
      >
        Week
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          mb: "24px",
        }}
      >
        {days.map((item, index) => (
          <Box
            key={item.day}
            sx={{
              padding: "10px 14.5px",
              borderRadius: "10px",
              background:
                item.status === "completed"
                  ? "#BAF0B6"
                  : item.status === "in-progress"
                    ? "#C2C9BD"
                    : "#ffff",
              border: item.status === "not-started" ? "1px solid #72796F" : "",
            }}
          >
            <Typography>{item.day}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button>
          See the hole Ladder <ArrowForwardIcon />{" "}
        </Button>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "#72796F", mb: 2, pt: 4 }}></Box>
    </Box>
  );
};

export default WeekDaysLadder;

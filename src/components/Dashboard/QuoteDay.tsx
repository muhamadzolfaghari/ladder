import { Typography, Box } from "@mui/material";
import QuoteLeft from "./QuoteLeft";
import QuoteRight from "./QuoteRight";

const QuoteDay = () => {
  return (
    <Box sx={{ pb: 10 }}>
      <Typography variant="h5" sx={{ pb: 4 }}>
        Quote of the day{" "}
      </Typography>
      {/* Quote of the day should change every day */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,

          borderRadius: 2,
          position: "relative",
          maxWidth: 350,
          margin: "auto",
        }}
      >
        <div style={{ position: "absolute", top: "0rem", left: 0 }}>
          <QuoteLeft />
        </div>
        <Typography
          variant="h5"
          component="div"
          sx={{
            position: "relative",
            padding: "0 20px",
          }}
        >
          Yesterday you said: Tomorrow!
        </Typography>
        <div style={{ position: "absolute", bottom: "0rem", right: 0 }}>
          <QuoteRight />
        </div>
      </Box>
    </Box>
  );
};

export default QuoteDay;

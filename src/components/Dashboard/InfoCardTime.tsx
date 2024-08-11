import { Typography, Box } from "@mui/material";

const InfoCardTime = () => {
  return (
   
     
      <Box sx={{ display: "flex", gap: "10px" , mt:'18px' }}>
        <Box
          sx={{
            background: "#D5E8CF",
            borderRadius: "9px",
            textAlign: "center",
            padding: 2,
            width: "400px",
            maxHeight: "400px",
          }}
        >
          <Typography variant="h5" fontSize={"22px"}>
            +54 Hr
          </Typography>
          <Typography variant="h5" fontSize={"22px"}>
            Learning time
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#D5E8CF",
            borderRadius: "9px",
            textAlign: "center",
            padding: 2,
            width: "400px",
            maxHeight: "400px",
          }}
        >
          <Typography variant="h5" fontSize={"22px"}>
            +17 Days
          </Typography>
          <Typography variant="h5" fontSize={"22px"}>
            On Strike
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#D5E8CF",
            borderRadius: "9px",
            textAlign: "center",
            padding: 2,
            width: "400px",
            maxHeight: "400px",
          }}
        >
          <Typography variant="h5" fontSize={"22px"}>
            58 Dyas
          </Typography>
          <Typography variant="h5" fontSize={"22px"}>
            finish Phase 1
          </Typography>
        </Box>
      </Box>
   
  );
};

export default InfoCardTime;

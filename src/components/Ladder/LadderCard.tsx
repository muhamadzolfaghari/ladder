import React from "react";
import { Card, CardContent, Box, Typography, IconButton, Divider } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Image from "next/image";

interface LadderCardProps {
  onRoadMapClick: () => void;
  onWeekSheetClick: () => void;
  onStatesClick: () => void;
  onSettingClick: () => void;
}

const LadderCard: React.FC<LadderCardProps> = ({
  onRoadMapClick,
  onWeekSheetClick,
  onStatesClick,
  onSettingClick,
}) => {
  return (
    <Card
      sx={{
        mb: 2,
        bgcolor: "#4caf50",
        color: "white",
        justifyContent: "space-around",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          my={2}
        >
          <Typography variant="h5" sx={{ color: "white" }}>
            Full-Stack Web Development
          </Typography>

          <IconButton onClick={onSettingClick}>
            <TuneOutlinedIcon
              sx={{ color: "white", transform: "rotate(90deg)" }}
            />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={onRoadMapClick}
          >
            <Image src="/icons/Path.svg" alt="Road Map Icon" width={24} height={24} />
            <Typography variant="body1" sx={{ color: "white" }}>
              Road Map
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ bgcolor: "white" }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={onWeekSheetClick}
          >
            <Image src="/icons/Speedometer.svg" alt="Week Sheet Icon" width={24} height={24} />
            <Typography variant="body1" sx={{ color: "white" }}>
              Week Sheet
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ bgcolor: "white" }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={onStatesClick}
          >
            <Image src="/icons/Ruler.svg" alt="States Icon" width={24} height={24} />
            <Typography variant="body1" sx={{ color: "white" }}>
              Stats
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LadderCard;

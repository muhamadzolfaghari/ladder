"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
  Divider,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import addicon from "../../../public/icons/addicon.svg";
import Path from "../../../public/icons/Path.svg";
import Speedometer from "../../../public/icons/Speedometer.svg";
import Ruler from "../../../public/icons/Ruler.svg";
import Image from "next/image";
import LadderStatus from "@/components/LadderStatus";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { statusChanged } from "@/store/slices/ladderSlice";
import RoadMap from "./RoadMap/RoadMap";
import WeekSheet from "./WeekSheet/WeekSheet";
import States from "./States/States";

export default function Ladder() {
  const [showLadderSetting, setShowLadderSetting] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.ladder.status);

  const handleClick = (): void => {
    setShowLadderSetting((prev) => !prev);
  };

  const handleNavigation = (status: "ladder" | "roadmap" | "states" | "weeksheet") => {
    dispatch(statusChanged(status));
  };
  const renderComponent = () => {
    switch (status) {
      case "roadmap":
        return <RoadMap />;
      case "weeksheet":
        return <WeekSheet />;
      case "states":
        return <States />;
      default:
        return null; 
    }
  };


  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h4" mt={2}>
        Ladders
      </Typography>
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

            <IconButton onClick={handleClick}>
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
              onClick={() => handleNavigation("roadmap")}
            >
              <Image src={Path.src} alt="Add Icon" width={24} height={24} />
              <Typography variant="body1" sx={{ color: "white" }}>
                Road Map
              </Typography>
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "white" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("weeksheet")}
            >
              <Image
                src={Speedometer.src}
                alt="Add Icon"
                width={24}
                height={24}
              />
              <Typography variant="body1" sx={{ color: "white" }}>
                Week Sheet
              </Typography>
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "white" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("states")}
            >
              <Image src={Ruler.src} alt="Add Icon" width={24} height={24} />
              <Typography variant="body1" sx={{ color: "white" }}>
                Stats
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {showLadderSetting && <LadderStatus />}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Image src={addicon.src} alt="Add Icon" width={56} height={56} />
        </IconButton>
      </Box>
      {renderComponent()}
    </Container>
  );
}

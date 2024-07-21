"use client";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";


import { useState } from "react";
import LadderIconBottom from "./LadderIconBottom";
import GeminiIconBottom from "./GeminiIconBottom";
import NotificationsOutlinedIcon from "./NotificationsOutlinedIcon";
import HomeIconBottom from "./HomeIconBottom";
import HomeIconOutline from "./HomeIconOutline";
import GeminiIconActive from "./GeminiIconActive";
import LadderIconBottomActive from "./LadderIconBottomActive";
import NotifactionIconBottomActive from "./NotifactionIconBottomActive";

const NavigationBottom = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={4}
      style={{ border: "none" }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={
            <Box
              sx={{
                backgroundColor:
                  value === 0 ? "rgba(213, 232, 207, 1)" : "transparent",
                borderRadius: "20px",
                padding: "3px 1.25rem",
              }}
            >
              {value === 0 ? <HomeIconBottom /> : <HomeIconOutline />}
            </Box>
          }
        />

        <BottomNavigationAction
          label="Gemini"
          icon={
            <Box
              sx={{
                backgroundColor:
                  value === 1 ? "rgba(213, 232, 207, 1)" : "transparent",
                borderRadius: "20px",
                padding: "3px 1.25rem",
              }}
            >
              {value === 1 ? <GeminiIconActive /> : <GeminiIconBottom />}
            </Box>
          }
        />
        <BottomNavigationAction
          label="Ladder"
          icon={
            <Box
              sx={{
                backgroundColor:
                  value === 2 ? "rgba(213, 232, 207, 1)" : "transparent",
                borderRadius: "20px",
                padding: "3px 1.25rem",
              }}
            >
              {value === 2 ? <LadderIconBottomActive /> : <LadderIconBottom />}
            </Box>
          }
        />
        <BottomNavigationAction
          label="Notification"
          icon={
            <Box
              sx={{
                backgroundColor:
                  value === 3 ? "rgba(213, 232, 207, 1)" : "transparent",
                borderRadius: "20px",
                padding: "3px 1.25rem",
              }}
            >
              {value === 3 ? (
                <NotifactionIconBottomActive />
              ) : (
                <NotificationsOutlinedIcon />
              )}
            </Box>
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default NavigationBottom;

"use client";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import HomeIcon from "@mui/icons-material/Home";

import { useState } from "react";
import LadderIconBottom from "./LadderIconBottom";
import GeminiIconBottom from "./GeminiIconBottom";
import NotificationsOutlinedIcon from "./NotificationsOutlinedIcon";
import HomeIconBottom from "./HomeIconBottom";

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
              <HomeIconBottom />
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
              <GeminiIconBottom />
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
              <LadderIconBottom />
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
              <NotificationsOutlinedIcon />
            </Box>
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default NavigationBottom;

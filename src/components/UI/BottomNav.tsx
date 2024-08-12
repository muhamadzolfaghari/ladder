"use client"
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotifactionIconBottomActive from "../NotifactionIconBottomActive";
import LadderIconBottomActive from "../LadderIconBottomActive";
import LadderIconBottom from "../LadderIconBottom";
import GeminiIconBottom from "../GeminiIconBottom";
import GeminiIconActive from "../GeminiIconActive";
import HomeIconBottom from "../HomeIconBottom";
import HomeIconOutline from "../HomeIconOutline";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/dashboard");
        break;
      case 1:
        router.push("/gemini");
        break;
      case 2:
        router.push("/ladder");
        break;
      case 3:
        router.push("/notification");
        break;
      default:
        break;
    }
  };


  return (
    <Box sx={{ width: "100%" ,  display: "flex",
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: "column",}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        <BottomNavigationAction
        
          label="Home"
          icon={
            <Box     
            sx={{
              bgcolor: value === 0 ? '#D5E8CF' : 'transparent',
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
            <Box   sx={{
              bgcolor: value === 1 ? '#D5E8CF' : 'transparent',
              borderRadius: "20px",
                padding: "3px 1.25rem",
            }} >
              {value === 1 ? <GeminiIconActive /> : <GeminiIconBottom />}
             
            </Box>
          }
        />
        <BottomNavigationAction
          label="Ladder"
          icon={
            <Box    sx={{
              bgcolor: value === 2 ? '#D5E8CF' : 'transparent',
              borderRadius: "20px",
              padding: "3px 1.25rem",
            }} >
              
              {value === 2 ? <LadderIconBottomActive /> : <LadderIconBottom />}
            </Box>
          }
        />
        <BottomNavigationAction
          label="Notifications"
          icon={
            <Badge
              color="primary"
              badgeContent={0}
              showZero
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box  sx={{
                  bgcolor: value === 3 ? '#D5E8CF' : 'transparent',
                  borderRadius: "20px",
                  padding: "3px 1.25rem",
                }} >
               {value === 3 ? (
                <NotifactionIconBottomActive />
              ) : (
                <NotificationsOutlinedIcon />
              )}
              </Box>


            </Badge>
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;

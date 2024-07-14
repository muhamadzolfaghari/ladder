// app/components/BottomNav.tsx
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LadderIcon from './LadderIcon';
import GiminiIcon from './GiminiIcon';

const BottomNav: React.FC = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/home');
        break;
      case 1:
        router.push('/gemini');
        break;
      case 2:
        router.push('/ladder');
        break;
      case 3:
        router.push('/notifications');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%'  }}>
      <BottomNavigation
      sx={{padding:'4px'}}
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />}  />
        <BottomNavigationAction label="Gemini" icon={<GiminiIcon />} />
        <BottomNavigationAction label="Ladder" icon={<LadderIcon />} />
        <BottomNavigationAction label="Notifications"  icon={<NotificationsOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;

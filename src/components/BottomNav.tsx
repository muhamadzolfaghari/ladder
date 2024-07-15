// app/components/BottomNav.tsx
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import Badge from '@mui/material/Badge';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

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
      sx={{padding:'8px',}}
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />}  />
        <BottomNavigationAction label="Gemini" icon={<GiminiIcon />} />
        <BottomNavigationAction label="Ladder" icon={<LadderIcon />} />
        <BottomNavigationAction
         sx={{ mt: 2 }} 
  label="Notifications"
  icon={
    <Badge
      color="primary"
      badgeContent={0}
      showZero
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <NotificationsOutlinedIcon />
    </Badge>
  }
/>
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;



export const LadderIcon: React.FC = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 2.25C18.5511 2.25 18.3603 2.32902 18.2197 2.46967C18.079 2.61032 18 2.80109 18 3V6H7.5V3C7.5 2.80109 7.42098 2.61032 7.28033 2.46967C7.13968 2.32902 6.94891 2.25 6.75 2.25C6.55109 2.25 6.36032 2.32902 6.21967 2.46967C6.07902 2.61032 6 2.80109 6 3V21C6 21.1989 6.07902 21.3897 6.21967 21.5303C6.36032 21.671 6.55109 21.75 6.75 21.75C6.94891 21.75 7.13968 21.671 7.28033 21.5303C7.42098 21.3897 7.5 21.1989 7.5 21V18H18V21C18 21.1989 18.079 21.3897 18.2197 21.5303C18.3603 21.671 18.5511 21.75 18.75 21.75C18.9489 21.75 19.1397 21.671 19.2803 21.5303C19.421 21.3897 19.5 21.1989 19.5 21V3C19.5 2.80109 19.421 2.61032 19.2803 2.46967C19.1397 2.32902 18.9489 2.25 18.75 2.25ZM18 7.5V11.25H7.5V7.5H18ZM7.5 16.5V12.75H18V16.5H7.5Z" fill="#424940"/>
  </svg>
);



export const GiminiIcon: React.FC = () => (
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.625 18.8438C10.125 19.9844 10.375 21.2031 10.375 22.5C10.375 21.2031 10.6172 19.9844 11.1016 18.8438C11.6016 17.7031 12.2734 16.7109 13.1172 15.8672C13.9609 15.0234 14.9531 14.3594 16.0938 13.875C17.2344 13.375 18.4531 13.125 19.75 13.125C18.4531 13.125 17.2344 12.8828 16.0938 12.3984C14.9836 11.9198 13.9738 11.2359 13.1172 10.3828C12.2641 9.52625 11.5802 8.5164 11.1016 7.40625C10.6172 6.26562 10.375 5.04688 10.375 3.75C10.375 5.04688 10.125 6.26562 9.625 7.40625C9.14062 8.54688 8.47656 9.53906 7.63281 10.3828C6.77625 11.2359 5.7664 11.9198 4.65625 12.3984C3.51562 12.8828 2.29688 13.125 1 13.125C2.29688 13.125 3.51562 13.375 4.65625 13.875C5.79688 14.3594 6.78906 15.0234 7.63281 15.8672C8.47656 16.7109 9.14062 17.7031 9.625 18.8438Z" fill="#181D17"/>
<path d="M18.235 8.745C18.495 9.2925 18.625 9.8775 18.625 10.5C18.625 9.8775 18.7509 9.2925 19.0028 8.745C19.2628 8.1975 19.6122 7.72125 20.0509 7.31625C20.4897 6.91125 21.0056 6.5925 21.5988 6.36C22.1919 6.12 22.8256 6 23.5 6C22.8256 6 22.1919 5.88375 21.5988 5.65125C21.0215 5.4215 20.4964 5.09325 20.0509 4.68375C19.6073 4.2726 19.2517 3.78787 19.0028 3.255C18.7509 2.7075 18.625 2.1225 18.625 1.5C18.625 2.1225 18.495 2.7075 18.235 3.255C17.9831 3.8025 17.6378 4.27875 17.1991 4.68375C16.7536 5.09325 16.2285 5.4215 15.6512 5.65125C15.0581 5.88375 14.4244 6 13.75 6C14.4244 6 15.0581 6.12 15.6512 6.36C16.2444 6.5925 16.7603 6.91125 17.1991 7.31625C17.6378 7.72125 17.9831 8.1975 18.235 8.745Z" fill="#181D17"/>
</svg>

);




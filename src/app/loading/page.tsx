import React from 'react';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import Image from 'next/image';

const styles = {
  loader: {
    width: '8px',
    height: '48px',
    display: 'block',
    margin: 'auto',
    position: 'relative',
    borderRadius: '4px',
    boxSizing: 'border-box',
    animation: 'animloader 1s linear infinite alternate',
  },
  '@global': {
    '@keyframes animloader': {
      '0%': {
        boxShadow: '20px 0 rgba(255, 255, 255, 0.25), 40px 0 white, 60px 0 white',
      },
      '50%': {
        boxShadow: '20px 0 white, 40px 0 rgba(255, 255, 255, 0.25), 60px 0 white',
      },
      '100%': {
        boxShadow: '20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0.25)',
      },
    },
  },
};

export default function Page() {
  return (
    <Container maxWidth="sm">
      <Box
        flexDirection="column"
        alignItems="center"
        p={1}
        height="100vh"
        sx={{ mt: 2, display: { xs: 'flex', md: 'none' } }}
      >
        <Image
          width={320}
          height={306}
          style={{ margin: '1rem' }}
          src="/Images/loading.svg"
          alt="Wait screen illustration"
        />
        <Typography variant="h3" mt={3}>
          Wait a moment...
        </Typography>
        <Typography variant="body1" align="center" mt={3}>
          We are working on your Ladder, It will be ready soon :)
        </Typography>
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          flexGrow={1}
          
        >
          <CircularProgress  />
        </Box>

        {/* <Box sx={styles.loader} bgcolor='#424940' >
        <Typography variant="body1" align="center" mt={2}>
          Loading...
        </Typography></Box> */}
      </Box>
    </Container>
  );
}

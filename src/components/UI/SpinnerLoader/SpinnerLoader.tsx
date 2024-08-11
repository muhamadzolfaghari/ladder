import { Box } from '@mui/material';
import React from 'react'
import classes from './SpinnerLoader.module.css'

export default function SpinnerLoader() {
  return (
    <>
      <Box className={classes.loader} bgcolor="#424940"></Box>
    </>
  );
}
import { Box, Typography } from '@mui/material';
import React from 'react'


const styles = {
  loader: {
    width: "50.4px",
    height: "44.8px",
    "--c": "linear-gradient(#22983c 0 0)",
    background: "var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%",
    backgroundSize: "10.1px 100%",
    backgroundRepeat: "no-repeat",
    animation: "bars-t0lx83md 1s infinite linear",
    display: "block",
    margin: "auto",
    position: "relative",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  "@global": {
    "@keyframes bars-t0lx83md": {
      "33%": {
        backgroundSize: "10.1px 10%, 10.1px 100%, 10.1px 100%",
      },
      "50%": {
        backgroundSize: "10.1px 100%, 10.1px 10%, 10.1px 100%",
      },
      "66%": {
        backgroundSize: "10.1px 100%, 10.1px 100%, 10.1px 10%",
      },
    },
  },
};
export default function SpinnerLoader() {
  return (
    <>
      <Box sx={styles.loader} bgcolor="#424940"></Box>
    </>
  );
}
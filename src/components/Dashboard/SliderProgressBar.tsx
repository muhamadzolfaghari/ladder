"use client";

import { Box, Slider, Typography } from "@mui/material";
import React from "react";

const SliderProgressBar = () => {
  const [value, setValue] = React.useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  return (
    <Box>
      
      <Slider
        value={value}
        min={0}
        step={1}
        valueLabelDisplay="on"
        max={100}
        getAriaValueText={(value) => `${value}%`}
        valueLabelFormat={(value) => `${value}%`}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SliderProgressBar;

"use client";

import { useState } from "react";
import { useTheme } from "@mui/material";

export function usePhases() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme = useTheme();

  return { expanded, handleChange, theme };
}

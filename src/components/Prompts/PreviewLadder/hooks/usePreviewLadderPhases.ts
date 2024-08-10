"use client";

import { useState } from "react";
import { useTheme } from "@mui/material";

export function usePreviewLadderPhases() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme = useTheme();

  return { expanded, handleChange, theme };
}

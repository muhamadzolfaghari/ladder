"use client";

import { useState } from "react";

export function usePhaseAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpandedChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return { expanded, handleExpandedChange };
}

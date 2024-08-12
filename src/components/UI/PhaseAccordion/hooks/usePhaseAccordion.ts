"use client";

import { useState } from "react";

export function usePhaseAccordion(defaultExpanded: false | string = false) {
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded);

  const handleExpandedChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return { expanded, handleExpandedChange };
}

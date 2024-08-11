import theme from "@/lib/resources/theme";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { PropsWithChildren } from "react";

interface PhaseProps {
  title: string | undefined;
  index: number;
  expanded: string | boolean;
  onExpandedChange: (
    panel: string
  ) => (_event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export default function PhaseAccordion({
  children,
  expanded,
  index,
  onExpandedChange,
  title,
}: PropsWithChildren<PhaseProps>) {
  return (
    <Accordion
      expanded={expanded === `panel${index + 1}`}
      onChange={onExpandedChange(`panel${index + 1}`)}
    >
      <AccordionSummary
        sx={{
          backgroundColor:
            expanded === `panel${index + 1}` ? "#22983C" : "#526350",
        }}
        expandIcon={
          expanded === `panel${index + 1}` ? (
            <ArrowDropDownIcon
              fontSize="large"
              sx={{ color: theme.palette.primary.contrastText }}
            />
          ) : (
            <ArrowRightIcon
              fontSize="large"
              sx={{ color: theme.palette.primary.contrastText }}
            />
          )
        }
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ mt: 2, mb: 3 }}>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
}

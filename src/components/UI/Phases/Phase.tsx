import theme from "@/lib/resources/theme";
import { DailyRoutine } from "@/types/Ladder";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import DailyRoutineDetails from "./DailyRoutineDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface PhaseProps {
  duration: string | undefined;
  title: string | undefined;
  dailyRoutine: DailyRoutine[] | undefined;
  index: number;
  expanded: string | boolean;
  onExpandedChange: (
    panel: string
  ) => (_event: React.SyntheticEvent, isExpanded: boolean) => void;
}

type GroupedDailyRoutineItem = { title: string; values: string[] };
type GroupedDailyRoutine = {
  tasks: GroupedDailyRoutineItem;
  resources: GroupedDailyRoutineItem;
};

function createDailyRoutine(dailyRoutine: DailyRoutine[] | undefined) {
  return dailyRoutine?.reduce(
    (prev, cur) => {
      prev.tasks.values.push(`${cur?.time}: ${cur?.task}`);
      prev.resources.values.push(cur?.resource ?? "");
      return prev;
    },
    {
      tasks: { title: "Weekly Schedule", values: [] },
      resources: { title: "Key Topics", values: [] },
    } as GroupedDailyRoutine
  );
}

export default function Phase({
  dailyRoutine,
  title,
  index,
  expanded,
  duration,
  onExpandedChange,
}: PhaseProps) {
  const groupedDailyRoutine = createDailyRoutine(dailyRoutine);

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
        <Typography>
          Phase {index + 1}: {title} &#40;{duration}&#41;
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ mt: 2, mb: 3 }}>
          <DailyRoutineDetails
            title={groupedDailyRoutine?.tasks.title}
            values={groupedDailyRoutine?.tasks.values}
          />
          <DailyRoutineDetails
            title={groupedDailyRoutine?.resources.title}
            values={groupedDailyRoutine?.resources.values}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

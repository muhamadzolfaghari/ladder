import { DailyRoutine } from "@/types/Ladder";
import DailyRoutineDetails from "./DailyRoutineDetails";

interface PhaseProps {
  dailyRoutines: DailyRoutine[] | undefined;
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

export default function Phase({ dailyRoutines: dailyRoutine }: PhaseProps) {
  const groupedDailyRoutine = createDailyRoutine(dailyRoutine);

  return (
    <>
      <DailyRoutineDetails
        title={groupedDailyRoutine?.tasks.title}
        values={groupedDailyRoutine?.tasks.values}
      />
      <DailyRoutineDetails
        title={groupedDailyRoutine?.resources.title}
        values={groupedDailyRoutine?.resources.values}
      />
    </>
  );
}

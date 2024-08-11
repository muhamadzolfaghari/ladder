import { DailyRoutineWeekDaysTable } from "@/types/Database";
import db from "../resources/pool";
import TableWithId from "@/types/TableWithId";

export default function selectAllDailyRoutineWeekDays(
  daily_routine_id: number
): Promise<TableWithId<DailyRoutineWeekDaysTable>[] | undefined> {
  return db
    .selectFrom("daily_routine_week_days")
    .selectAll()
    .where("daily_routine_id", "=", daily_routine_id)
    .execute();
}

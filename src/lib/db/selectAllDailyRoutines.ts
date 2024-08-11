import { LearningPathTable } from "@/types/Database";
import db from "../resources/pool";
import TableWithId from "@/types/TableWithId";
import { DailyRoutine } from "@/types/Ladder";

export default function selectAllDailyRoutines(
  learning_path_id: number
): Promise<TableWithId<DailyRoutine>[] | undefined> {
  try {
    return db
      .selectFrom("daily_routines")
      .where("learning_path_id", "=", learning_path_id)
      .selectAll()
      .execute();
  } catch (error) {
    console.error("Error fetching visitor status:", error);
    throw new Error("Failed to fetch visitor status");
  }
}

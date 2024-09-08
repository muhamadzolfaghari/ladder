import { LearningPathTable } from "@/types/Database";
import db from "../resources/pool";
import TableWithId from "@/types/TableWithId";

export default function selectAllLearningPaths(
  id: number
): Promise<TableWithId<LearningPathTable>[] | undefined> {
  try {
    return db
      .selectFrom("learning_paths")
      .where("ladder_id", "=", id)
      .selectAll()
      .execute();
  } catch (error) {
    console.error("Error fetching visitor status:", error);
    throw new Error("Failed to fetch visitor status");
  }
}

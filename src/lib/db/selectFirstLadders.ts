import { LadderTable } from "@/types/Database";
import db from "../resources/pool";
import TableWithId from "@/types/TableWithId";

export default function selectFirstLadders(
  user_id: string
): Promise<TableWithId<LadderTable> | undefined> {
  try {
    return db
      .selectFrom("ladders")
      .where("user_id", "=", user_id)
      .selectAll()
      .executeTakeFirst();
  } catch (error) {
    console.error("Error fetching visitor status:", error);
    throw new Error("Failed to fetch visitor status");
  }
}

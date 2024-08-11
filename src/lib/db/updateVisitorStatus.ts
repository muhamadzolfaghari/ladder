import { VisitorStatusTable } from "@/types/Database";
import db from "../resources/pool";
import { UpdateResult } from "kysely";

export default function updateVisitorStatus({
  is_first_visit,
  user_id,
}: VisitorStatusTable): Promise<UpdateResult[] | undefined> {
  try {
    return db
      .updateTable("visitor_status")
      .set({ is_first_visit })
      .where("user_id", "=", user_id)
      .execute();
  } catch (error) {
    console.error(`Error updating visitor status:`, error);
    throw new Error("Failed to update visitor status");
  }
}

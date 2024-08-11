import { VisitorStatusTable } from "@/types/Database";
import db from "../resources/pool";

export default async function selectFirstVisitorStatus(
  userId: string
): Promise<VisitorStatusTable | undefined> {
  try {
    const result = await db
      .selectFrom("visitor_status")
      .where("user_id", "=", userId)
      .executeTakeFirst();

    return result as VisitorStatusTable | undefined;
  } catch (error) {
    console.error("Error fetching visitor status:", error);
    throw new Error("Failed to fetch visitor status");
  }
}

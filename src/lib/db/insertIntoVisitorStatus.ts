import db from "../resources/pool";

export default async function insertIntoVisitorStatus(
  user_id: string,
  is_first_visit: boolean
) {
  try {
    await db
      .insertInto("visitor_status")
      .values({ user_id, is_first_visit })
      .execute();
  } catch (error) {
    console.error("Error inserting visitor status:", error);
    throw new Error("Failed to insert visitor status");
  }
}

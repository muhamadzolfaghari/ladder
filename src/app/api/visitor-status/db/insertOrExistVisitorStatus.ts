import client from "@/lib/db";
import getVisitorStatusById from "@/app/api/visitor-status/db/getVisitorStatusById";

export default async function insertOrExistVisitorStatus(
  userId: string | undefined,
) {
  const row = await getVisitorStatusById(userId);

  if (row?.is_first_visit === false) {
    return;
  }

  const query =
    "INSERT INTO visitor_status (user_id, is_first_visit) VALUES ($1, false)";
  await client.query(query, [userId]);
}

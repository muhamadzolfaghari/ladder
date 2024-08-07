import client from "@/lib/db";
import VisitorStatus from "@/app/api/visitor-status/types/VisitorStatus";

export default async function getVisitorStatusById(
  userId: string
): Promise<VisitorStatus | undefined> {
  const query = "SELECT * FROM visitor_status WHERE user_id = $1";
  const values = [userId];
  const result = await client.query<VisitorStatus>(query, values);
  const [row] = result.rows;

  return row;
}

import client from "@/lib/db";

export default async function insertVisitorStatusByUserId(userId: string) {
  const query =
    "INSERT INTO visitor_status (user_id, is_first_visit, is_prompts_finished) VALUES ($1, true, false)";
  const values = [userId];
  await client.query(query, values);
}

import client from "@/lib/db";

export default async function updateVisitorStatusById(
  userId: string,
  isFirstVisit: boolean,
  isPromptsFinished: boolean
) {
  const query =
    "UPDATE visitor_status SET (user_id, is_first_visit, is_prompts_finished) VALUES ($1, $2, $3) WHERE user_id = $1";
  const values = [userId, isFirstVisit, isPromptsFinished];
  await client.query(query, values);
}

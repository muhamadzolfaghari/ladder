import client from "@/lib/db";

export default async function updateVisitorStatusById(
  userId: string,
  isFirstVisit: boolean,
  isPromptsFinished: boolean
) {
  const query = `
  UPDATE visitor_status
  SET is_first_visit = $2,
      is_prompts_finished = $3
  WHERE user_id = $1
`;
  const values = [userId, isFirstVisit, isPromptsFinished];
  await client.query(query, values);
}

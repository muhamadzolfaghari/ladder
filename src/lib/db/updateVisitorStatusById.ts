import pool from "../resources/pool";

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
  let client;

  try {
    client = await pool.connect();
    await client.query(query, values);
  } catch (error) {
    console.error("Error updating visitor status:", error);
    throw new Error("Failed to update visitor status");
  } finally {
    client?.release();
  }
}

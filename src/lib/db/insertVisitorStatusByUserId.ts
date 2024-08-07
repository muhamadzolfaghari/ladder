import pool from "../resources/pool";

export default async function insertVisitorStatusByUserId(userId: string) {
  const query = `INSERT INTO visitor_status 
      (user_id, is_first_visit, is_prompts_finished) VALUES ($1, true, false)`;
  const values = [userId];
  let client;

  try {
    client = await pool.connect();
    await client.query(query, values);
  } catch (error) {
    console.error("Error inserting visitor status:", error);
    throw new Error("Failed to insert visitor status");
  } finally {
    client?.release();
  }
}

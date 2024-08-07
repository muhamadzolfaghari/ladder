import pool from "@/lib/db";
import { PoolClient } from "pg";

export default async function getRowByUserIdAndTable<T>(
  userId: string,
  tableName: string
): Promise<T | null> {
  const query = `SELECT * FROM ${tableName} WHERE user_id = $1`;
  const values = [userId];
  let client: PoolClient | undefined;

  try {
    client = await pool.connect();
    const res = await client.query(query, values);

    if (res.rows.length === 0) {
      console.log(`No ${tableName} found for user ID:`, userId);
      return null;
    }

    return res.rows[0];
  } catch (error) {
    console.error(`Error retrieving ${tableName} by user ID:`, error);
    throw error;
  } finally {
    client?.release();
  }
}

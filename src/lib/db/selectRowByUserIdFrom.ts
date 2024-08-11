import { PoolClient } from "pg";
import pool from "../resources/pool";
import db from "../resources/pool";
import { Database } from "@/types/Database";
import { User } from "next-auth";

type A = keyof Database;

const tableName: A = "daily_routines";

export default async function selectRowByUserIdFrom<T>(
  userId: string,
  from: Extract<A, "daily_routines" | "visitor_status">
): Promise<T | null> {
  const query = `SELECT * FROM ${from} WHERE user_id = $1`;
  const values = [userId];
  let client: PoolClient | undefined;
  
  try {
    db.selectFrom(from).where("user_id", "=", userId).executeTakeFirst();

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

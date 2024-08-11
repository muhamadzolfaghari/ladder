import { Database } from "@/types/Database";
import db from "../resources/pool";
import { InsertObject } from "kysely";

export default function insertIntoTable<
  TableName extends keyof Database,
  Table extends Database[TableName],
>(
  table: TableName,
  values: Omit<Table, "id">
): Promise<{ id: number } | undefined> {
  try {
    return db
      .insertInto(table)
      .values(values as unknown as InsertObject<Database, TableName>)
      .returning("id")
      .executeTakeFirst();
  } catch (error) {
    console.error(`Error inserting ${table}:`, error);
    throw new Error(`Failed to insert ${table}`);
  }
}

import Ladder from "@/types/Ladder";
import getRowByUserIdAndTable from "./geRowByUserIdAndTable";

type RawLadder = Record<string, string | number | undefined> | null;

export default async function getLadderByUserId(
  userId: string
): Promise<Ladder | null> {
  const rawLadder = (await getRowByUserIdAndTable(
    userId,
    "ladders"
  )) as RawLadder;

  return normalizeRow(rawLadder);
}

/**
 * Converts a string with underscores to camel case.
 *
 * @param str - The string to convert.
 * @returns The string in camel case.
 */
const convertSnakeCaseToCamelCase = (str: string): string =>
  str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());

/**
 * Normalizes a raw database row by converting any snake_case keys to camelCase.
 *
 * @param row - The raw database row to normalize.
 * @returns The normalized row, or `null` if the input row is `null`.
 */
function normalizeRow(row: RawLadder): Ladder | null {
  if (!row) {
    return null;
  }

  const newRow = JSON.parse(JSON.stringify(row));

  for (const key in newRow) {
    if (newRow.hasOwnProperty(key)) {
      if (key.includes("_")) {
        const newKey = convertSnakeCaseToCamelCase(key);
        newRow[newKey] = newRow[key];
        delete newRow[key];
      }
    }
  }

  return newRow;
}

import Ladder from "@/types/Ladder";
import getRowByUserIdAndTable from "./geRowByUserIdAndTable";
import convertToCamelCase from "../utils/convertToCamelCase";

type RawLadder = Record<string, string | number | undefined> | null;

export default async function getLadderByUserId(
  userId: string
): Promise<Ladder | null> {
  const rawLadder = await getRowByUserIdAndTable<RawLadder>(userId, "ladders");

  if (!rawLadder) {
    return null;
  }

  return convertToCamelCase(rawLadder);
}

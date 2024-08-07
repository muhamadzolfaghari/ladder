import Ladder from "@/types/Ladder";
import getRowByUserIdAndTable from "./geRowByUserIdAndTable";

export default async function getLadderByUserId(
  userId: string
): Promise<Ladder | null> {
  return getRowByUserIdAndTable(userId, "ladders");
}

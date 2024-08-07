import VisitorStatus from "@/types/VisitorStatus";
import getRowByUserIdAndTable from "./geRowByUserIdAndTable";

export default async function getVisitorStatusByUserId(
  userId: string
): Promise<VisitorStatus | null> {
  return getRowByUserIdAndTable<VisitorStatus>(userId, "visitor_status");
}

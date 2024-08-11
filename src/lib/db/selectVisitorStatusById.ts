import VisitorStatus from "@/types/VisitorStatus";
import selectRowByUserIdFrom from "./selectRowByUserIdFrom";

export default async function getVisitorStatusByUserId(
  userId: string
): Promise<VisitorStatus | null> {
  return selectRowByUserIdFrom<VisitorStatus>(userId, "visitor_status");
}

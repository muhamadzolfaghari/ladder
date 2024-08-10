import GetStart from "@/components/GetStart/GetStart";
import getVisitorStatusByUserId from "@/lib/db/getVisitorStatusById";
import getUser from "@/lib/utils/getUser";
import VisitorStatus from "@/types/VisitorStatus";
import { redirect } from "next/navigation";

export default async function Page() {
  let visitorStatus: VisitorStatus | null;

  try {
    const user = await getUser();
    visitorStatus = await getVisitorStatusByUserId(user?.id!);
  } catch {
    return <div>Internal Server Error</div>;
  }

  if (!visitorStatus?.is_first_visit) {
    return redirect("/");
  }

  return <GetStart />;
}

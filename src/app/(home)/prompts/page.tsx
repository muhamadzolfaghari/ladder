import PromptsLayout from "@/components/layout/PromptsLayout";
import Prompts from "@/components/Prompts/Prompts";
import getLadderByUserId from "@/lib/db/getLadderByUserId";
import getVisitorStatusByUserId from "@/lib/db/getVisitorStatusById";
import getUser from "@/lib/utils/getUser";
import Ladder from "@/types/Ladder";
import VisitorStatus from "@/types/VisitorStatus";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page() {
  let ladder: Ladder | null;
  let visitorStatus: VisitorStatus | null;

  try {
    const user = await getUser();
    ladder = await getLadderByUserId(user?.id!);
    visitorStatus = await getVisitorStatusByUserId(user?.id!);
  } catch {
    return <div>Internal Server Error</div>;
  }

  if (!visitorStatus || visitorStatus.is_first_visit) {
    return redirect("/get-start");
  }

  if (ladder) {
    return redirect("/");
  }

  return (
    <PromptsLayout>
      <Prompts />
    </PromptsLayout>
  );
}

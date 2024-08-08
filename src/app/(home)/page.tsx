import getUser from "@/lib/utils/getUser";
import { redirect } from "next/navigation";
import VisitorStatus from "../../types/VisitorStatus";
import getVisitorStatusByUserId from "@/lib/db/getVisitorStatusById";
import insertVisitorStatusByUserId from "@/lib/db/insertVisitorStatusByUserId";

const Home = async () => {
  let visitorStatus: VisitorStatus | null;

  try {
    const user = await getUser();

    visitorStatus = await getVisitorStatusByUserId(user?.id!);

    if (!visitorStatus) {
      await insertVisitorStatusByUserId(user?.id!);
    }
  } catch {
    return <div>Internal Server Error</div>;
  }

  if (!visitorStatus || visitorStatus.is_first_visit) {
    return redirect("/get-start");
  }

  if (!visitorStatus.is_prompts_finished) {
    return redirect("/prompt-1");
  }

  return redirect("/review")
};

export default Home;

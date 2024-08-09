import getUser from "@/lib/utils/getUser";
import { redirect } from "next/navigation";
import VisitorStatus from "../../types/VisitorStatus";
import getVisitorStatusByUserId from "@/lib/db/getVisitorStatusById";
import insertVisitorStatusByUserId from "@/lib/db/insertVisitorStatusByUserId";
import Ladder from "@/types/Ladder";
import getLadderByUserId from "@/lib/db/getLadderByUserId";

const Home = async () => {
  let ladder: Ladder | null;
  let visitorStatus: VisitorStatus | null;

  try {
    const user = await getUser();
    visitorStatus = await getVisitorStatusByUserId(user?.id!);
    ladder = await getLadderByUserId(user?.id!);

    if (!visitorStatus) {
      await insertVisitorStatusByUserId(user?.id!);
    }
  } catch {
    return <div>Internal Server Error</div>;
  }

  if (!visitorStatus || visitorStatus.is_first_visit) {
    return redirect("/get-start");
  }

  if (!ladder) {
    return redirect("/prompts");
  }

  return <div>home</div>
};

export default Home;

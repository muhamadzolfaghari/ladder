import getUser from "@/lib/utilities/getUser";
import getVisitorStatusById from "../api/visitor-status/db/getVisitorStatusById";
import { redirect } from "next/navigation";
import insertVisitorStatusByUserId from "../api/visitor-status/db/insertVisitorStatusByUserId";
import VisitorStatus from "../api/visitor-status/types/VisitorStatus";

const Home = async () => {
  let visitorStatus: VisitorStatus | undefined;

  try {
    const user = await getUser();

    if (!user?.id) {
      return <div>unauthorized</div>;
    }

    visitorStatus = await getVisitorStatusById(user.id);

    if (!visitorStatus) {
      await insertVisitorStatusByUserId(user.id);
    }
  } catch {
    return <div>Some error occured</div>;
  }

  if (!visitorStatus || visitorStatus.is_first_visit) {
    return redirect("/get-start");
  }

  return redirect("/prompt-1");
};

export default Home;

import getUser from "@/lib/utils/getUser";
import { redirect } from "next/navigation";
import VisitorStatus from "../../types/VisitorStatus";
import getVisitorStatusByUserId from "@/lib/db/getVisitorStatusById";
import insertVisitorStatusByUserId from "@/lib/db/insertVisitorStatusByUserId";

const Home = async () => {
  let visitorStatus: VisitorStatus | null;

  try {
    const user = await getUser();

    if (!user?.id) {
      return <div>unauthorized</div>;
    }

    visitorStatus = await getVisitorStatusByUserId(user.id);

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

import getUser from "@/lib/utilities/getUser";
import getVisitorStatusById from "../api/visitor-status/db/getVisitorStatusById";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await getUser();

  if (!user) {
    return <div>Not authenticated</div>;
  }

  const result = await getVisitorStatusById(user.id);
  const isFirstVisit = result?.is_first_visit !== false;

  if (isFirstVisit) {
    return redirect("/get-start");
  }

  return <div>prompt</div>;
};

export default Home;

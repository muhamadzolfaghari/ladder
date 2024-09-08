import getUser from "@/lib/utils/getUser";
import Ladder from "@/types/Ladder";
import GetStart from "@/components/GetStart/GetStart";
import Prompts from "@/components/Prompts/Prompts";
import Dashboard from "@/components/Dashboard";
import { User } from "next-auth";
import { VisitorStatusTable } from "@/types/Database";
import insertIntoTable from "@/lib/db/InsertIntoTable";
import selectFirstVisitorStatus from "@/lib/db/selectFirstVisitorStatus";
import getLadder from "./utils/getLadder";
import PromptsLayout from "@/components/Layout/PromptsLayout";
import Layout from "../layout";

const Home = async () => {
  let user: User | undefined;
  let ladder: Ladder | undefined;
  let visitorStatus: VisitorStatusTable | undefined;

  try {
    user = await getUser();
    visitorStatus = await selectFirstVisitorStatus(user?.id!);
    ladder = await getLadder(user?.id!);

    if (!visitorStatus) {
      await insertIntoTable("visitor_status", {
        user_id: user?.id!,
        is_first_visit: true,
      });
    }
  } catch (error) {
    console.log(error, "error");
    return <div>Internal Server Error</div>;
  }

  if (!visitorStatus || visitorStatus.is_first_visit) {
    return <GetStart />;
  }

  if (!ladder) {
    return (
      <PromptsLayout>
        <Prompts />
      </PromptsLayout>
    );
  }

  return (
    <Layout>
      <Dashboard user={user} ladder={ladder} />
    </Layout>
  );
};

export default Home;

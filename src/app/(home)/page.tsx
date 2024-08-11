import getUser from "@/lib/utils/getUser";
import VisitorStatus from "../../types/VisitorStatus";
import getVisitorStatusByUserId from "@/lib/db/getVisitorStatusById";
import insertVisitorStatusByUserId from "@/lib/db/insertVisitorStatusByUserId";
import Ladder from "@/types/Ladder";
import getLadderByUserId from "@/lib/db/selectLadderByUserId";
import GetStart from "@/components/GetStart/GetStart";
import PromptsLayout from "@/components/layout/PromptsLayout";
import Prompts from "@/components/Prompts/Prompts";
import Dashboard from "@/components/Dashboard";
import Layout from "@/components/layout/Layout";
import { User } from "next-auth";
import ladderJson from "../api/ladders/generate/new.json";
import { VisitorStatusTable } from "@/types/Database";
import selectFromVisitorStatusBy from "@/lib/db/selectFromVisitorStatusBy";
import insertIntoVisitorStatus from "@/lib/db/insertIntoVisitorStatus";

const Home = async () => {
  let user: User | undefined;
  let ladder: Ladder | null;
  let visitorStatus: VisitorStatusTable | undefined;

  try {
    user = await getUser();
    visitorStatus = await selectFromVisitorStatusBy(user?.id!);
    // ladder = await getLadderByUserId(user?.id!);
    ladder = ladderJson;

    if (!visitorStatus) {
      await insertIntoVisitorStatus(user?.id!, false);
    }
  } catch {
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
      <Dashboard user={user} />
    </Layout>
  );
};

export default Home;

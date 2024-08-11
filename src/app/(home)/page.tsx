import getUser from "@/lib/utils/getUser";
import VisitorStatus from "../../types/VisitorStatus";
import getVisitorStatusByUserId from "@/lib/db/getVisitorStatusById";
import insertVisitorStatusByUserId from "@/lib/db/insertVisitorStatusByUserId";
import Ladder from "@/types/Ladder";
import getLadderByUserId from "@/lib/db/getLadderByUserId";
import GetStart from "@/components/GetStart/GetStart";
import PromptsLayout from "@/components/layout/PromptsLayout";
import Prompts from "@/components/Prompts/Prompts";
import Dashboard from "@/components/Dashboard";
import Layout from "@/components/layout/Layout";
import { User } from "next-auth";

const Home = async () => {
  let user: User | undefined;
  let ladder: Ladder | null;
  let visitorStatus: VisitorStatus | null;

  try {
    user = await getUser();
    visitorStatus = await getVisitorStatusByUserId(user?.id!);
    ladder = await getLadderByUserId(user?.id!);

    if (!visitorStatus) {
      await insertVisitorStatusByUserId(user?.id!);
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

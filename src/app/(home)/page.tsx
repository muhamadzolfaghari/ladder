import getUser from "@/lib/utils/getUser";
import Ladder from "@/types/Ladder";
import GetStart from "@/components/GetStart/GetStart";
import PromptsLayout from "@/components/layout/PromptsLayout";
import Prompts from "@/components/Prompts/Prompts";
import Dashboard from "@/components/Dashboard";
import Layout from "@/components/layout/Layout";
import { User } from "next-auth";
import { VisitorStatusTable } from "@/types/Database";
import insertIntoTable from "@/lib/db/InsertIntoTable";
import selectFirstVisitorStatus from "@/lib/db/selectFirstVisitorStatus";
import getLadder from "./utils/getLadder";

const Home = async () => {
  let user: User | undefined;
  let ladder: Ladder | undefined;
  let visitorStatus: VisitorStatusTable | undefined;

  try {
    user = await getUser();
    visitorStatus = await selectFirstVisitorStatus(user?.id!);

    // const aaa = await insertIntoTable("ladders", {
    //   user_id: user?.id!,
    //   field_of_study: "",
    //   goal: "",
    //   current_level: "",
    //   time_commitment: "",
    //   preferred_learning_style: "",
    //   learning_pace: "",
    //   resources_available: "",
    //   preferred_tools_and_platforms: "",
    //   language: "",
    // });
    // const bbb = await insertIntoTable("learning_paths", {
    //   ladder_id: aaa?.id!,
    //   phase: "",
    //   duration: "",
    // });
    // await insertIntoTable("daily_routines", {
    //   learning_path_id: bbb?.id!,
    //   task: "ddd",
    //   resource: "",
    //   time: "",
    //   is_done: false,
    // });

    // learningPaths?.forEach(async (learningPath) => {
    //   const dailyRoutines = await selectAllDailyRoutines(learningPath.id);

    // });

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

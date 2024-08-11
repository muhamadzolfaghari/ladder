import LadderOverview from "@/components/LadderOverview";
import QuoteDay from "@/components/QuoteDay";
import TaskTrackerForDay from "@/components/TaskTrackerForDay";
import { User } from "next-auth";
import Header from "./Header";

interface DashboardProps {
  user: User | undefined;
}

const Dashboard = ({ user }: DashboardProps) => (
  <>
    <Header user={user} />
    <TaskTrackerForDay />
    <LadderOverview />
    <QuoteDay />
  </>
);

export default Dashboard;

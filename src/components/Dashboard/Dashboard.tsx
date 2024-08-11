import LadderOverview from "./LadderOverview";
import QuoteDay from "./QuoteDay";
import TaskTrackerForDay from "./TaskTrackerForDay";
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

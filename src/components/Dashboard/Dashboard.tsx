import LadderOverview from "./LadderOverview";
import QuoteDay from "./QuoteDay";
import TaskTrackerForDay from "./TaskTrackerForDay";
import { User } from "next-auth";
import Header from "./Header";
import Ladder, { DailyRoutine, LearningPath } from "@/types/Ladder";

interface DashboardProps {
  user: User | undefined;
  ladder: Ladder | undefined;
}

const Dashboard = ({ user, ladder }: DashboardProps) => (
  <>
    <Header user={user} />
    <TaskTrackerForDay ladder ={ladder} />
    <LadderOverview  ladder = {ladder?.fieldOfStudy} />
    <QuoteDay />
  </>
);

export default Dashboard;

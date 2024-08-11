import LadderOverview from "./LadderOverview";
import QuoteDay from "./QuoteDay";
import TaskTrackerForDay from "./TaskTrackerForDay";
import { User } from "next-auth";
import Header from "./Header";
import { DailyRoutine, LearningPath } from "@/types/Ladder";


interface DashboardProps {
  user: User | undefined;
  learningPath : LearningPath[] | undefined;
}

const Dashboard = ({ user, learningPath }: DashboardProps) => (
  <>
    <Header user={user} />
    <TaskTrackerForDay learningPath={learningPath} />
    <LadderOverview />
    <QuoteDay />
  </>
);

export default Dashboard;

import { DailyRoutine } from "./Ladder";

export default interface LearningPathWeekDaysResponse {
  phase: string;
  weekDay: number;
  weekNumber: number;
  dailyRoutines: DailyRoutine[];
}

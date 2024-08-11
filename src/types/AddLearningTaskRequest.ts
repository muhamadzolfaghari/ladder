import { DailyRoutine } from "./Ladder";

export type AddLearningTaskRequest = {
    phase: string;
    duration: string;
    learningTask: DailyRoutine;
};
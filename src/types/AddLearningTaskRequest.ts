import { LearningTask } from "./Ladder";

export type AddLearningTaskRequest = {
    phase: string;
    duration: string;
    learningTask: LearningTask;
};
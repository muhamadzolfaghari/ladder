import { z } from "zod";

export const DailyRoutineSchema = z.object({
  task: z.string(),
  resource: z.string(),
  time: z.string(),
});

export const LearningPathSchema = z.object({
  phase: z.string(),
  duration: z.string(),
  dailyRoutines: z.array(DailyRoutineSchema),
});

export const LadderSchema = z.object({
  fieldOfStudy: z.string(),
  goal: z.string(),
  currentLevel: z.string(),
  timeCommitment: z.string(),
  preferredLearningStyle: z.string(),
  learningPace: z.string(),
  resourcesAvailable: z.string(),
  preferredToolsAndPlatforms: z.string(),
  language: z.string(),
  learningPaths: z.array(LearningPathSchema),
});

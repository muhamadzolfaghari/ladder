import { z } from 'zod';
import { LearningTaskSchema } from './learningTaskSchema';

export const AddLearningTaskRequestSchema = z.object({
  phase: z.string(),
  duration: z.string(),
  learningTask: LearningTaskSchema,
});

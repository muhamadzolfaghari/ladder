
import { z } from 'zod';

export const LearningTaskSchema = z.object({
  task: z.string(),
  resource: z.string(),
  time: z.string(),
});

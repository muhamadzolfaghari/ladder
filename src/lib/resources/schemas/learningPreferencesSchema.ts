import { z } from 'zod';

 const LearningPreferencesSchema = z.object({
  goal: z.string(),
  current_level: z.string(),
  preferred_learning_style: z.string(),
  resources_available: z.string(),
  time_commitment: z.string(),
  language: z.string(),
  field_of_study: z.string(),
  learning_pace: z.string(),
  preferred_tools_and_platforms: z.string(),
});

export default LearningPreferencesSchema;
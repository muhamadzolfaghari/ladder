import { GeminiAIContentPart } from "@/types/GeminiAI";
import LearningPreferencesSchema from "../resources/schemas/learningPreferencesSchema";
import CreateLadderRequest from "@/types/CreateLadderRequest";

export default function getGeminiAIContentParts(
  payload: CreateLadderRequest
): GeminiAIContentPart[] | null {
  if (!LearningPreferencesSchema.safeParse(payload).success) {
    return null;
  }

  const data = Object.entries(payload);

  if (data.length < 9) {
    return null;
  }

  return data.map(([key, value]) => ({ text: `${key}=${value}` }));
}

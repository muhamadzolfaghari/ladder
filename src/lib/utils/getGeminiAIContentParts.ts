import { GeminiAIContentPart } from "@/types/GeminiAI";
import GenerateLadderRequest from "@/types/GenerateLadderRequest";
import LearningPreferencesSchema from "../resources/schemas/learningPreferencesSchema";

export default function getGeminiAIContentParts(
  payload: GenerateLadderRequest
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

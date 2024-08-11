import { GeminiAIContentPart } from "@/types/GeminiAI";
import CreateLadderRequest from "@/types/CreateLadderRequest";
import LadderPreferencesSchema from "@/lib/resources/schemas/ladderPreferencesSchema1";

export default function getGeminiAIContentParts(
  payload: CreateLadderRequest
): GeminiAIContentPart[] | null {
  if (!LadderPreferencesSchema.safeParse(payload).success) {
    return null;
  }

  const data = Object.entries(payload);

  if (data.length < 9) {
    return null;
  }

  return data.map(([key, value]) => ({ text: `${key}=${value}` }));
}

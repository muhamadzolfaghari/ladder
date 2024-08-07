import { GeminiAIContentPart } from "@/types/GeminiAI";
import GenerateLadderRequest from "@/types/GenerateLadderRequest";

export default function getGeminiAIContentParts(
  payload: GenerateLadderRequest,
): GeminiAIContentPart[] | undefined {
  const data = Object.entries(payload);

  if (data.length < 9) {
    return undefined;
  }

  return data.map(([key, value]) => ({ text: `${key}=${value}` }));
}

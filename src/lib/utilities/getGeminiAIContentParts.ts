import { GeminiAIContentPart, GeminiAIPayload } from "@/types/GeminiAI";

export default function getGeminiAIContentParts(
  payload: GeminiAIPayload,
): GeminiAIContentPart[] | undefined {
  const data = Object.entries(payload);

  if (data.length < 9) {
    return undefined;
  }

  return data.map(([key, value]) => ({ text: `${key}=${value}` }));
}

import axios from "axios";
import {
  GeminiAIRequest,
  GeminiAIResponse,
  GeminiAIContentPart,
} from "@/types/GeminiAI";

const ROLE_AND_PURPOSE =
  "Role and Purpose: You are a mentor responsible for creating personalized learning paths. Your primary goal is to design concise, realistic, and well-structured learning paths that guide learners from their current skill level to their desired proficiency. Each learning path should be divided into phases, with each phase containing a daily routine of small, manageable tasks.";
const OUTPUT_FORMAT =
  "Output Format: JSON format use all information in camel case keys.";

const SAFETY_SETTINGS = [
  {
    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
    threshold: "BLOCK_ONLY_HIGH",
  },
];

const GENERATION_CONFIG = {
  stopSequences: ["Title"],
  temperature: 0,
  maxOutputTokens: 8192,
  topP: 0.95,
  topK: 64,
};

const normalizeParts = (parts: GeminiAIContentPart[]) =>
  parts.map((part) => ({ text: part.text }));

const createData = (parts: GeminiAIContentPart[]): GeminiAIRequest => ({
  contents: [
    {
      parts: [
        { text: ROLE_AND_PURPOSE },
        { text: OUTPUT_FORMAT },
        ...normalizeParts(parts),
      ],
    },
  ],
  safetySettings: SAFETY_SETTINGS,
  generationConfig: GENERATION_CONFIG,
});

export default async function postGeminiAI(
  parts: GeminiAIContentPart[],
): Promise<string | undefined> {
  const url = new URL(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
  );
  url.searchParams.append("key", process.env.GEMINI_API_KEY!);

  const data = createData(parts);

  try {
    const { data: response } = await axios.post<GeminiAIResponse>(
      url.toString(),
      data,
      { headers: { "Content-Type": "application/json" } },
    );

    const firstCandidate = response.candidates?.[0];
    const firstPart = firstCandidate?.content.parts?.[0];
    return firstPart?.text;
  } catch (error) {
    console.error("Error posting to GeminiAI:", error);
    return undefined;
  }
}

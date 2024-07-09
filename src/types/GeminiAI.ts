interface GeminiContentPart {
  text: string;
}

interface GeminiContent {
  parts: GeminiContentPart[];
}

interface GeminiRequest {
  contents: GeminiContent[];
  safetySettings: { threshold: string; category: string }[];
  generationConfig: {
    topK: number;
    stopSequences: string[];
    temperature: number;
    maxOutputTokens: number;
    topP: number;
  };
}

interface GeminiResponse {
  candidates: {
    finishReason: string;
    index: number;
    safetyRatings: { probability: string; category: string }[];
    content: { role: string; parts: { text: string }[] };
  }[];
  usageMetadata: {
    candidatesTokenCount: number;
    totalTokenCount: number;
    promptTokenCount: number;
  };
}

interface GeminiAIRequest {
  goal: string;
  current_level: string;
  preferred_learning_style: string;
  resources_available: string;
  time_commitment: string;
  language: string;
  field_of_study: string;
  learning_pace: string;
  preferred_tools_and_platforms: string;
}

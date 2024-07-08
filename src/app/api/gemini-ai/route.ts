import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

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

interface RequestJson {
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

const createGeminiRequest = (commands: { text: string }[]): GeminiRequest => ({
  contents: [
    {
      parts: [
        {
          text: "Role and Purpose: You are a mentor responsible for creating personalized learning paths. Your primary goal is to design concise, realistic, and well-structured learning paths that guide learners from their current skill level to their desired proficiency. Each learning path should be divided into phases, with each phase containing a daily routine of small, manageable tasks.",
        },
        {
          text: "Output Format: JSON format use all information in camel case keys.",
        },
        ...commands,
      ],
    },
  ],
  safetySettings: [
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_ONLY_HIGH",
    },
  ],
  generationConfig: {
    stopSequences: ["Title"],
    temperature: 0,
    maxOutputTokens: 8192,
    topP: 0.95,
    topK: 64,
  },
});

function test() {
  const apiKey = process.env.API_KEY;

  // Define the request URL
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  // Define the request data
  const data = {
    contents: [
      {
        parts: [
          {
            text: "Explain how AI works",
          },
        ],
      },
    ],
  };

  // Make the POST request
  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function requestGemini(
  prompts: { text: string }[],
): Promise<string | undefined> {
  const url = new URL(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
  );
  url.searchParams.append("key", "AIzaSyBQYCuNCTiOHyFgTd_E3t0L7pSbAvz_m3s");

  const data = createGeminiRequest(prompts);
  const response = await axios.post<GeminiResponse>(url.toString(), data, {
    headers: { "Content-Type": "application/json" },
  });

  const [firstCandidate] = response.data.candidates;

  if (firstCandidate) {
    const [firstPart] = firstCandidate.content.parts;
    return firstPart.text;
  }

  return undefined;
}

const getPrompts = (requestJson: RequestJson) =>
  Object.entries(requestJson).map(([key, value]) => ({
    text: `${key}=${value}`,
  }));

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function POST(request: NextRequest) {
  test();

  try {
    const requestJson = (await request.json()) as RequestJson;
    const prompts = getPrompts(requestJson);

    if (prompts.length < 9) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    const response = await requestGemini(prompts);

    if (!response) {
      return NextResponse.json({ message: "Response is empty" });
    }

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e);
  }
}

// interface ProductProps {
//   id: number;
//   title: string;
//   price: number;
// }
//
// const Product = ({ id, title, price }: ProductProps) => {};
//
// interface Props {
//   id: number;
//   title: string;
//   price: number;
// }
//
// const Product = ({ id, title, price }: Props) => {};
//
//
// interface IProduct {
//   id: number;
// }

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface GeminiContentPart {
  text: string;
}

interface GeminiContent {
  parts: GeminiContentPart[];
}

interface GeminiRequest {
  contents: GeminiContent[];
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

const createGeminiRequest = (prompt: string): GeminiRequest => ({
  contents: [
    {
      parts: [
        {
          text: "you are a mentor who is supposed to give a learning paths. your paths should be concise and realistic, well structured with phase parts, each phase containing a daily/weekly routine of small tasks.",
        },
        {
          text: prompt,
        },
      ],
    },
  ],
});

async function requestGemini(prompt: string): Promise<string | undefined> {
  const url = new URL(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent"
  );
  url.searchParams.append("key", process.env.GEMINI_API_KEY!);

  const data = createGeminiRequest(prompt);
  const response = await axios.post<GeminiResponse>(url.toString(), data, {
    headers: { "Content-Type": "application/json" },
  });

  const [firstCandidate] = response.data.candidates;

  if (firstCandidate) {
    const [firstPart] = firstCandidate.content.parts;
    firstPart.text;
  }

  return undefined;
}

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await requestGemini(prompt);

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

import { NextRequest, NextResponse } from "next/server";
import axios from "axios"; // export async function POST(request: NextRequest) {

interface GeminiContentPart {
  text: string;
}

interface GeminiContent {
  parts: GeminiContentPart[];
}

interface Request {
  contents: GeminiContent[];
}

const createRequestData = (prompt: string): Request => ({
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

export async function POST(request: NextRequest) {
  const url = new URL(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent"
  );
  url.searchParams.append("key", process.env.GEMINI_API_KEY!);

  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const data = createRequestData(prompt);
    const response = await axios.post(url.toString(), data, {
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json(response.data, { status: 200 });
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

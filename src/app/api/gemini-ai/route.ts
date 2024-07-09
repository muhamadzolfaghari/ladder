import { NextRequest, NextResponse } from "next/server";
import { GeminiAIPayload } from "@/types/GeminiAI";
import postGeminiAI from "@/lib/utilities/postGeminiAI";
import getGeminiAIContentParts from "@/lib/utilities/getGeminiAIContentParts";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const requestJson = (await request.json()) as GeminiAIPayload;
    const geminiAIParts = getGeminiAIContentParts(requestJson);

    if (!geminiAIParts) {
      return NextResponse.json(
        { error: "Parts are required" },
        { status: 400 },
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(
      geminiAIParts.map((x) => x.text),
    );
    const response1 = await result.response;
    const text = response1.text();

    if (text) {
      return NextResponse.json({ text });
    }

    const response = await postGeminiAI(geminiAIParts);

    if (!response) {
      return NextResponse.json(
        { message: "Response is empty" },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e);
  }
}

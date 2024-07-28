import { NextRequest, NextResponse } from "next/server";
import { GeminiAIPayload } from "@/types/GeminiAI";
import postGeminiAI, {
  generateGeminiAIContent,
} from "@/lib/utilities/postGeminiAI";
import getGeminiAIContentParts from "@/lib/utilities/getGeminiAIContentParts";
import parseGeminiAIResponse from "@/lib/utilities/parseGeminiAIResponse";

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

    const text = await generateGeminiAIContent(
      geminiAIParts.map((x) => x.text),
    );

    const json = parseGeminiAIResponse(text);

    if (json) {
      return NextResponse.json({ json });
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
    console.log(e)
    return NextResponse.json(e);
  }
}

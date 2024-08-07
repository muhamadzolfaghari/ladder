import { NextRequest, NextResponse } from "next/server";
import getGeminiAIContentParts from "@/lib/utilities/getGeminiAIContentParts";
import newResponse from "./new.json";
import GenerateLadderRequest from "@/types/GenerateLadderRequest";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const requestJson = (await request.json()) as GenerateLadderRequest;
    const geminiAIParts = getGeminiAIContentParts(requestJson);

    if (!geminiAIParts) {
      return NextResponse.json(
        { error: "Parts are required" },
        { status: 400 }
      );
    }

    return NextResponse.json({ result: newResponse });
    // todo using real api when it's ready
    // const text = await generateGeminiAIContent(
    //   geminiAIParts.map((x) => x.text)
    // );

    // const json = parseGeminiAIResponse(text);

    // if (result) {
    //   return NextResponse.json({ result });
    // }

    // const response = await postGeminiAI(geminiAIParts);

    // if (!response) {
    //   return NextResponse.json(
    //     { message: "Response is empty" },
    //     { status: 404 }
    //   );
    // }

    // return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    console.error("generate-ladder-api", e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

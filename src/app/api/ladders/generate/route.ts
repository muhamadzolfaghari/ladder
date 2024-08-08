import { NextRequest, NextResponse } from "next/server";
import getGeminiAIContentParts from "@/lib/utils/getGeminiAIContentParts";
import templateResponse from "./new.json";
import GenerateLadderRequest from "@/types/GenerateLadderRequest";
import Ladder from "@/types/Ladder";
import convertToCamelCase from "@/lib/utils/convertToCamelCase";
import {
  createBadRequestErrorResponse,
  createErrorResponse,
  createResponse,
} from "@/lib/utils/responseHandlers";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const requestJson = (await request.json()) as GenerateLadderRequest;
    const geminiAIParts = getGeminiAIContentParts(requestJson);

    if (!geminiAIParts) {
      return createBadRequestErrorResponse("parts are not valid");
    }

    const result: Ladder = {
      ...templateResponse,
      ...convertToCamelCase(requestJson),
    };

    return createResponse(result);
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
    return createErrorResponse("Error", 500);
  }
}

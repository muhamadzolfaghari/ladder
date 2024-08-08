import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function createErrorResponse(
  message: string,
  status: number
): NextResponse {
  return NextResponse.json({ error: message }, { status });
}

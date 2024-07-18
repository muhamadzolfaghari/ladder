import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export async function GET(req: NextRequest) {
  const cookies = parse(req.headers.get("cookie") || "");
  const tokenSet = cookies.tokenSet ? JSON.parse(cookies.tokenSet) : null;

  if (!tokenSet) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const { userInfo } = tokenSet;
  return new NextResponse(JSON.stringify({ userInfo }), { status: 200 });
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const tokenSet = req.cookies.get("tokenSet")?.value;

  if (tokenSet) {
    return NextResponse.json({
      authenticated: true,
      tokenSet: JSON.parse(tokenSet),
    });
  } else {
    return NextResponse.json({ authenticated: false });
  }
}

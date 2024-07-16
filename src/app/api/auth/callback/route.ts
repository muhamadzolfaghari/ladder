import { NextRequest, NextResponse } from "next/server";
import { Issuer } from "openid-client";

export async function GET(req: NextRequest) {
  const googleIssuer = await Issuer.discover("https://accounts.google.com");
  const client = new googleIssuer.Client({
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
    redirect_uris: [`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`],
    response_types: ["code"],
  });

  const url = new URL(req.url);
  const params = url.searchParams;

  const code_verifier = req.cookies.get("code_verifier")?.value;

  if (!code_verifier) {
    return NextResponse.json(
      { error: "Code verifier not found in cookies" },
      { status: 400 },
    );
  }

  const tokenSet = await client.callback(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
    {
      code: params.get("code") as string,
      scope: params.get("scope"),
      authuser: params.get("authuser"),
      prompt: params.get("prompt"),
    },
    { code_verifier },
  );

  // Save the tokenSet in cookies or a secure storage
  const response = NextResponse.redirect("/");

  response.cookies.set("tokenSet", JSON.stringify(tokenSet), {
    httpOnly: true,
    secure: true,
  });

  return response;
}

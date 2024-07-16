import { NextResponse } from "next/server";
import { generators, Issuer } from "openid-client";

export async function GET(req: Request) {
  const googleIssuer = await Issuer.discover("https://accounts.google.com");
  const client = new googleIssuer.Client({
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
    redirect_uris: [`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`],
    response_types: ["code"],
  });

  const code_verifier = generators.codeVerifier();
  const code_challenge = generators.codeChallenge(code_verifier);

  // Save the code_verifier in cookies for later use
  const response = NextResponse.redirect(
    client.authorizationUrl({
      scope: "openid email profile",
      code_challenge,
      code_challenge_method: "S256",
    }),
  );

  response.cookies.set("code_verifier", code_verifier, {
    httpOnly: true,
    secure: true,
  });

  return response;
}

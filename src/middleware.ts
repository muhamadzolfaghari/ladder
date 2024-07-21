import { type NextRequest, NextResponse } from "next/server";
import isAuthenticated from "@/lib/isAuthenticated";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: "/api/:function*",
};

const FORBIDDEN_ROUTES = ["auth/google", "auth/callback", "auth/status"];

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (
    !FORBIDDEN_ROUTES.every((route) => url.href.endsWith(route)) &&
    !isAuthenticated(request)
  ) {
    return NextResponse.json(
      { message: "request is unauthorized" },
      { status: 401 },
    );
  }

  return NextResponse.next();
}

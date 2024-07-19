import {type NextRequest, NextResponse} from "next/server";

export async function middleware(request: NextRequest) {
  // return await updateSession(request);

  const token = request.cookies.get("auth_token"); // Assuming you store the token in a cookie
  const url = request.nextUrl.clone();

  if (!token && !url.pathname.endsWith("/auth")) {
    // Redirect to login page if the user is not authenticated
    return NextResponse.redirect(new URL("/api/auth/google", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

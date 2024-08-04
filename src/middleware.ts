import getUser from "@/lib/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const user = await getUser();

  if (!user && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

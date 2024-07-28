// import { type NextRequest, NextResponse } from "next/server";
// import isAuthenticated from "@/lib/isAuthenticated";
//
// // Limit the middleware to paths starting with `/api/`
// export const config = {
//   matcher: "/api/:function*",
// };
//
// export async function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone();
//
//   if (!url.href.includes("auth") && !isAuthenticated(request)) {
//     return NextResponse.json(
//       { message: "request is unauthorized" },
//       { status: 401 },
//     );
//   }
//
//   return NextResponse.next();
// }

// import authConfig from "./auth.config"
// import NextAuth from "next-auth"
// import {NextRequest} from "next/server";
//
// // Use only one of the two middleware options below
// // 1. Use middleware directly
// // export const { auth: middleware } = NextAuth(authConfig)
//
// // 2. Wrapped middleware option
// const { auth } = NextAuth(authConfig)
// export default auth(async function middleware(req: NextRequest) {
//     // Your custom middleware logic goes here
// })

// export { default } from "next-auth/middleware"
//
// export const config = { matcher: ["/dashboard"] }

import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

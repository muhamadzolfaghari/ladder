import { auth } from "@/auth";
import getUser from "@/lib/utilities/getUser";

export default auth(async (req) => {
  const user = await getUser();

  if (!user && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

import type { NextRequest } from "next/server";

const isAuthenticated = (request: NextRequest) =>
  !!request.cookies.get("auth_token");

export default isAuthenticated;

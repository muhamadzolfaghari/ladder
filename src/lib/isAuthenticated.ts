import type { NextRequest } from "next/server";

const isAuthenticated = (request: NextRequest) =>
  !!request.cookies.get("tokenSet")?.value;

export default isAuthenticated;

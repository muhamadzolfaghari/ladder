import { NextResponse } from "next/server";

export function applyCors(req) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (req.method === "OPTIONS") {
    // Handle preflight request
    return NextResponse.json({}, { headers });
  }

  return NextResponse.next();
}

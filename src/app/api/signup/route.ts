import zod, { z } from "zod";
import { NextResponse } from "next/server";
import signupSchema from "@/lib/signupSchema";
import supabase from "@/lib/utilities/createSupabaseClient";

export async function POST(req: Request) {
  const result = signupSchema.safeParse(await req.json());


  return NextResponse.json(result);
}

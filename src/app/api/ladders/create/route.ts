import selectFirstLadders from "@/lib/db/selectFirstLadders";
import getUser from "@/lib/utils/getUser";
import {
  createUnauthenticatedErrorResponse,
  createInternalServerErrorResponse,
  createOKResponse,
  createBadRequestErrorResponse,
} from "@/lib/utils/responseHandlers";
import { NextRequest, NextResponse } from "next/server";
import { insertLadder } from "./insertLadder";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const ladder = await selectFirstLadders(user.id);

    if (ladder) {
      return createBadRequestErrorResponse("Ladder already exists");
    }

    const newLadder = await request.json();
    await insertLadder(user.id, newLadder);

    return createOKResponse();
  } catch (e) {
    console.error("create-ladder-api", e);
    return createInternalServerErrorResponse();
  }
}

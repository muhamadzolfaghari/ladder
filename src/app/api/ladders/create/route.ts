import getLadderByUserId from "@/lib/db/selectLadderByUserId";
import { insertLaddersByUserId } from "@/lib/db/insertLaddersByUserId";
import getUser from "@/lib/utils/getUser";
import {
  createUnauthenticatedErrorResponse,
  createInternalServerErrorResponse,
  createOKResponse,
  createBadRequestErrorResponse,
} from "@/lib/utils/responseHandlers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const row = await getLadderByUserId(user.id);

    if (row) {
      return createBadRequestErrorResponse("Ladder already exists");
    }

    const newLadder = (await request.json());
    await insertLaddersByUserId(user.id, newLadder);

    return createOKResponse();
  } catch (e) {
    console.error("create-ladder-api", e);
    return createInternalServerErrorResponse();
  }
}

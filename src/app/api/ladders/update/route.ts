import getLadderByUserId from "@/lib/db/getLadderByUserId";
import { updateLaddersByUserId } from "@/lib/db/updateLaddersByUserId";
import getUser from "@/lib/utils/getUser";
import {
  createInternalServerErrorResponse,
  createNotFundedErrorResponse,
  createOKResponse,
  createUnauthenticatedErrorResponse,
} from "@/lib/utils/responseHandlers";
import CreateLadderRequest from "@/types/CreateLadderRequest";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const row = await getLadderByUserId(user.id);

    if (!row) {
      return createNotFundedErrorResponse("Ladder does not exist");
    }

    const newLadder = (await request.json()) as CreateLadderRequest;
    await updateLaddersByUserId(user.id, newLadder);

    return createOKResponse();
  } catch (e) {
    console.log(e);
    return createInternalServerErrorResponse();
  }
}

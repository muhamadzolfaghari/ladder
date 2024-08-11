import getUser from "@/lib/utils/getUser";
import {
  createInternalServerErrorResponse,
  createOKResponse,
  createUnauthenticatedErrorResponse,
} from "@/lib/utils/responseHandlers";
import Ladder from "@/types/Ladder";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    // const row = await getLadderByUserId(user.id);

    // if (!row) {
      // return createNotFundedErrorResponse("Ladder does not exist");
    // }

    const newLadder = (await request.json()) as Ladder;
    // await updateLaddersByUserId(user.id, newLadder);

    return createOKResponse();
  } catch (e) {
    console.log(e);
    return createInternalServerErrorResponse();
  }
}

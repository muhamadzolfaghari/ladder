import getLadderByUserId from "@/lib/db/getLadderByUserId";
import getUser from "@/lib/utils/getUser";
import {
  createUnauthenticatedErrorResponse,
  createNotFundedErrorResponse,
  createResponse,
  createInternalServerErrorResponse,
} from "@/lib/utils/responseHandlers";

export async function GET() {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const ladder = await getLadderByUserId(user.id);

    if (!ladder) {
      return createNotFundedErrorResponse("Ladder does not exist");
    }

    return createResponse(ladder);
  } catch {
    return createInternalServerErrorResponse();
  }
}

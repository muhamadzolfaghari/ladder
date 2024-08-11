import { NextRequest, NextResponse } from "next/server";
import getUser from "@/lib/utils/getUser";
import getLadderByUserId from "@/lib/db/selectLadderByUserId";
import { AddLearningTaskRequestSchema } from "@/lib/resources/schemas/addLearningTaskRequestSchema";
import Ladder from "@/types/Ladder";
import { AddLearningTaskRequest } from "@/types/AddLearningTaskRequest";
import { updateLaddersByUserId } from "@/lib/db/updateLaddersByUserId";
import {
  createUnauthenticatedErrorResponse,
  createErrorResponse,
  createNotFundedErrorResponse,
  createBadRequestErrorResponse,
  createOKResponse,
} from "@/lib/utils/responseHandlers";

const findLearningPath = (ladder: Ladder, phase: string, duration: string) =>
  ladder.learningPath?.find(
    (path) => path.phase === phase && path.duration === duration
  );

const validateRequest = (payload: AddLearningTaskRequest): boolean =>
  AddLearningTaskRequestSchema.safeParse(payload).success;

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const requestJson = (await request.json()) as AddLearningTaskRequest;

    if (!validateRequest(requestJson)) {
      return createBadRequestErrorResponse();
    }

    const ladder = await getLadderByUserId(user.id);

    if (!ladder) {
      return createNotFundedErrorResponse("Ladder does not exist");
    }

    const { phase, duration, learningTask } = requestJson;
    const learningPath = findLearningPath(ladder, phase, duration);

    if (!learningPath) {
      return createNotFundedErrorResponse("Learning path does not exist");
    }

    learningPath.dailyRoutine?.push(learningTask);
    await updateLaddersByUserId(user.id, ladder);

    return createOKResponse();
  } catch (e) {
    console.error("create-ladder-api", e);
    return createErrorResponse("Internal Server Error", 500);
  }
}

import { NextRequest, NextResponse } from "next/server";
import getUser from "@/lib/utils/getUser";
import Ladder, { LearningPath } from "@/types/Ladder";
import { AddLearningTaskRequest } from "@/types/AddLearningTaskRequest";
import {
  createUnauthenticatedErrorResponse,
  createErrorResponse,
  createNotFundedErrorResponse,
  createBadRequestErrorResponse,
  createOKResponse,
} from "@/lib/utils/responseHandlers";
import { DailyRoutineSchema } from "@/lib/resources/schemas/ladderSchema";
import getLadder from "@/app/(home)/utils/getLadder";

const findLearningPath = (ladder: Ladder, phase: string, duration: string) =>
  ladder.learningPaths?.find(
    (path) => path.phase === phase && path.duration === duration
  );

const validateRequest = (payload: LearningPath): boolean =>
  DailyRoutineSchema.safeParse(payload).success;

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

    const ladder = await getLadder(user.id);

    if (!ladder) {
      return createNotFundedErrorResponse("Ladder does not exist");
    }

    const { phase, duration, learningTask } = requestJson;
    const learningPath = findLearningPath(ladder, phase, duration);

    if (!learningPath) {
      return createNotFundedErrorResponse("Learning path does not exist");
    }

    learningPath.dailyRoutines?.push(learningTask);
    // await updateLaddersByUserId(user.id, ladder);

    return createOKResponse();
  } catch (e) {
    console.error("create-ladder-api", e);
    return createErrorResponse("Internal Server Error", 500);
  }
}

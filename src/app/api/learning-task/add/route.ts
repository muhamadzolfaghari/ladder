// /src/api/learning-path/add.ts
import { NextRequest, NextResponse } from "next/server";
import getUser from "@/lib/utils/getUser";
import getLadderByUserId from "@/lib/db/getLadderByUserId";
import { AddLearningTaskRequestSchema } from "@/lib/resources/schemas/addLearningTaskRequestSchema";
import Ladder from "@/types/Ladder";
import createErrorResponse from "@/lib/utils/createErrorResponse";
import { AddLearningTaskRequest } from "@/types/AddLearningTaskRequest";

function findLearningPath(ladder: Ladder, phase: string, duration: string) {
  return ladder.learningPath.find(
    (path) => path.phase === phase && path.duration === duration
  );
}

function validateRequest(payload: AddLearningTaskRequest): boolean {
  return AddLearningTaskRequestSchema.safeParse(payload).success;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createErrorResponse("Not authenticated", 401);
    }

    const requestJson = (await request.json()) as AddLearningTaskRequest;

    if (!validateRequest(requestJson)) {
      return createErrorResponse("Learning path is not valid", 400);
    }

    const ladder = await getLadderByUserId(user.id);

    if (!ladder) {
      return createErrorResponse("Ladder does not exist", 400);
    }

    const { phase, duration, learningTask } = requestJson;
    const learningPath = findLearningPath(ladder, phase, duration);

    if (!learningPath) {
      return createErrorResponse("Learning path does not exist", 400);
    }

    learningPath.dailyRoutine.push(learningTask);

    return NextResponse.json({ result: "ok" });
  } catch (e) {
    console.error("create-ladder-api", e);
    return createErrorResponse("Internal Server Error", 500);
  }
}

import insertIntoTable from "@/lib/db/InsertIntoTable";
import selectFirstLadders from "@/lib/db/selectFirstLadders";
import getUser from "@/lib/utils/getUser";
import {
  createUnauthenticatedErrorResponse,
  createInternalServerErrorResponse,
  createOKResponse,
  createBadRequestErrorResponse,
} from "@/lib/utils/responseHandlers";
import Ladder, { DailyRoutine } from "@/types/Ladder";
import { NextRequest, NextResponse } from "next/server";

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

async function insertLadder(userId: string, newLadder: Required<Ladder>) {
  const insertedLadder = await insertIntoTable("ladders", {
    user_id: userId,
    field_of_study: newLadder.fieldOfStudy,
    goal: newLadder.goal,
    current_level: newLadder.currentLevel,
    time_commitment: newLadder.timeCommitment,
    preferred_learning_style: newLadder.preferredLearningStyle,
    learning_pace: newLadder.learningPace,
    resources_available: newLadder.resourcesAvailable,
    preferred_tools_and_platforms: newLadder.preferredToolsAndPlatforms,
    language: newLadder.language,
  });

  for (const learningPath of newLadder.learningPaths) {
    const insertedLearningPath = await insertIntoTable("learning_paths", {
      ladder_id: insertedLadder?.id!,
      phase: learningPath.phase!,
      duration: learningPath.duration!,
    });

    for (const dailyRoutine of learningPath.dailyRoutines as Required<DailyRoutine>[]) {
      await insertIntoTable("daily_routines", {
        learning_path_id: insertedLearningPath?.id!,
        task: dailyRoutine.task,
        resource: dailyRoutine.resource,
        time: dailyRoutine.time,
      });
    }
  }
}

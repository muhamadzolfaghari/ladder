import getUser from "@/lib/utils/getUser";
import {
  createUnauthenticatedErrorResponse,
  createOKResponse,
  createInternalServerErrorResponse,
  createBadRequestErrorResponse,
} from "@/lib/utils/responseHandlers";
import insertIntoTable from "@/lib/db/InsertIntoTable";
import { NextRequest } from "next/server";
import CreateDailyRoutineRequest from "@/types/CreateDailyRoutineRequest";
import { DailyRoutineSchema } from "@/lib/resources/schemas/ladderSchema";
import { getWeekDays } from "../../learning-path/week-days/getWeekDays";

export async function POST(request: NextRequest) {
  try {
    const user = await getUser();
    const json = (await request.json()) as CreateDailyRoutineRequest;

    if (!DailyRoutineSchema.safeParse(json).success) {
      return createBadRequestErrorResponse("Invalid request body");
    }

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const weekDays = await getWeekDays(user.id);

    if (!weekDays) {
      return createBadRequestErrorResponse("No learning path found");
    }

    await insertIntoTable("daily_routines", {
      learning_path_id: weekDays.id,
      ...json,
    });

    return createOKResponse();
  } catch (error) {
    console.error(error);
    return createInternalServerErrorResponse();
  }
}

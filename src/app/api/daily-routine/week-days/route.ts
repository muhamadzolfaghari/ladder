import selectAllDailyRoutines from "@/lib/db/selectAllDailyRoutines";
import selectAllDailyRoutineWeekDays from "@/lib/db/selectAllDailyRoutineWeekDays";
import db from "@/lib/resources/pool";
import getUser from "@/lib/utils/getUser";
import {
  createBadRequestErrorResponse,
  createInternalServerErrorResponse,
  createResponse,
  createUnauthenticatedErrorResponse,
} from "@/lib/utils/responseHandlers";

export async function GET() {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const ladder = await db
      .selectFrom("ladders")
      .selectAll()
      .where("user_id", "=", user.id)
      .executeTakeFirst();

    if (!ladder) {
      return createBadRequestErrorResponse("Ladder not found");
    }

    const dailyRoutines = await db
      .selectFrom("learning_paths")
      .selectAll()
      .where("ladder_id", "=", ladder?.id!)
      .innerJoin(
        "daily_routines",
        "daily_routines.learning_path_id",
        "learning_paths.id"
      )
      .execute();

    for (const dailyRoutine of dailyRoutines) {
       await db("daily_routine_week_days").selectAll
    }

    return createResponse(result);
  } catch (e) {
    console.error("daily-routine-week-days-api", e);
    return createInternalServerErrorResponse();
  }
}

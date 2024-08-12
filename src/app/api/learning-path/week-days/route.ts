import db from "@/lib/resources/pool";
import getUser from "@/lib/utils/getUser";
import {
  createBadRequestErrorResponse,
  createInternalServerErrorResponse,
  createResponse,
  createUnauthenticatedErrorResponse,
} from "@/lib/utils/responseHandlers";
import LearningPathWeekDaysResponse from "@/types/LearningPathWeekDaysResponse";
import { NextResponse } from "next/server";
import { getWeekDays } from "./getWeekDays";

export async function GET(): Promise<
  NextResponse<LearningPathWeekDaysResponse | unknown>
> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const learningPathWeekDays = await getWeekDays(user.id);

    if (!learningPathWeekDays) {
      return createBadRequestErrorResponse("Learning path is finished");
    }

    const dailyRoutines = await db
      .selectFrom("daily_routines")
      .selectAll()
      .where("learning_path_id", "=", learningPathWeekDays.id)
      .execute();

    if (!dailyRoutines) {
      return createBadRequestErrorResponse("Learning path is finished");
    }

    return createResponse({
      phase: learningPathWeekDays.phase,
      weekDay: learningPathWeekDays.week_day,
      weekNumber: learningPathWeekDays.week_number,
      dailyRoutines: dailyRoutines.map(({ resource, task, time }) => ({
        resource,
        task,
        time,
      })),
    });
    // insertIntoTable("daily_routine_week_days",  )

    // type Week = {
    //   learningPathId: number;
    //   dailyRoutineId: number;
    //   time: string;
    //   weekNumber: number;
    //   weekDay: number;
    //   daysCount: number;
    //   weeksCount: number;
    // };

    // const learningPathId = 19;

    // const dailyRoutines1 = await db
    //   .selectFrom("learning_paths")
    //   .select([
    //     "learning_paths.id as learning_path_id",
    //     "learning_paths.duration",
    //     "learning_paths.phase",
    //     (eb) =>
    //       eb
    //         .selectFrom("daily_routines")
    //         .whereRef(
    //           "daily_routines.learning_path_id",
    //           "=",
    //           "learning_paths.id"
    //         )
    //         .select(db.fn.count("daily_routines.id").as("count"))
    //         .as("days_count"),
    //   ])
    //   .selectAll()
    //   .where("ladder_id", "=", ladder?.id!)
    //   .where("learning_paths.id", "=", learningPathId)
    //   .innerJoin(
    //     "daily_routines",
    //     "daily_routines.learning_path_id",
    //     "learning_paths.id"
    //   )
    //   .execute();

    // const [first] = dailyRoutines1.map((routine) => ({
    //   ...routine,
    //   days_count: Number(routine.days_count),
    //   weeks_count: parseInt(routine.duration.match(/\d+/)?.[0] || "0"),
    // }));

    // let dailyRoutineWeeDays = await db
    //   .selectFrom("daily_routine_week_days")
    //   .select(["week_day", "week_number"])
    //   .where("daily_routine_id", "=", first.id)
    //   .orderBy("id desc")
    //   .executeTakeFirst();

    // if (
    //   (dailyRoutineWeeDays?.week_day ?? 0 >= first.days_count) ||
    //   (dailyRoutineWeeDays?.week_number ?? 0 >= first.weeks_count)
    // ) {
    //   console.log("learning path is finished");
    // }

    // if (!dailyRoutineWeeDays) {
    //   await insertIntoTable("daily_routine_week_days", {
    //     daily_routine_id: first.id,
    //     week_number: 1,
    //     week_day: 1,
    //   });
    // } else {
    //   const { week_day, week_number } = dailyRoutineWeeDays;

    //   if (dailyRoutineWeeDays.week_day < first.days_count) {
    //     await insertIntoTable("daily_routine_week_days", {
    //       daily_routine_id: first.id,
    //       week_number: week_number,
    //       week_day: week_day + 1,
    //     });
    //   } else if (dailyRoutineWeeDays.week_number < first.weeks_count) {
    //     await insertIntoTable("daily_routine_week_days", {
    //       daily_routine_id: first.id,
    //       week_number: week_number + 1,
    //       week_day: 1,
    //     });
    //   }
    // }

    // const groupedByLearningPathId = a.reduce(
    //   (prev, cur) => ({
    //     ...prev,
    //     [cur.learning_path_id]: [...(prev[cur.learning_path_id] || []), cur],
    //   }),
    //   {} as any
    // );

    // console.log(

    //   dailyRoutines1.filter((routine) => routine.learning_path_id === 19)

    //   await insertIntoTable("daily_routine_week_days", {
    //     daily_routine_id: dailyRoutines1[0].ladder_id,
    //     week_number: 1,
    //     week_day: 1,
    //   })

    //   // dailyRoutines1.reduce(
    //   //   (prev, cur) => ({
    //   //     ...prev,
    //   //     [cur.learning_path_id]: [...(prev[cur.learning_path_id] || []), cur],
    //   //   }),
    //   //   {} as any
    //   // )
    // );

    // let dailyRoutines = await db
    //   .selectFrom("learning_paths")
    //   .where("ladder_id", "=", ladder?.id!)
    //   .innerJoin(
    //     "daily_routines",
    //     "daily_routines.learning_path_id",
    //     "learning_paths.id"
    //   )
    //   .leftJoin(
    //     "daily_routine_week_days",
    //     "daily_routine_week_days.daily_routine_id",
    //     "daily_routines.id"
    //   )
    //   .select([
    //     "learning_path_id as learning_path_id",
    //     "daily_routines.id as daily_routine_id",
    //     "duration",
    //     "time",
    //     "week_number",
    //     "week_day",
    //     (eb) =>
    //       eb
    //         .selectFrom("daily_routines")
    //         .whereRef(
    //           "daily_routines.learning_path_id",
    //           "=",
    //           "learning_paths.id"
    //         )
    //         .select(db.fn.count("daily_routines.id").as("count"))
    //         .as("days_count"),
    //   ])
    //   .execute();

    // console.log();

    // const newDailyRoutines: Week[] = dailyRoutines.map((dailyRoutine) => {
    //   const weeksCount = parseInt(
    //     dailyRoutine.duration.match(/\d+/)?.[0] || "0"
    //   );

    //   return {
    //     learningPathId: dailyRoutine.learning_path_id,
    //     dailyRoutineId: dailyRoutine.daily_routine_id,
    //     daysCount: Number(dailyRoutine.days_count),
    //     weeksCount,
    //     weekDay: dailyRoutine.week_day ?? 0,
    //     weekNumber: dailyRoutine.week_number ?? 0,
    //     time: dailyRoutine.time,
    //   } as Week;
    // });

    // const result = newDailyRoutines.filter((routine) => routine.weekDay > 0);

    // console.log(dailyRoutines, "dsfsf");

    // console.log(newDailyRoutines.filter((x) => !!x.weekDay).slice(-1));

    // console.log(result);

    // for (const item of result.slice(-1)) {
    //   if (item.weekDay < item.daysCount) {
    //     console.log(item.weekDay + 1);

    //     await insertIntoTable("daily_routine_week_days", {
    //       daily_routine_id: item.dailyRoutineId,
    //       week_number: item.weekNumber,
    //       week_day: item.weekDay + 1,
    //     });
    //     break;
    //   }

    //   if (item.weekNumber < item.weeksCount) {
    //     await insertIntoTable("daily_routine_week_days", {
    //       daily_routine_id: item.dailyRoutineId,
    //       week_number: item.weekNumber + 1,
    //       week_day: 1,
    //     });
    //     break;
    //   }

    //   // await insertIntoTable("daily_routine_week_days", {
    //   //   daily_routine_id: item.dailyRoutineId + 1,
    //   //   week_number: 1,
    //   //   week_day: 1,
    //   // });
    //   break;
    // }

    // console.clear();
    // console.log(
    //   await db
    //     .selectFrom("daily_routines")
    //     .selectAll()
    //     .where("learning_path_id", "=", result.slice(-1)[0].learningPathId)
    //     .execute()
    // );

    // for (const dailyRoutine of dailyRoutines) {
    //    await db.selectFrom("daily_routine_week_days").selectAll
    // }
  } catch (e) {
    console.error("error", e);
    return createInternalServerErrorResponse();
  }
}

import db from "@/lib/resources/pool";

type WeekDays = {
  days_count: number;
  weeks_count: number;
  id: number;
  ladder_id: number;
  phase: string;
  duration: string;
  week_day: number;
  week_number: number;
};

export async function getWeekDays(userId: string): Promise<WeekDays | undefined> {
  const ladder = await db
    .selectFrom("ladders")
    .selectAll()
    .where("user_id", "=", userId)
    .executeTakeFirst();

  if (!ladder) {
    return undefined;
  }

  const result = await db
    .selectFrom("learning_paths")
    .select([
      (eb) =>
        eb
          .selectFrom("daily_routines")
          .whereRef("daily_routines.learning_path_id", "=", "learning_paths.id")
          .select(db.fn.count("daily_routines.id").as("count"))
          .as("days_count"),
    ])
    .selectAll()
    .where("ladder_id", "=", ladder?.id!)
    .execute();

  const learningPaths = result.map((routine) => ({
    ...routine,
    days_count: Number(routine.days_count),
    weeks_count: parseInt(routine.duration.match(/\d+/)?.[0] || "0"),
  }));

  for (const { days_count, id, weeks_count, ...rest } of learningPaths) {
    let { week_day, week_number } = (await db
      .selectFrom("learning_path_week_days")
      .select(["week_day", "week_number"])
      .where("learning_path_id", "=", id)
      .orderBy("id desc")
      .executeTakeFirst()) ?? { week_day: 1, week_number: 1 };

    if (week_day >= days_count && week_number >= weeks_count) {
      continue;
    }

    return { weeks_count, days_count, week_day, week_number, id, ...rest };
  }

  return undefined;
}

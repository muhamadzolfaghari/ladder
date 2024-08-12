import insertIntoTable from "@/lib/db/InsertIntoTable";
import getUser from "@/lib/utils/getUser";
import {
  createUnauthenticatedErrorResponse,
  createBadRequestErrorResponse,
  createOKResponse,
  createInternalServerErrorResponse,
} from "@/lib/utils/responseHandlers";
import { getWeekDays } from "../route";

export async function POST() {
  try {
    const user = await getUser();

    if (!user?.id) {
      return createUnauthenticatedErrorResponse();
    }

    const weekDays = await getWeekDays(user.id);

    if (!weekDays) {
      return createBadRequestErrorResponse("No learning path found");
    }

    const { days_count, id, week_day, week_number, weeks_count } = weekDays;

    if (week_day < days_count) {
      await insertIntoTable("learning_path_week_days", {
        learning_path_id: id,
        week_number: week_number,
        week_day: week_day + 1,
      });
    } else if (week_number < weeks_count) {
      await insertIntoTable("learning_path_week_days", {
        learning_path_id: id,
        week_number: week_number + 1,
        week_day: 1,
      });
    }

    return createOKResponse();
  } catch (error) {
    console.error(error);
    return createInternalServerErrorResponse();
  }
}

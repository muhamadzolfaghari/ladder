import selectAllDailyRoutines from "@/lib/db/selectAllDailyRoutines";
import selectAllLearningPaths from "@/lib/db/selectAllLearningPaths";
import selectFirstLadders from "@/lib/db/selectFirstLadders";
import convertToCamelCase from "@/lib/utils/convertToCamelCase";
import Ladder, { LearningPath } from "@/types/Ladder";

export default async function getLadder(
  userId: string
): Promise<Ladder | undefined> {
  const ladder = await selectFirstLadders(userId);

  if (!ladder?.id) {
    return undefined;
  }

  const newLadder: Ladder = {
    ...convertToCamelCase<Ladder>(ladder),
    learningPaths: [],
  };

  const learningPaths = await selectAllLearningPaths(ladder.id);

  if (!learningPaths) {
    return undefined;
  }

  const newLearningPaths: LearningPath[] = [];

  for (let i = 0; i < learningPaths!.length; i++) {
    const learningPath = learningPaths![i];
    const dailyRoutines = await selectAllDailyRoutines(learningPath.id);
    const newLearningPath = {
      ...convertToCamelCase<LearningPath>(learningPath),
      dailyRoutines: [],
    };

    if (!dailyRoutines) {
      return undefined;
    }

    for (let j = 0; j < dailyRoutines.length; j++) {
      newLearningPath.dailyRoutines.push(convertToCamelCase(dailyRoutines[j]));
    }

    newLearningPaths.push(newLearningPath);
  }

  newLadder.learningPaths = newLearningPaths;

  return newLadder;
}

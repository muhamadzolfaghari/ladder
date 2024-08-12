import insertIntoTable from "@/lib/db/InsertIntoTable";
import Ladder, { DailyRoutine } from "@/types/Ladder";

export async function insertLadder(
  userId: string,
  newLadder: Required<Ladder>
) {
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

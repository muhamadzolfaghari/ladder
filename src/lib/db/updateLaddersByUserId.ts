import Ladder from "@/types/Ladder";
import { PoolClient } from "pg";
import pool from "../resources/pool";

export const updateLaddersByUserId = async (
  userId: string,
  data: Ladder
): Promise<void> => {
  const {
    fieldOfStudy,
    goal,
    currentLevel,
    timeCommitment,
    preferredLearningStyle,
    learningPace,
    resourcesAvailable,
    preferredToolsAndPlatforms,
    language,
    learningPath,
  } = data;
  const query = `
    UPDATE ladders
    SET
      field_of_study = $2,
      goal = $3,
      current_level = $4,
      time_commitment = $5,
      preferred_learning_style = $6,
      learning_pace = $7,
      resources_available = $8,
      preferred_tools_and_platforms = $9,
      language = $10,
      learning_path = $11
    WHERE user_id = $1;
  `;
  const values = [
    userId,
    fieldOfStudy,
    goal,
    currentLevel,
    timeCommitment,
    preferredLearningStyle,
    learningPace,
    resourcesAvailable,
    preferredToolsAndPlatforms,
    language,
    JSON.stringify(learningPath),
  ];
  let client: PoolClient | undefined;

  try {
    client = await pool.connect();
    await client.query(query, values);
  } catch (error) {
    console.error("Error updating ladder data:", error);
    throw new Error("Database updating error");
  } finally {
    client?.release();
  }
};

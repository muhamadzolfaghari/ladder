import Ladder from "@/types/Ladder";
import { PoolClient } from "pg";
import pool from "../resources/pool";

export const insertLaddersByUserId = async (
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
    INSERT INTO ladders (
      user_id,
      field_of_study,
      goal,
      current_level,
      time_commitment,
      preferred_learning_style,
      learning_pace,
      resources_available,
      preferred_tools_and_platforms,
      language,
      learning_path
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
    )
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
    console.error("Error inserting ladder data:", error);
    throw new Error("Database insertion error");
  } finally {
    client?.release();
  }
};

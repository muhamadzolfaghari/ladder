interface LearningTask {
  task: string;
  resource: string;
  time: string;
}

interface LearningPhase {
  phase: string;
  duration: string;
  dailyRoutine: LearningTask[];
}

export default interface PostGeminiAIResponse {
  fieldOfStudy: string;
  goal: string;
  currentLevel: string;
  timeCommitment: string;
  preferredLearningStyle: string;
  learningPace: string;
  resourcesAvailable: string;
  preferredToolsAndPlatforms: string;
  language: string;
  learningPath: LearningPhase[];
}

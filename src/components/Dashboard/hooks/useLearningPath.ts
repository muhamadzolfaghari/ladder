import LearningPathWeekDaysResponse from "@/types/LearningPathWeekDaysResponse";
import { useMutation } from "@tanstack/react-query";

async function learningPathWeekdays(): Promise<LearningPathWeekDaysResponse> {
  const response = await fetch("/api/learning-path/week-days");

  return response.json();
}

export default function useLearningPathWeekdays() {
  return useMutation<LearningPathWeekDaysResponse>({
    mutationFn: learningPathWeekdays,
  });
}

import LearningPathWeekDaysResponse from "@/types/LearningPathWeekDaysResponse";
import { useMutation } from "@tanstack/react-query";

async function storelearningPathWeekdays(): Promise<LearningPathWeekDaysResponse> {
  const response = await fetch("api/learning-path/week-days/store", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

export function useStoreLearningPathWeekdays() {
 return useMutation<LearningPathWeekDaysResponse>({
    mutationFn: storelearningPathWeekdays,
  });
}

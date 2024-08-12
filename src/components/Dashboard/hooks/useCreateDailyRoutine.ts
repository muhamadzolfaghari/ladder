import CreateDailyRoutineRequest from "@/types/CreateDailyRoutineRequest";
import { useMutation } from "@tanstack/react-query";

async function createDailyRoutine(data: CreateDailyRoutineRequest) {
  const response = await fetch("/api/daily-routines/create", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export function useCreateDailyRoutine() {
  return useMutation<void, Error, CreateDailyRoutineRequest>({
    mutationFn: createDailyRoutine,
  });
}

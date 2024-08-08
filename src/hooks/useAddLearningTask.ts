import { AddLearningTaskRequest } from "@/types/AddLearningTaskRequest";
import { AddLearningTaskResponse } from "@/types/AddLearningTaskResponse";
import { useQueryClient, useMutation } from "@tanstack/react-query";

async function addLearningTask(
  data: AddLearningTaskRequest
): Promise<AddLearningTaskResponse> {
  const response = await fetch("/api/learning-tasks/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export const useAddLearningTask = () => {
  const queryClient = useQueryClient();
  return useMutation<AddLearningTaskResponse, Error, AddLearningTaskRequest>({
    mutationFn: (data) => addLearningTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["add-learning-task"] });
    },
    onError: (error) => {
      console.error("Error adding learning task:", error);
    },
  });
};

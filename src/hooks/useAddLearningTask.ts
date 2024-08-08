import { AddLearningTaskRequest } from "@/types/AddLearningTaskRequest";
import { AddLearningTaskResponse } from "@/types/AddLearningTaskResponse";
import { useQueryClient, useMutation } from "@tanstack/react-query";

async function addLearningTask(
  data: AddLearningTaskRequest
): Promise<AddLearningTaskResponse> {
  const response = await fetch("/api/add-learning-task", {
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
      localStorage.setItem("isPrompt3Completed", "true");
      queryClient.invalidateQueries({ queryKey: ["generate-ladder"] });
    },
    onError: (error) => {
      console.error("Error updating visitor status:", error);
    },
  });
};

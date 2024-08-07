import CreateLadderRequest from "@/types/CreateLadderRequest";
import CreateLadderResponse from "@/types/CreateLadderResponse";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function updateLadder(
  data: CreateLadderRequest
): Promise<CreateLadderResponse> {
  const response = await fetch("/api/ladders/update", {
    method: "PUT",
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

export const useUpdateLadder = () => {
  const queryClient = useQueryClient();
  return useMutation<CreateLadderResponse, Error, CreateLadderRequest>({
    mutationFn: (data) => updateLadder(data),
    onSuccess: () => {
      localStorage.setItem("isPrompt3Completed", "true");
      queryClient.invalidateQueries({ queryKey: ["generate-ladder"] });
    },
    onError: (error) => {
      console.error("Error updating visitor status:", error);
    },
  });
};

import CreateLadderRequest from "@/types/CreateLadderRequest";
import UpdateLadderRequest from "@/types/UpdateLadderRequest";
import UpdateLadderResponse from "@/types/UpdateLadderResponse";
import { useQueryClient, useMutation } from "@tanstack/react-query";

async function updateLadder(
  data: CreateLadderRequest
): Promise<UpdateLadderResponse> {
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
  return useMutation<UpdateLadderResponse, Error, UpdateLadderRequest>({
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

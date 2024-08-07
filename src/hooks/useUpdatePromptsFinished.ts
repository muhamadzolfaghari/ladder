import { useMutation, useQueryClient } from "@tanstack/react-query";

async function updatePromptsFinished(): Promise<void> {
  const response = await fetch("/api/visitor-status/prompts-finished", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
}

export const useUpdatePromptsFinished = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error>({
    mutationFn: () => updatePromptsFinished(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["visitor-status"] });
    },
    onError: (error) => {
      console.error("Error updating visitor status:", error);
      // Handle error, e.g., show error message, retry
    },
  });
};

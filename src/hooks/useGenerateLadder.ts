import GenerateLadderRequest from "@/types/GenerateLadderRequest";
import GenerateLadderResponse from "@/types/GenerateLadderResponse";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function generateLadder(
    data: GenerateLadderRequest,
  ): Promise<GenerateLadderResponse> {
    const response = await fetch("/api/ladders/generate", {
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
  

  export const useGenerateLadder = () => {
    const queryClient = useQueryClient();
    return useMutation<GenerateLadderResponse, Error, GenerateLadderRequest>({
      mutationFn: (data) => generateLadder(data),
      onSuccess: () => {
        localStorage.setItem("isPrompt3Completed", "true");
        queryClient.invalidateQueries({ queryKey: ["generate-ladder"] });
      },
      onError: (error) => {
        console.error("Error updating visitor status:", error);
      },
    });
  };
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostGeminiAIResponse from "../components/prompt2/types/PostGeminiAIResponset";

async function postGeminiAI(formData: FormData): Promise<PostGeminiAIResponse> {
  const response = await fetch("/api/gemini-api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export const usePostGeminiAi = () => {
  const queryClient = useQueryClient();
  return useMutation<PostGeminiAIResponse, Error, FormData>({
    mutationFn: (formData: FormData) => postGeminiAI(formData),
    // mutationFn: (formData: FormData) => postGeminiAI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gemini-ai"] });
    },
    onError: (error) => {
      console.error("Error updating visitor status:", error);
      // Handle error, e.g., show error message, retry
    },
  });
};

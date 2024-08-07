import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostGeminiAIResponse from "../components/prompt2/types/PostGeminiAIResponset";
interface FormData {
  field_of_study: string;
  goal: string;
  current_level: string;
  timeCommitment: string;
  preferredLearningStyle: string;
  learningPace: string;
  resourcesAvailable: string;
  language: string;
  preferredToolsAndPlatforms: string;
}
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
    onSuccess: () => {
      localStorage.setItem("isPrompt3Completed", "true");
      queryClient.invalidateQueries({ queryKey: ["gemini-ai"] });
    },
    onError: (error) => {
      console.error("Error updating visitor status:", error);
    },
  });
};


async function postPromptStatus(): Promise<void> {
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

export const usePostPromptStatus = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error>({
    mutationFn: () => postPromptStatus(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["visitor-status"] });
    },
    onError: (error) => {
      console.error("Error updating visitor status:", error);
      // Handle error, e.g., show error message, retry
    },
  });
};

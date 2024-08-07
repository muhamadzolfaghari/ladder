"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useGenerateLadder } from "../../../hooks/useGenerateLadder";
import GenerateLadderRequest from "@/types/GenerateLadderRequest";
import { useUpdatePromptsFinished } from "@/hooks/useUpdatePromptsFinished";
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

const schema = z.object({
  resourcesAvailable: z
    .string()
    .min(1, "Resources Available information is required"),
  language: z.string().min(1, "Language information is required"),
  preferredToolsAndPlatforms: z
    .string()
    .min(1, "Preferred Tools and Platforms information is required"),
});

const usePrompt3 = (initialData?: FormData) => {
  const router = useRouter();
  const { mutate: generateLadder } = useGenerateLadder();
  const { mutate: updatePromptsFinished } = useUpdatePromptsFinished();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formDataPrompt3");
    if (savedData) {
      const formData = JSON.parse(savedData);
      setValue("resourcesAvailable", formData.resources);
      setValue("language", formData.language);
      setValue("preferredToolsAndPlatforms", formData.toolPlatform);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      const prompts = JSON.parse(localStorage.getItem("prompts") as string);
      const newPrompts = { ...prompts, ...data } as GenerateLadderRequest;
      localStorage.setItem("prompts", JSON.stringify(newPrompts));

      generateLadder(newPrompts, {
        onSuccess: () => {
          updatePromptsFinished(undefined, {
            onSuccess: () => {
              localStorage.clear();
              router.push("/review");
            },
            onError: (error: Error) => {
              console.error("Error sending visitor status:", error);
            },
          });
        },
        onError: (error: Error) => {
          console.error("Error sending data:", error);
        },
      });
    } catch {
      router.push("/prompt-1");
    }
  };

  return { onSubmit, errors, handleSubmit, register };
};

export default usePrompt3;

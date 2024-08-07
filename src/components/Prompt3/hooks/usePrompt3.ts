"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { usePostGeminiAi, usePostPromptStatus } from "@/hooks/usePostGeminiAi";
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
  const { mutate: postGeminiAI } = usePostGeminiAi();
  const { mutate: postPromptStatus } = usePostPromptStatus();
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
      const newPrompts = { ...prompts, ...data };
      localStorage.setItem("prompts", JSON.stringify(newPrompts));

      postGeminiAI(data, {
        onSuccess: () => {
          postPromptStatus(undefined, {
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

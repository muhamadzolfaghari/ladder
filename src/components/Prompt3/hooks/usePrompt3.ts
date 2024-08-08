"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useGenerateLadder } from "../../../hooks/useGenerateLadder";
import GenerateLadderRequest from "@/types/GenerateLadderRequest";
import { useUpdatePromptsFinished } from "@/hooks/useUpdatePromptsFinished";
import { useCreateLadder } from "@/hooks/useCreateLadder";
interface FormData {
  resources_available: string;
  language: string;
  preferred_tools_and_platforms: string;
}

const schema = z.object({
  resources_available: z
    .string()
    .min(1, "Resources Available information is required"),
  language: z.string().min(1, "Language information is required"),
  preferred_tools_and_platforms: z
    .string()
    .min(1, "Preferred Tools and Platforms information is required"),
});

const usePrompt3 = (initialData?: FormData) => {
  const router = useRouter();
  const { mutate: generateLadder } = useGenerateLadder();
  const { mutate: updatePromptsFinished } = useUpdatePromptsFinished();
  const { mutate: createLadder } = useCreateLadder();
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
      setValue("resources_available", formData.resources);
      setValue("language", formData.language);
      setValue("preferred_tools_and_platforms", formData.toolPlatform);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      localStorage.setItem("formDataPrompt3", JSON.stringify(data));
      const prompts = JSON.parse(localStorage.getItem("prompts") as string);
      const newPrompts = { ...prompts, ...data } as GenerateLadderRequest;
      localStorage.setItem("prompts", JSON.stringify(newPrompts));
 
      generateLadder(newPrompts, {
        onSuccess: (response) => {
          createLadder(response.result, {
            onSuccess: () => {
              updatePromptsFinished(undefined, {
                onSuccess: () => {
                  router.push("/review");
                },
                onError: (error: Error) => {
                  console.error("Error sending visitor status:", error);
                },
              });
            },
            onError: (error: Error) => {
              console.error("Error creating ladder:", error);
            },
          });
        },
        onError: (error: Error) => {
          console.error("Error generating ladder:", error);
        },
      });
    } catch {
      router.push("/prompt-1");
    }
  };

  return { onSubmit, errors, handleSubmit, register };
};

export default usePrompt3;

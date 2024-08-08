"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface formData {
    time_commitment: string;
     preferred_learning_style: string;
    learning_pace: string;
  }
  
  const schema = z.object({
    time_commitment: z.string().min(1, "Time Commitment information is required"),
     preferred_learning_style: z.string().min(1, "Learning Style information is required"),
    learning_pace: z.string().min(1, "Learning Pace information is required"),
  });

const usePrompt2 = (initialData?: FormData) => {
    const router = useRouter();
    const {
      handleSubmit,
      register,
      formState: { errors },
      setValue,
    } = useForm<formData>({
      resolver: zodResolver(schema),
    });
    useEffect(() => {
      const saveData = localStorage.getItem("formDataPrompt2");
      if (saveData) {
        const formData = JSON.parse(saveData);
        setValue("time_commitment", formData.time_commitment);
        setValue("preferred_learning_style", formData.learningStyle);
        setValue("learning_pace", formData.learning_pace);
      }
    }, [setValue]);

    const onSubmit: SubmitHandler<formData> = (data) => {
        try {
          const prompts = JSON.parse(localStorage.getItem("prompts") as string);
          const newPrompts = { ...prompts, ...data };
          localStorage.setItem("prompts", JSON.stringify(newPrompts));
          router.push("/prompt-3");
          // step 3
          // localStorage clear
          // POST /postGeminiAI
          // POST /visitor-status/prompts-finished
        } catch {
          router.push("/prompt-1");
        }
      };

  return { onSubmit, errors, handleSubmit, register };
};

export default usePrompt2;

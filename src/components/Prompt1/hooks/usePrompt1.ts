"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { usePostGeminiAi } from "@/hooks/usePostGeminiAi";

interface FormData {
  field_of_study: string;
  goal: string;
  current_level: string;
}

const schema = z.object({
  field_of_study: z.string().min(1, "Field-Specific information is required"),
  goal: z.string().min(1, "Goal information is required"),
  current_level: z.string().min(1, "Current Level information is required"),
});

const usePrompt1 = (initialData?: FormData) => {
  const router = useRouter();
  const { mutate: postGeminiAI } = usePostGeminiAi();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const saveData = localStorage.getItem("formDataPrompt1");
    if (saveData) {
      const formData = JSON.parse(saveData);
      setValue("field_of_study", formData.field_of_study);
      setValue("goal", formData.goal);
      setValue("current_level", formData.current_level);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    // console.log(formData, "formdata");

    // window.localStorage.setItem("formDataPrompt1", JSON.stringify(formData));
    localStorage.setItem("promps", JSON.stringify(formData));
    router.push("/prompt2");
    // console.log(formData);
    // postGeminiAI(formData, {
    //   onSuccess: () => {
    //     router.push("/prompt-2");
    //   },
    //   onError: (error: Error) => {
    //     console.error("Error sending data:", error);
    //   },
    // });
  };

  return { onSubmit, errors, handleSubmit, register };
};

export default usePrompt1;

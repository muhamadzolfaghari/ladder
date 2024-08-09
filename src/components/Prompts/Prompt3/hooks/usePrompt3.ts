"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Prompt3Data from "@/types/Prompt3Data";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  prompt3Changed,
  promptsStatusChanged,
} from "@/store/slices/promptsSlice";
import { useEffect } from "react";

const schema = z.object({
  resources_available: z
    .string()
    .min(1, "Resources Available information is required"),
  language: z.string().min(1, "Language information is required"),
  preferred_tools_and_platforms: z
    .string()
    .min(1, "Preferred Tools and Platforms information is required"),
});

const usePrompt3 = () => {
  const { resources_available, language, preferred_tools_and_platforms } =
    useAppSelector((state) => state.prompts.prompt3Data);
  const dispatch = useAppDispatch();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Prompt3Data>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("language", language);
    setValue("resources_available", resources_available);
    setValue("preferred_tools_and_platforms", preferred_tools_and_platforms);
  }, [language, preferred_tools_and_platforms, resources_available, setValue]);

  const onSubmit: SubmitHandler<Prompt3Data> = async (data) => {
    dispatch(prompt3Changed(data));
    dispatch(promptsStatusChanged("review-prompt"));
  };

  return { onSubmit, errors, handleSubmit, register };
};

export default usePrompt3;

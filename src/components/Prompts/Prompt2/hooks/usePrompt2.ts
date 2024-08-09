"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Prompt2Data from "@/types/Prompt2Data";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  prompt2Changed,
  promptsStatusChanged,
} from "@/store/slices/promptsSlice";

const schema = z.object({
  time_commitment: z.string().min(1, "Time Commitment information is required"),
  preferred_learning_style: z
    .string()
    .min(1, "Learning Style information is required"),
  learning_pace: z.string().min(1, "Learning Pace information is required"),
});

const usePrompt2 = () => {
  const { learning_pace, preferred_learning_style, time_commitment } =
    useAppSelector((state) => state.prompts.prompt2Data);
  const dispatch = useAppDispatch();
  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Prompt2Data>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("learning_pace", learning_pace);
    setValue("time_commitment", time_commitment);
    setValue("preferred_learning_style", preferred_learning_style);
  }, [learning_pace, preferred_learning_style, setValue, time_commitment]);

  const onSubmit: SubmitHandler<Prompt2Data> = (data) => {
    dispatch(prompt2Changed(data));
    dispatch(promptsStatusChanged("prompt3"));
  };

  return { onSubmit, errors, handleSubmit, register };
};

export default usePrompt2;

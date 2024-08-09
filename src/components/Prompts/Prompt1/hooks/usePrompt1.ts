"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  prompt1Changed,
  promptsStatusChanged,
} from "@/store/slices/promptsSlice";
import Prompt1Data from "@/types/Prompt1Data";
import { useEffect } from "react";

const schema = z.object({
  field_of_study: z.string().min(1, "Field-Specific information is required"),
  goal: z.string().min(1, "Goal information is required"),
  current_level: z.string().min(1, "Current Level information is required"),
});

const usePrompt1 = () => {
  const { current_level, field_of_study, goal } = useAppSelector(
    (state) => state.prompts.prompt1Data
  );
  const dispatch = useAppDispatch();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Prompt1Data>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("goal", goal);
    setValue("current_level", current_level);
    setValue("field_of_study", field_of_study);
  }, [current_level, field_of_study, goal, setValue]);

  const onSubmit: SubmitHandler<Prompt1Data> = (data) => {
    dispatch(prompt1Changed(data));
    dispatch(promptsStatusChanged("prompt2"));
  };

  return { onSubmit, errors, handleSubmit, register };
};

export default usePrompt1;

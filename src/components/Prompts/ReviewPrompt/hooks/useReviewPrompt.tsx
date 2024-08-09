"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useCreateLadder } from "@/hooks/useCreateLadder";
import { useGenerateLadder } from "@/hooks/useGenerateLadder";
import {
  ladderGenerated,
  promptsStatusChanged,
} from "@/store/slices/promptsSlice";
import { useEffect } from "react";

const useReviewPrompt = () => {
  const dispatch = useAppDispatch();
  const {
    mutate: generateLadder,
    data: generateLadderData,
    isPending: generateLadderIsPending,
    isError: generateLadderIsError,
    isSuccess: generateLadderIsSuccess,
  } = useGenerateLadder();
  const { prompt1Data, prompt2Data, prompt3Data } = useAppSelector(
    (state) => state.prompts
  );
  const promptsData = { ...prompt1Data, ...prompt2Data, ...prompt3Data };

  console.log(
    "generateLadderIsPending",
    generateLadderIsPending,
    "generateLadderIsSuccess",
    generateLadderIsSuccess,
    "generateLadderIsError",
    generateLadderIsError
  );

  useEffect(() => {
    if (generateLadderIsSuccess) {
      dispatch(ladderGenerated(generateLadderData.result));
      dispatch(promptsStatusChanged("preview-ladder"));
    } else if (generateLadderIsError) {
      dispatch(promptsStatusChanged("error"));
    }
  }, [
    dispatch,
    generateLadderIsSuccess,
    generateLadderIsError,
    generateLadderData?.result,
  ]);

  function handleEditPrompt() {
    dispatch(promptsStatusChanged("prompt1"));
  }

  function handleCreateLadder() {
    generateLadder(promptsData);
  }

  return {
    handleEditPrompt,
    handleCreateLadder,
    generateLadderIsPending,
    ...promptsData,
  };
};

export default useReviewPrompt;

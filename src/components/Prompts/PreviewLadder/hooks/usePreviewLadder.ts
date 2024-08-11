import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useCreateLadder } from "@/hooks/useCreateLadder";
import { promptsStatusChanged } from "@/store/slices/promptsSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function usePreviewLadder() {
  const dispatch = useAppDispatch();
  const {
    mutate: createLader,
    isPending: createLadderIsPending,
    isError: createLadderIsError,
    isSuccess: createLadderIsSuccess,
  } = useCreateLadder();
  const router = useRouter();
  const ladder = useAppSelector((state) => state.prompts.ladder);

  useEffect(() => {
    if (createLadderIsSuccess) {
      router.refresh();
    } else if (createLadderIsError) {
      dispatch(promptsStatusChanged("error"));
    }
  }, [createLadderIsError, createLadderIsSuccess, dispatch, router]);

  function handleStartLadder() {
    createLader(ladder);
  }

  function handleBackToPrompt() {
    dispatch(promptsStatusChanged("review-prompt"));
  }

  return {
    ladder,
    handleStartLadder,
    handleBackToPrompt,
    createLadderIsPending,
  };
}

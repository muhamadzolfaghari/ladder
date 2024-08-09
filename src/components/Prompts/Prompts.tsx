"use client";
import Prompt3 from "./Prompt3";
import Prompt1 from "./Prompt1";
import Prompt2 from "./Prompt2";
import { useAppSelector } from "@/hooks/reduxHooks";
import ReviewPrompt from "./ReviewPrompt";
import PromptFailed from "./PromptFailed";

export default function Prompts() {
  const status = useAppSelector((state) => state.prompts.status);  

  switch (status) {
    case "prompt1":
      return <Prompt1 />;
    case "prompt2":
      return <Prompt2 />;
    case "prompt3":
      return <Prompt3 />;
    case "review":
      return <ReviewPrompt />;
    case "error":
      return <PromptFailed />;
    default:
      return <div>Nothing matched</div>;
  }
}

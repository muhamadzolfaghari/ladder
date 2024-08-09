import {
  useVisitorStatus,
  useUpdateVisitorStatus,
} from "@/hooks/VisitorStatus";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { STEPS } from "../resources/steps";

const useGetStartSteps = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const router = useRouter();
  const {
    mutate: updateVisitorStatus,
    isPending: updateVisitorStatusIsPending,
    isSuccess: updateVisitorStatusIsSuccess,
  } = useUpdateVisitorStatus();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentStep((prevState) => prevState - 1);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (updateVisitorStatusIsSuccess) {
      router.push("/prompts");
    }
  }, [router, updateVisitorStatusIsSuccess]);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.history.pushState({ currentStep }, "", window.location.href);
    } else {
      updateVisitorStatus();
    }
  };

  return {
    handleNext,
    currentStep,
    updateVisitorStatusIsPending,
  };
};

export default useGetStartSteps;

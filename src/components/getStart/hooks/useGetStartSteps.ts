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
  const { mutate: updateVisitorStatus } = useUpdateVisitorStatus();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentStep((prevState) => prevState - 1);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.history.pushState({ currentStep }, "", window.location.href);
    } else {
      updateVisitorStatus(undefined, {
        onSuccess: () => {
          router.push("/prompt-1");
        },
        
      });
    }
  };

  return {
    handleNext,
    currentStep,
  };
};

export default useGetStartSteps;

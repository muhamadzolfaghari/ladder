"use client";
import UserGreetText from "@/components/UserGreetText";
import GetStartSteps from "@/components/getStart/GetStartSteps";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [showGetStart, setShowGetStart] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Check user  already seen the GetStart page
    const hasVisitedBefore = localStorage.getItem("hasVisited");

    // The first visit
    if (!hasVisitedBefore) {
      setShowGetStart(true);
    } else {
     
      // router.push("/prompt-1");
    }
  }, [router]);

  //save step ,push to prompt
  const handleGetStartComplete = () => {
    localStorage.setItem("hasVisited", "true");
    // router.push("/prompt-1");
  };

  return (
    <>
      
      {showGetStart && <GetStartSteps onComplete={handleGetStartComplete} />}
       <p>heelo</p>
      <UserGreetText />
    </>
  );
}

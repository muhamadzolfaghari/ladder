"use client";
import UserGreetText from "@/components/UserGreetText";
import GetStartSteps from "@/components/getStart/GetStartSteps";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { useVisitorStatus } from "@/hooks/VisitorStatus";


export default function Page() {
    const { data, isLoading, error } = useVisitorStatus();
    const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  
    useEffect(() => {
      const storedStatus = localStorage.getItem('is_first_visit');
      if (storedStatus !== null) {
        setIsFirstVisit(JSON.parse(storedStatus));
      } else if (data) {
        setIsFirstVisit(data.is_first_visit);
      }
    }, [data]);
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
        <div>
          {data.is_first_visit ? (
            <GetStartSteps onComplete={() => /* logic to handle completion */} />
          ) : (
            <PromptPage />
          )}
        </div>
      );
}

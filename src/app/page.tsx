"use client";
import UserGreetText from "@/components/UserGreetText";
import GetStartSteps from "@/components/getStart/GetStartSteps";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useVisitorStatus } from "@/hooks/VisitorStatus";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const { data, isLoading, error } = useVisitorStatus();
  const router = useRouter();

  useEffect(() => {
    if (session && data?.is_first_visit === false) {
      router.push("/prompt-1");
    }
  }, [session, data, router]);

  if (!session) {
    return   router.push("/login");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data?.is_first_visit ? (
        <GetStartSteps />
      ) : (
        <p>Redirecting...</p>
      )}
      <p>heelo</p>
      <UserGreetText />
    </>
  );
}

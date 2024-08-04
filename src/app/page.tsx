"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useVisitorStatus } from '@/hooks/VisitorStatus';
import UserGreetText from '@/components/UserGreetText';
import GetStartSteps from '@/components/getStart/GetStartSteps';

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: visitorStatus, isLoading, error } = useVisitorStatus();

  useEffect(() => {
    if (error) {
      console.error('Error fetching visitor status:', error);
    }
    if (session && visitorStatus?.hasCompletedGettingStarted) {
      router.push('/prompt-1');
    }
  }, [session, visitorStatus, error, router]);

  if (status === 'loading' || isLoading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <>
      {visitorStatus?.hasVisitedGettingStarted ? <UserGreetText /> : <GetStartSteps />}
    </>
  );
}

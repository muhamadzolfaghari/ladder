import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useVisitorStatus } from '@/hooks/VisitorStatus';
import GettingStartSteps from '@/components/getStart/GetStartSteps';

export default function Page() {
  const router = useRouter();
  const { isLoading, error, data: visitorStatus } = useVisitorStatus();

  useEffect(() => {
    if (error) {
      console.error('Error fetching visitor status:', error);
      // Handle error, e.g., show error message, retry
    }

    if (visitorStatus?.hasCompletedGettingStarted) {
      router.push('/prompt');
    }
  }, [visitorStatus, error, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Replace with a loading indicator
  }

  if (error) {
    return <div>Error fetching visitor status</div>; // Replace with a proper error message
  }

  return <GettingStartSteps />;
}

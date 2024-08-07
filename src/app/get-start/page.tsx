import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useVisitorStatus } from '@/hooks/VisitorStatus';
import GettingStartSteps from '@/components/getStart/GetStartSteps';

export default function Page() {
  return <GettingStartSteps />;
}

import HeaderHomePage from "@/components/HeaderHomePage";
import LadderOverview from "@/components/LadderOverview";
import NavigationBottom from "@/components/NavigationBottom";
import QuoteDay from "@/components/QuoteDay";
import TaskTrackerForDay from "@/components/TaskTrackerForDay";
import { fetchVisitorStatus, useVisitorStatus } from "@/hooks/VisitorStatus";
import { Box, Container } from "@mui/material";

const page = async () => {
  let isFirstVisit: boolean;

  try {
    const res = await fetchVisitorStatus();
    isFirstVisit = res.is_first_visit;
  } catch {
    return <div>Error</div>;
  }

  return (
    <Container sx={{ pt: 2 }}>
      <HeaderHomePage />
      <TaskTrackerForDay />
      <LadderOverview />
      <QuoteDay />
      <NavigationBottom />
    </Container>
  );
};

export default page;

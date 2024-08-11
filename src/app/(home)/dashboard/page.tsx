import HeaderHomePage from "@/components/HeaderHomePage";
import LadderOverview from "@/components/LadderOverview";
import NavigationBottom from "@/components/NavigationBottom";
import QuoteDay from "@/components/QuoteDay";
import TaskTrackerForDay from "@/components/TaskTrackerForDay";
import { Container } from "@mui/material";

const page = async () => {
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

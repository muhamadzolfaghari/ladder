import HeaderHomePage from "@/components/HeaderHomePage";
import LadderOverview from "@/components/LadderOverview";
import TaskTrackerForDay from "@/components/TaskTrackerForDay";
import { Box, Container } from "@mui/material";

const page = () => {
  return (
    <Container sx={{ pt: 2 }}>
      <HeaderHomePage />
      <TaskTrackerForDay />
      <LadderOverview />
    </Container>
  );
};

export default page;

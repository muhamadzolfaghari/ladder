import HeaderHomePage from "@/components/HeaderHomePage";
import TaskTrackerForDay from "@/components/TaskTrackerForDay";
import { Box, Container } from "@mui/material";

const page = () => {
  return (
    <Container sx={{ pt: 2 }}>
      <HeaderHomePage />
      <TaskTrackerForDay />
    </Container>
  );
};

export default page;

import { Box, Typography, List, ListItem, Button } from "@mui/material";
import PhasePrompt from "../../UI/Phases";
import usePreviewLadder from "./hooks/usePreviewLadder";
import ApiLoading from "../../UI/ApiLoading";
import Phases from "../../UI/Phases";

export default function PreviewLadder() {
  const {
    ladder,
    handleBackToPrompt,
    handleStartLadder,
    createLadderIsPending,
  } = usePreviewLadder();

  if (createLadderIsPending) {
    return <ApiLoading />;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        {ladder.fieldOfStudy}
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5">Overview</Typography>
        <List sx={{ listStyleType: "disc", pl: 3 }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            Duration: {ladder.goal} months
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            Time Commitment: {ladder.timeCommitment}
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            Goal: {ladder.goal}
          </ListItem>
        </List>
      </Box>
      <Phases learningPath={ladder.learningPath} />
      <Box
        sx={{
          mt: 10,
          mb: 12,
          display: "flex",
          gap: "2rem",
        }}
      >
        <Button
          onClick={handleBackToPrompt}
          variant="outlined"
          sx={{
            background: "white",
            width: "100%",
            color: "#72796F",
            "&:hover": {
              background: "#fff",
            },
          }}
        >
          Back to prompt
        </Button>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleStartLadder}
        >
          Start Ladder
        </Button>
      </Box>
    </Box>
  );
}

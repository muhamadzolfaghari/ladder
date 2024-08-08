
import ReviewPrompt from "@/components/Review/ReviewPrompt";
import StepBarReview from "@/components/StepBarReview";
import getLadderByUserId from "@/lib/db/getLadderByUserId";
import getUser from "@/lib/utilities/getUser";
import { Box, Container, Typography } from "@mui/material";

export default async function Page() {
  
  const user  = await getUser();
   const ladder =await getLadderByUserId(user!.id!);

  

  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <StepBarReview />
        <ReviewPrompt ladder={ladder} />
      </Container>
    </>
  );
}

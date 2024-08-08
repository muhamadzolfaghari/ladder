<<<<<<< HEAD
import ReviewPrompt from "@/components/Review/ReviewPrompt";
import StepBarReview from "@/components/StepBarReview";
import getLadderByUserId from "@/lib/db/getLadderByUserId";
import getUser from "@/lib/utils/getUser";
=======

import ReviewPrompt from "@/components/Review/ReviewPrompt";
import StepBarReview from "@/components/StepBarReview";
import getLadderByUserId from "@/lib/db/getLadderByUserId";
import getUser from "@/lib/utilities/getUser";
>>>>>>> 3cc19465f327786087febeaa1efa152338a1d126
import { Box, Container, Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default async function Page() {
<<<<<<< HEAD
  const user = await getUser();
  const ladder = await getLadderByUserId(user!.id!);
  if (!ladder) redirect("/prompt-1");
=======
  
  const user  = await getUser();
   const ladder =await getLadderByUserId(user!.id!);

  
>>>>>>> 3cc19465f327786087febeaa1efa152338a1d126

  return (
    <>
      <Container sx={{ mt: 4, px: "1rem" }}>
        <StepBarReview />
<<<<<<< HEAD

=======
>>>>>>> 3cc19465f327786087febeaa1efa152338a1d126
        <ReviewPrompt ladder={ladder} />
      </Container>
    </>
  );
}

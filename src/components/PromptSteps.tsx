"use client";
import React, { useEffect } from "react";
import {
  Button,
  ListItem,
  Typography,
  Box,
  TextField,
  List,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface FormData {
  fieldSpecific: string;
  goal: string;
  currentLevel: string;
}

const schema = z.object({
  fieldSpecific: z.string().min(1, "Field-Specific information is required"),
  goal: z.string().min(1, "Goal information is required"),
  currentLevel: z.string().min(1, "Current Level information is required"),
});

export default function PromptSteps() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const saveData = localStorage.getItem("formDataPrompt1");
    if (saveData) {
      const formData = JSON.parse(saveData);
      setValue("fieldSpecific", formData.fieldSpecific);
      setValue("goal", formData.goal);
      setValue("currentLevel", formData.currentLevel);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    window.localStorage.setItem("formDataPrompt1", JSON.stringify(data));
    console.log(data);
    router.push("/prompt-2");
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Write The Prompt</Typography>
      <Typography variant="body1">
        Let&apos;s give Gemini what it needs to create your first Ladder.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">1 .</Typography>
            <Typography variant="h4">Field-Specific</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Any specific certifications, prerequisites, or foundational
                knowledge required.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Key topics or subfields that need to be covered.
              </Typography>
            </ListItem>
          </List>
          <Box sx={{ mt: 3 }}>
            <TextField
              label="Field-Specific"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={6}
              {...register("fieldSpecific")}
              error={!!errors.fieldSpecific}
              helperText={errors.fieldSpecific?.message}
              placeholder="Key topics: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Git, deployment processes. Foundational knowledge: Basic computer science principles, understanding of HTTP and RESTful APIs."
              fullWidth
            />
          </Box>
        </Box>

        {/* Goal */}
        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">2 .</Typography>
            <Typography variant="h4">Goal</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Specific end goal or competency you want to achieve.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Any milestones or intermediate goals.
              </Typography>
            </ListItem>
          </List>

          <Box sx={{ mt: 3 }}>
            <TextField
              label="Goal"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={6}
              {...register("goal")}
              error={!!errors.goal}
              helperText={errors.goal?.message}
              placeholder="To become proficient in full-stack web development. Achieve competency in building and deploying fully functional web applications. Obtain a certification in web development within 12 months."
              fullWidth
            />
          </Box>
        </Box>

        <Box sx={{ mt: 4, pl: 2 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">3 .</Typography>
            <Typography variant="h4">Current Level:</Typography>
          </Box>

          <List sx={{ pl: 3, listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Your current knowledge or skill level in the field.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <Typography variant="body1">
                Any related skills or experience you already have.
              </Typography>
            </ListItem>
          </List>

          <Box sx={{ mt: 3 }}>
            <TextField
              label="Current Level"
              InputLabelProps={{ shrink: true }}
              multiline
              rows={4}
              {...register("currentLevel")}
              error={!!errors.currentLevel}
              helperText={errors.currentLevel?.message}
              placeholder="Basic understanding of HTML, CSS, and JavaScript. No prior experience with backend development or databases."
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4, pl: 2, mb: 12 }}>
          <Button type="submit" sx={{ width: "100%" }} variant={"contained"}>
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
}

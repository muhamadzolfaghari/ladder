"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useUpdateLadder } from "@/hooks/useUpdateLadder";
import { useAddLearningTask } from "@/hooks/useAddLearningTask";

const GeminiExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState<string>();
  const [data, setData] = useState<string>();
  // const { mutate: generateLadder, data: generateLadderData } =
  //   useGenerateLadder();
  const { mutate: createLadder } = useUpdateLadder();
  const { mutate: addLearningTask } = useAddLearningTask();

  useEffect(() => {
    addLearningTask(
      {
        phase: "Fundamentals",
        duration: "4 weeks",
        learningTask: {
          task: "12",
          resource: "12",
          time: "12",
        },
      },
      {
        onSuccess: () => {
          console.log("success");
        },
        onError: (error) => {
          console.error("Error adding learning task:", error);
        },
      }
    );
  }, [addLearningTask]);



  // compute, time complexity
  // const price = useMemo(() => {
  //   // O(n) * 4
  //   return data.filter(x => x.isValid).max()

  function handlePromptChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setData(undefined);
    setPrompt(event.target.value);
  }

  // console.log(process.env.NEXT_PUBLIC_API_URL);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const url = process.env.NEXT_PUBLIC_API_URL + "/gemini-ai";
    // const url = "/api/gemini-ai";

    const data = prompt
      ?.split("\n")
      .map((line) => line.split(":").map((x) => x.trim()))
      .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

    // Implement payload by JSON
    const payload = {
      field_of_study: "UIUX",
      goal: "Become an expert",
      current_level: "Basic",
      time_commitment: "3 hours a day",
      preferred_learning_style: "Videos",
      learning_pace: "Fast",
      resources_available: "$1000",
      preferred_tools_and_platforms: "Figma",
      language: "English",
    };

    // const data = {
    //   field_of_study: UIUX
    //   goal: Become an expert
    //   current_level: Basic
    //   time_commitment: 3 hours a day
    //   preferred_learning_style: Videos
    //   learning_pace: Fast
    //   resources_available: $1000
    //   preferred_tools_and_platforms: Figma
    //   language: English
    // };
    setIsLoading(true);

    // field_of_study: "UIUX",
    // goal: "Become an expert",
    // current_level: "Basic",
    // time_commitment: "3 hours a day",
    // preferred_learning_style: "Videos",
    // learning_pace: "Fast",
    // resources_available: "$1000",
    // preferred_tools_and_platforms: "Figma",
    // language: "English",

    axios
      .post(url, data)
      .then((res) => {
        setData(res.data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant={"h1"}>Gemini Example</Typography>
        <Stack direction={"row"} m={"auto"}>
          <TextField
            fullWidth
            sx={{ mr: 2 }}
            label={"prompt"}
            value={prompt}
            multiline
            minRows={2}
            onChange={handlePromptChange}
          />
          <Button
            variant={"contained"}
            disabled={!prompt || isLoading}
            type={"submit"}
          >
            submit
          </Button>
        </Stack>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography component={"pre"}>{data}</Typography>
      </form>
    </Container>
  );
};

export default GeminiExample;

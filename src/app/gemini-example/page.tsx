"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const GeminiExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState<string>();
  const [data, setData] = useState<string>();

  function handlePromptChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setData(undefined);
    setPrompt(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const url = "https://ladder-nu.vercel.app/api/gemini-ai";
    // const url = "/api/gemini-ai";
    const data = {
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
    setIsLoading(true);

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

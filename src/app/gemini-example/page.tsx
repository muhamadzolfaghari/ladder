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
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setData(undefined);
    setPrompt(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const url = "http://localhost:3000/" + "/api/gemini-ai";
    const data = { prompt };
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

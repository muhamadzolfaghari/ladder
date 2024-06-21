"use client";

import axios from "axios";
import React, { useEffect } from "react";

const GeminiExample = () => {
  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/test", {
        data: { prompt: "tell me hi" },
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div>
      <h1>Gemini Example</h1>
    </div>
  );
};

export default GeminiExample;

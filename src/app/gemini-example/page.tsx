"use client";

import axios from "axios";
import React, { useEffect } from "react";

console.log(process.env.NEXT_PUBLIC_API_URL, "base api url");


const GeminiExample = () => {
  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/gemini-api", {
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

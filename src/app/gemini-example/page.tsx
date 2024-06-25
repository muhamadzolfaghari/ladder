"use client";

import React, { useEffect } from "react";
import axios from "axios";

const GeminiExample = () => {
  useEffect(() => {
    const url = "https://ladder-nu.vercel.app/api/gemini-ai";
    const data = { prompt: "what is web?" };

    axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
        responseType: "json",
      })
      .then((res) => {
        console.log(res);
      });

    // fetch(url, { method: "POST", body: JSON.stringify(data) }).then((res) => {
    //   console.log(res);
    // });
  }, []);

  return (
    <div>
      <h1>Gemini Example</h1>
    </div>
  );
};

export default GeminiExample;

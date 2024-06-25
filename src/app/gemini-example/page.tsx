"use client";

import React, { useEffect } from "react";
import axios from "axios";

console.log(process.env.NEXT_PUBLIC_API_URL, "base api url");

const GeminiExample = () => {
  useEffect(() => {
    const url = "https://ladder-nu.vercel.app/api/gemini-ai";

    axios.get(url).then((res) => {
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

"use client";

import React, {useEffect} from "react";

console.log(process.env.NEXT_PUBLIC_API_URL, "base api url");

const GeminiExample = () => {
  useEffect(() => {
    const url = "https://ladder-nu.vercel.app/api/gemini-ai";


    // axios
    //   .post(
    //     url,
    //     {
    //       prompt: "tell me hi",
    //     },
    //     // { headers: { "Content-Type": "application/json" } }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        prompt: "give me a roadmap for frontend developer in 3 weeks",
      }),
    }).then(res => {
      console.log(res)
    });
  }, []);

  return (
    <div>
      <h1>Gemini Example</h1>
    </div>
  );
};

export default GeminiExample;

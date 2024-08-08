"use client";
import { useState, useEffect } from "react";

const useReviewPrompt = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("ladder");
    console.log(savedData)
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return data;
};

export default useReviewPrompt;

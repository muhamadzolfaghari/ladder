import { Button } from "@mui/material";
import axios from "axios";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/test", {
        data: { prompt: "what is the meaning of life?" },
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <>
      <Link href="/Prompt1">
        <Button>Get Started</Button>
      </Link>

      <Link href="/get-start">start</Link>
    </>
  );
}

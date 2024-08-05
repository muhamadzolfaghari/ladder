"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowCounter() {
  const [state, setState] = useState(0);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BASE_API_URL! + "/visitor-status")
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return <div>client</div>;
}

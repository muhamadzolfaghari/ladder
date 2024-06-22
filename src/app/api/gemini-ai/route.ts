import { applyCors } from "@/lib/utilities/applyCors";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCWxoLsLt5_xn7d4QtCcIZmSshzdTiNVNc";

  if (applyCors(req, res)) {
    return;
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const data = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error:
        (error as { response: { data: string } })?.response?.data ||
        "An error occurred",
    });
  }
}

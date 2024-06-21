import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCWxoLsLt5_xn7d4QtCcIZmSshzdTiNVNc";

  const data = {
    contents: [
      {
        parts: [
          {
            text: "Explain how AI works",
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as { response: { data: string } }).response.data,
      },
      { status: 500 }
    );
  }
}

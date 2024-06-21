import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  run();
  return NextResponse.json({ a: 1 });
}

async function run() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const prompt = "Write a story about a magic backpack.";

  const request = {
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

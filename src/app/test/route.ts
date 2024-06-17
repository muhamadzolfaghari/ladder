import axios from "axios";

export async function GET() {
  return Response.json(run());
}

async function run() {
  const apiKey = "AIzaSyBguY4FmP090KrqaSuLt95Emrs3y8_j260";
  const prompt = "Write a story about a magic backpack.";

  const request = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
    safetySettings: [
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_ONLY_HIGH",
      },
    ],
    generationConfig: {
      stopSequences: ["Title"],
      temperature: 1.0,
      maxOutputTokens: 800,
      topP: 0.8,
      topK: 10,
    },
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await axios.post(url, request, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (e) {
    console.log(e);
    
    return e;
  }
}

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET() {
  return Response.json({ data: 1 });
}

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  console.log(text);
  
}

run();

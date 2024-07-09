export default function parseGeminiAIResponse(
  response: string,
): object | undefined {
  try {
    const match = response.replace(/\n/g, "").match(/```json\s*(.+?)\s*```/);

    if (!match || match.length < 2) {
      console.error("No valid JSON found in the response");
      return undefined;
    }

    return JSON.parse(match[1]);
  } catch (error) {
    console.error("Error parsing Gemini AI response:", error);
    return undefined;
  }
}

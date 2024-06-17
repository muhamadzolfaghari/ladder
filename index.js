const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI("AIzaSyBguY4FmP090KrqaSuLt95Emrs3y8_j260");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


async function run() {


  const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  console.log(text);
}



run();
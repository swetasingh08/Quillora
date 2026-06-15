import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY?.trim().replace(/^["']|["']$/g, "");
const model = process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";

const ai = new GoogleGenAI({ apiKey });

async function main(prompt) {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
  });
  return response.text
  
}

export default main;

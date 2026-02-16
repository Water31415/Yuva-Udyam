'use server'

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function testGeminiKey() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Say hello in one sentence.");
    const text = result.response.text();

    console.log("Gemini Response:", text);
    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "API Key not working";
  }
}


import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function* streamGemini(prompt: string): AsyncGenerator<string> {
  try {
    const response = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert AI assistant for a developer IDE. Your name is Nexus. You specialize in C++, Unreal Engine (Blueprints and C++), and Python. Provide concise, accurate, and helpful code snippets and explanations. When generating code, use markdown code blocks.",
      },
    });

    for await (const chunk of response) {
      yield chunk.text;
    }
  } catch (error) {
    console.error("Error in streamGemini:", error);
    yield "An error occurred while communicating with the AI. Please check the console for details.";
  }
}

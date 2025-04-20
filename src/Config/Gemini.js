import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDsGFrM_7PDesZbA06j6ncMp9QCzKcW8zA" });

async function runChat(prompt) {

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}


export default runChat;
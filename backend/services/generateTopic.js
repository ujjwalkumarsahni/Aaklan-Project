import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// const genAI = new GoogleGenerativeAI("AIzaSyD7zBiIgIRH_f92kunqGNOfXvJ-QnV6oKA");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateTopic1 = async (position) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",   
    });

    const prompt = `
      Generate one single, short, professional video interview question.
      The question must be relevant to the job role: "${position}".
      Keep the tone formal and clear.
      Do NOT include introduction text, explanation, or bullet points.
      Only output the question itself.
    `;

    const response = await model.generateContent(prompt);

    const text = response.response.text();
    return text.trim();

  } catch (error) {
    console.error("❌ Gemini ERROR:", error);
    return `Default Topic for ${position}: Please explain why you are suitable for this role.`;
  }
};






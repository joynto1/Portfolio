import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, EDUCATION } from '../constants';

// Construct the system context based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI Assistant for Joyonto Kumar Das's portfolio website. 
Your goal is to answer visitor questions about Joyonto's skills, experience, and projects professionally yet creatively.
Maintain a futuristic, helpful, and concise persona.

Here is the context about Joyonto:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Bio: ${PERSONAL_INFO.bio}
Contact: ${PERSONAL_INFO.email}

Skills:
${JSON.stringify(SKILLS)}

Projects:
${JSON.stringify(PROJECTS)}

Experience:
${JSON.stringify(EXPERIENCE)}

Education:
${JSON.stringify(EDUCATION)}

If asked about something not in this data, politely say you don't have that information but suggest contacting him directly via the contact form.
Keep answers relatively short (under 100 words) unless asked for details.
`;

let aiClient: GoogleGenAI | null = null;

export const initGemini = () => {
  const apiKey = process.env.API_KEY;
  if (apiKey) {
    aiClient = new GoogleGenAI({ apiKey });
  }
};

export const chatWithGemini = async (userMessage: string): Promise<string> => {
  if (!aiClient) {
    initGemini();
    if (!aiClient) {
      return "AI Assistant is offline (API Key missing). Please contact Joyonto directly.";
    }
  }

  try {
    const model = aiClient.models;
    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I processed that, but couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System malfunction. Unable to process request at this time.";
  }
};
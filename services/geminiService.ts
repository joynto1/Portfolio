import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, EDUCATION } from '../constants';

const FALLBACK_MESSAGE = "I have informed Joyonto. Please use the contact form.";

const PRESET_QA: Array<{ keywords: string[]; response: string }> = [
  {
    keywords: ["hi", "hello", "hey"],
    response: "Hello! I am Joyonto's assistant. Ask me about skills, projects, or contact info.",
  },
  {
    keywords: ["name", "who are you", "owner"],
    response: `This portfolio belongs to ${PERSONAL_INFO.name}.`,
  },
  {
    keywords: ["role", "title", "position"],
    response: `${PERSONAL_INFO.name} is a ${PERSONAL_INFO.role}.`,
  },
  {
    keywords: ["email", "mail", "contact"],
    response: `Email: ${PERSONAL_INFO.email}.`,
  },
  {
    keywords: ["phone", "number"],
    response: `Phone: ${PERSONAL_INFO.phone}.`,
  },
  {
    keywords: ["location", "address", "where"],
    response: `Location: ${PERSONAL_INFO.location}.`,
  },
  {
    keywords: ["skills", "tech stack", "technologies"],
    response: `Skills include ${SKILLS.map(category => category.category).join(", ")}.`,
  },
  {
    keywords: ["projects", "work", "portfolio"],
    response: `Projects include ${PROJECTS.map(project => project.title).join(", ")}.`,
  },
  {
    keywords: ["experience", "intern"],
    response: `Experience includes ${EXPERIENCE.map(item => item.title).join(", ")}.`,
  },
  {
    keywords: ["education", "study", "degree"],
    response: `Education includes ${EDUCATION.map(item => item.degree).join(", ")}.`,
  },
];

const findPresetAnswer = (message: string): string | null => {
  const text = message.toLowerCase();
  for (const item of PRESET_QA) {
    if (item.keywords.some(keyword => text.includes(keyword))) {
      return item.response;
    }
  }
  return null;
};

export const chatWithGemini = async (userMessage: string): Promise<string> => {
  try {
    const presetAnswer = findPresetAnswer(userMessage);
    if (presetAnswer) {
      return presetAnswer;
    }

    return FALLBACK_MESSAGE;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return FALLBACK_MESSAGE;
  }
};
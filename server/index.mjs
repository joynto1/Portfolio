import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config({ path: '.env.local' });
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const aiClient = apiKey ? new GoogleGenAI({ apiKey }) : null;

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? true }));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/chat', async (req, res) => {
  if (!aiClient) {
    return res.status(500).json({ text: '' });
  }

  const { message, systemInstruction } = req.body ?? {};

  if (typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ text: '' });
  }

  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: typeof systemInstruction === 'string' ? systemInstruction : undefined,
      }
    });

    return res.json({ text: response.text ?? '' });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ text: '' });
  }
});

const port = Number(process.env.PORT ?? 8787);
app.listen(port, () => {
  console.log(`Gemini proxy listening on http://localhost:${port}`);
});

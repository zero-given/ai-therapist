import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

// Configure CORS for development and production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://there-ai.vercel.app', 'https://there-redesign.vercel.app'] 
    : 'http://localhost:5173',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, systemPrompt, history = [] } = req.body;

    // Convert history to Anthropic's message format
    const messages = [
      ...history.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1024,
      messages: messages,
      system: systemPrompt
    });

    res.json({
      content: response.content[0].text,
      tokens: {
        input: response.usage.input_tokens,
        output: response.usage.output_tokens
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
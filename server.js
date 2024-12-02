import express from 'express';
import cors from 'cors';
import { Anthropic } from '@anthropic-ai/sdk';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new Anthropic({
  apiKey: process.env.VITE_CLAUDE_API_KEY
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, systemPrompt } = req.body;
    
    const response = await client.messages.create({
      model: "claude-3-sonnet-20240229",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        { 
          role: "user", 
          content: message 
        }
      ]
    });

    res.json({
      content: response.content[0].text,
      tokens: {
        input: response.usage?.input_tokens || 0,
        output: response.usage?.output_tokens || 0
      }
    });
  } catch (error) {
    console.error('Claude API Error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to get AI response'
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
